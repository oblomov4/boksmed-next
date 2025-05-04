'use server';

import { auth, signIn } from '@/auth';
import { db } from '@/db';
import {
  carts,
  cartsItems,
  forgotPasswordCode,
  futureReviews,
  orders,
  ordersCall,
  reviews,
  SelectForgotPasswordCode,
  SelectUserTable,
  users,
} from '@/db/schema';
import { createPayment } from '@/shared/lib/creat-payment';
import { passwordRecovery } from '@/shared/lib/mail-send';
import { loginSchema, orderCallSchema, registerSchema } from '@/shared/lib/zod';
import { hashSync } from 'bcrypt';
import { eq } from 'drizzle-orm';
import { CredentialsSignin } from 'next-auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type RegisterUserState = {
  errors?: {
    confirmPassword?: string[];
    email?: string[];
    name?: string[];
    lastName?: string[];
    phone?: string[];
    password?: string[];
    inn?: string[];
  };
  message?: string;
};

type EditProfileType = RegisterUserState & {
  successMessage?: string;
};

type LoginUserState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

type OrderCallType = {
  message?: string;
  errors?: {
    name?: string[];
    phone?: string[];
    message?: string[];
  };
  errMessage?: string;
};

type resetPasswordType = {
  error?: string;
};

export async function resetPassword(
  prevState: resetPasswordType,
  formData: FormData,
): Promise<resetPasswordType> {
  try {
    const email = formData.get('email');

    if (!email) {
      return { error: 'Что-то пошло не так!' };
    }

    const findUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email as string),
    });

    if (!findUser) {
      return { error: 'Нет пользователя с таким E-mail' };
    }

    const findCode: SelectForgotPasswordCode | undefined =
      await db.query.forgotPasswordCode.findFirst({
        where: (forgotPasswordCode, { eq }) => eq(forgotPasswordCode.userId, findUser.id),
      });

    if (!findCode) {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      await db.insert(forgotPasswordCode).values({ userId: findUser.id, code });
      await passwordRecovery(findUser.email, code);
    } else {
      await passwordRecovery(findUser.email, findCode.code);
    }
  } catch (err) {
    console.log(err);
    return { error: 'Что-то пошло не та!' };
  }

  redirect('/reset-password-info');
}

export async function orderCall(
  prevState: OrderCallType,
  formData: FormData,
): Promise<OrderCallType> {
  try {
    const validatedFields = orderCallSchema.safeParse({
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    await db.insert(ordersCall).values({ ...validatedFields.data });

    return { message: 'Благодарим за обращение! Скоро мы с вами свяжимся!' };
  } catch (err) {
    console.log(err);
    return {
      errMessage: 'Что-то пошло не так попробуйте позже!',
    };
  }
}

export async function editProfile(
  prevState: EditProfileType,
  formData: FormData,
): Promise<EditProfileType> {
  const session = await auth();

  if (!session) {
    return {};
  }
  const validatedFields = registerSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    lastName: formData.get('lastName'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    inn: formData.get('inn'),
    phone: formData.get('phone'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const iUser: SelectUserTable | undefined = await db.query.users.findFirst({
    where: (usersTabe, { eq }) => eq(usersTabe.email, session?.user.email),
  });

  if (!iUser) {
    return {};
  }

  if (iUser.email !== validatedFields.data.email) {
    const findUser: SelectUserTable | undefined = await db.query.users.findFirst({
      where: (usersTabe, { eq }) => eq(usersTabe.email, validatedFields.data.email),
    });

    if (findUser) {
      return {
        message: 'Такой пользователь существует',
      };
    }
  }

  await db
    .update(users)
    .set({ ...validatedFields.data, password: hashSync(validatedFields.data.password, 10) });

  return {
    successMessage: 'Данный успешно изменены',
  };
}

export async function loginUser(
  prevState: LoginUserState,
  formData: FormData,
): Promise<LoginUserState> {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn('credentials', {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return {
        message: 'Неверный логин или пароль!',
      };
    }

    throw error;
  }

  return redirect('/profile');
}

export async function registerUser(
  prevState: RegisterUserState,
  formData: FormData,
): Promise<RegisterUserState> {
  const validatedFields = registerSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    lastName: formData.get('lastName'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    inn: formData.get('inn'),
    phone: formData.get('phone'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const findUser: SelectUserTable | undefined = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, validatedFields.data.email),
    });

    if (findUser) {
      return {
        message: 'Данный пользователь существует',
      };
    }

    await db.insert(users).values({
      email: validatedFields.data.email,
      name: validatedFields.data.name,
      lastName: validatedFields.data.lastName,
      inn: validatedFields.data.inn,
      phone: validatedFields.data.phone,
      password: hashSync(validatedFields.data.password, 10),
      role: 'USER',
    });
  } catch (err) {
    console.log(err);
  }

  return redirect('/register-success');
}

export async function createOrder(city: string, price: number) {
  try {
    const session = await auth();

    if (!session) {
      throw new Error('not authenticated');
    }

    const cookieStore = await cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Cart token not found');
    }

    /* Находим корзину по токену */

    const userCart = await db.query.carts.findFirst({
      where: (carts, { eq }) => eq(carts.token, cartToken),
      with: {
        users: true,
        cartsItems: {
          with: {
            products: true,
          },
        },
      },
    });

    /* Если корзина не найдена возращаем ошибку */
    if (!userCart) {
      throw new Error('Cart not found');
    }

    /* Если корзина пустая возращаем ошибку */
    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }

    const [ordersCreated] = await db
      .insert(orders)
      .values({
        token: cartToken,
        totalAmount: price,
        address: city,
        userId: Number(session.user.id),
        status: 'PENDING',
        items: JSON.stringify(userCart.cartsItems),
      })
      .returning();

    await db
      .insert(futureReviews)
      .values({ userId: Number(session.user.id), ordersId: ordersCreated.id });

    await db.update(carts).set({ totalAmount: 0 }).where(eq(carts.id, userCart.id));

    await db.delete(cartsItems).where(eq(cartsItems.cartId, userCart.id));

    const paymentData = await createPayment({
      amount: ordersCreated.totalAmount,
      orderId: ordersCreated.id,
      description: 'Оплата заказа #' + ordersCreated.id,
    });

    if (!paymentData) {
      throw new Error('Payment data not found');
    }
    await db
      .update(orders)
      .set({ paymentId: paymentData.id })
      .where(eq(orders.id, ordersCreated.id));

    const paymentUrl = paymentData.confirmation.confirmation_url;

    return paymentUrl;
  } catch (err) {
    console.log('[CreateOrder] Server error', err);
  }
}

export async function sendReviews(
  raiting: '1' | '2' | '3' | '4' | '5',
  text: string,
  productId: number,
  futureReviewsId: number,
): Promise<boolean> {
  try {
    const session = await auth();
    if (!session) {
      throw new Error('not authenticated');
    }

    await db.insert(reviews).values({
      text,
      productId,
      raiting,
      userId: Number(session.user.id),
    });

    await db.delete(futureReviews).where(eq(futureReviews.id, futureReviewsId));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function sendTrackCode(id: number, trackCode: string): Promise<boolean> {
  try {
    const session = await auth();

    if (!session) {
      throw new Error('not authenticated');
    }

    await db
      .update(orders)
      .set({
        trackCode: trackCode,
        adminStatus: 'ОБРАБОТАН',
      })
      .where(eq(orders.id, id));

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
