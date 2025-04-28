import { db } from '@/db';
import { producesiltTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    if (!res.id) {
      throw new Error();
    }

    await db.delete(producesiltTable).where(eq(producesiltTable.id, res.id));

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false });
  }
}
