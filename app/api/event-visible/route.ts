import { auth } from '@/auth';
import { db } from '@/db';
import { events, SelectEventsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const PATCH = auth(async (req) => {
  try {
    const admin = req.auth;
    if (!admin) {
      throw new Error('not authenticated');
    }
    if (admin.user.role === 'USER') {
      throw new Error('not authenticated');
    }
    const res = await req.json();

    const event: SelectEventsTable | undefined = await db.query.events.findFirst({
      where: (events, { eq }) => eq(events.id, res.id),
    });

    if (!event) {
      throw new Error();
    }

    await db.update(events).set({ visible: !event.visible }).where(eq(events.id, res.id));
    revalidatePath('/about');

    return NextResponse.json({ message: 'success' });
  } catch {
    return NextResponse.json({ message: 'error' });
  }
});
