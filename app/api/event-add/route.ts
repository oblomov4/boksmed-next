import { db } from '@/db';
import { eventsTable } from '@/db/schema';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    const imageUrl = '/assets/' + res.imageUrl;

    await db.insert(eventsTable).values({
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
}
