import { db } from '@/db';
import { productTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    await db
      .update(productTable)
      .set({
        quantity: res.quantity,
      })
      .where(eq(productTable.id, res.id));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ success: false });
  }
}
