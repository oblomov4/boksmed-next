import { auth } from '@/auth';
import { db } from '@/db';
import { producesilts } from '@/db/schema';
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

    await db.insert(producesilts).values({
      title: res.title,
      description: res.description,
      imageUrl: res.imageUrl ? res.imageUrl : '',
    });


    return NextResponse.json({ message: 'Производитель успешно добавлен!' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: 'Что-то пошло не так!' });
  }
});
