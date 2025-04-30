import { db } from '@/db';
import { events, SelectEventsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    const event: SelectEventsTable | undefined = await db.query.events.findFirst({
      where: (events, { eq }) => eq(events.id, res.id),
    });

    if (!event) {
      throw new Error();
    }

    await db.update(events).set({ visible: !event.visible }).where(eq(events.id, res.id));

    return NextResponse.json({ message: 'success' });
  } catch {
    return NextResponse.json({ message: 'error' });
  }
}
