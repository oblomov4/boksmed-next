import { z } from 'zod';

export const passwordSchema = z
  .string({ required_error: 'Пароль обязательное поле!' })
  .min(4, { message: 'Введите корректный пароль!' });

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Почта обязательное поле!' })
    .email({ message: 'Введите корректную почту!' }),
  password: passwordSchema,
});

export const registerSchema = loginSchema
  .merge(
    z.object({
      name: z
        .string({ required_error: 'Имя обязательное поле!' })
        .min(2, { message: 'Введите имя и фамилию!' }),
      lastName: z
        .string({ required_error: 'Фамилия обязательное поле!' })
        .min(2, { message: 'Введите имя и фамилию!' }),
      inn: z
        .string({ required_error: 'Инн обязательное поле!' })
        .min(12, { message: 'Введите коректный ИНН' }),
      phone: z
        .string({ required_error: 'Номер обязательное поле!' })
        .min(11, { message: 'Введите номер' }),
      confirmPassword: passwordSchema,
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export const orderCallSchema = z.object({
  name: z.string().min(2, 'Имя обязательное поле'),
  phone: z.string().min(10, 'Телефон обязательное поле'),
  message: z.string().min(5, 'Сообщение обязательное поле'),
});
