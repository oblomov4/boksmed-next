import { auth } from '@/auth';
import { db } from '@/db';
import { producesilts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
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

    if (!res.id) {
      throw new Error();
    }

    await db.delete(producesilts).where(eq(producesilts.id, res.id));

    revalidatePath('/producesilt');

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
});
