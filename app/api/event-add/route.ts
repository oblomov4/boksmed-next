import { auth } from '@/auth';
import { db } from '@/db';
import { events } from '@/db/schema';
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

    const imageUrl = '/assets/' + res.imageUrl;

    await db.insert(events).values({
      title: res.title,
      description: res.description,
      imageUrl,
    });

    return NextResponse.json(
      {
        message: 'Событие добавлено!',
      },
      {
        status: 201,
      },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: 'Что-то пошло не так' }, { status: 500 });
  }
});
