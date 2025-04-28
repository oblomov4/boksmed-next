import { db } from '@/db';
import { productTable } from '@/db/schema';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();
    await db.insert(productTable).values(res);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ success: false });
  }
}
