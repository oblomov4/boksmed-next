import { db } from '@/db';
import { categoryTable, SelectCategoryTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse, type NextRequest } from 'next/server';

type UpdatedCategoryType = {
  title?: string;
  imageUrl?: string;
};

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();

    const category: SelectCategoryTable | undefined = await db.query.categoryTable.findFirst({
      where: (categoryTable, { eq }) => eq(categoryTable.id, res.id),
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
      .update(categoryTable)
      .set({ ...updatedCategory })
      .where(eq(categoryTable.id, res.id));

    return NextResponse.json({ message: 'Категория обновлена!' });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: 'Что-то пошло не так!' });
  }
}
