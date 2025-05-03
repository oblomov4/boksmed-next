import { auth } from '@/auth';
import { db } from '@/db';
import { ordersCall } from '@/db/schema';
import { eq } from 'drizzle-orm';
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
    await db.delete(ordersCall).where(eq(ordersCall.id, res.id));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ success: false });
  }
});
