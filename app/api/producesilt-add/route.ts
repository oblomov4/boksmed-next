import { db } from '@/db';
import { producesilts } from '@/db/schema';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    await db.insert(producesilts).values({
      title: res.title,
      description: res.description,
      imageUrl: res.imageUrl ? `/assets/${res.imageUrl}` : '',
    });

    return NextResponse.json({ message: 'Производитель успешно добавлен!' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: 'Что-то пошло не так!' });
  }
}
