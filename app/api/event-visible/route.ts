import { db } from '@/db';
import { eventsTable, SelectEventsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    const event: SelectEventsTable | undefined = await db.query.eventsTable.findFirst({
      where: (eventsTable, { eq }) => eq(eventsTable.id, res.id),
    });

    if (!event) {
      throw new Error();
    }

    await db.update(eventsTable).set({ visible: !event.visible }).where(eq(eventsTable.id, res.id));

    return NextResponse.json({ message: 'success' });
  } catch {
    return NextResponse.json({ message: 'error' });
  }
}
