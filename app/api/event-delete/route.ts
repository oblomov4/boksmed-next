import { db } from '@/db';
import { events } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    await db.delete(events).where(eq(events.id, res.id));

    return NextResponse.json({ message: 'success' });
  } catch {
    return NextResponse.json({ message: 'err' });
  }
}
