import { db } from '@/db';
import { categories, SelectCategoryTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

type UpdatedCategoryType = {
  title?: string;
  imageUrl?: string;
};

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    const category: SelectCategoryTable | undefined = await db.query.categories.findFirst({
      where: (categories, { eq }) => eq(categories.id, res.id),
    });

    if (!category) {
      throw new Error();
    }

    const updatedCategory: UpdatedCategoryType = {};

    if (res.imageUrl !== '') {
      updatedCategory.imageUrl = '/assets/' + res.imageUrl;
    }

    if (res.title !== category.title) {
      updatedCategory.title = res.title;
    }

    await db
      .update(categories)
      .set({ ...updatedCategory })
      .where(eq(categories.id, res.id));

    return NextResponse.json({ message: 'Категория обновлена!' });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: 'Что-то пошло не так!' });
  }
}
