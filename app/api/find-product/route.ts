import { db } from '@/db';
import { products } from '@/db/schema';
import { sql } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    const title = res.find;

    const find = await db
      .select()
      .from(products)
      .where(
        sql`to_tsvector('russian', ${products.title}) @@ to_tsquery('russian', ${title}) AND ${products.visible} = ${true}`,
      );

    return NextResponse.json(find);
  } catch (err) {
    console.log(err);
  }
}
