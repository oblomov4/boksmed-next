import { db } from '@/db';
import { categories } from '@/db/schema';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    await db.insert(categories).values({
      title: res.title,
      imageUrl: res.imageUrl != '' ? `/assets/${res.imageUrl}` : '',
    });

    return NextResponse.json({ message: 'Категория добавлена' });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: 'Что-то пошло не так!' });
  }
}
