'use server';

import { auth, signIn } from '@/auth';
import { db } from '@/db';
import { SelectUserTable, users } from '@/db/schema';
import { loginSchema, registerSchema } from '@/shared/lib/zod';
import { hashSync } from 'bcrypt';
import { CredentialsSignin } from 'next-auth';
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

  console.log(validatedFields);

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
  console.log('ПОпало сюда?');

  console.log(formData);

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
