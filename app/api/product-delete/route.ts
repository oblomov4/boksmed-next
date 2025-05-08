import { auth } from '@/auth';
import { db } from '@/db';
import { products } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export const DELETE = auth(async (req) => {
  try {
    const admin = req.auth;
    if (!admin) {
      throw new Error('not authenticated');
    }
    if (admin.user.role === 'USER') {
      throw new Error('not authenticated');
    }

    const res = await req.json();

    await db.delete(products).where(eq(products.id, res.id));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
});
