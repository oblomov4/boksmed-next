'use server';

import { signIn } from '@/auth';
import { db } from '@/db';
import { SelectUserTable, usersTable } from '@/db/schema';
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

type LoginUserState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

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
    const findUser: SelectUserTable | undefined = await db.query.usersTable.findFirst({
      where: (users, { eq }) => eq(users.email, validatedFields.data.email),
    });

    if (findUser) {
      return {
        message: 'Данный пользователь существует',
      };
    }

    await db.insert(usersTable).values({
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
