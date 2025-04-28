import { db } from '@/db';
import { eventsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    await db.delete(eventsTable).where(eq(eventsTable.id, res.id));

    return NextResponse.json({ message: 'success' });
  } catch {
    return NextResponse.json({ message: 'err' });
  }
}
