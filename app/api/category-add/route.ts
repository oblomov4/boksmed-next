import { auth } from '@/auth';
import { db } from '@/db';
import { categories } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = auth(async (req) => {
  try {
    const admin = req.auth;
    if (!admin) {
      throw new Error('not authenticated');
    }
    if (admin.user.role === 'USER') {
      throw new Error('not authenticated');
    }

    const res = await req.json();

    await db.insert(categories).values({
      title: res.title,
      imageUrl: res.imageUrl ? res.imageUrl : '',
    });

    revalidatePath('/catalog');
    return NextResponse.json({ message: 'Категория добавлена' });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: 'Что-то пошло не так!' });
  }
});
