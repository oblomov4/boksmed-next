import { db } from '@/db';
import { ordersCall } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function DELETE(req: NextRequest) {
  try {
    const res = await req.json();
    await db.delete(ordersCall).where(eq(ordersCall.id, res.id));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ success: false });
  }
}
