import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://pecom.ru/ru/calc/towns.php');

    const data = await res.json();

    return NextResponse.json({
      data,
    });
    
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        message: 'Что-то пошло не так!',
      },
      { status: 500 },
    );
  }
}
