import { auth } from '@/auth';
import { db } from '@/db';
import { products } from '@/db/schema';
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
    await db.insert(products).values(res);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ success: false });
  }
});
