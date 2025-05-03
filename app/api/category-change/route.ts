import { auth } from '@/auth';
import { db } from '@/db';
import { categories, SelectCategoryTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

type UpdatedCategoryType = {
  title?: string;
  imageUrl?: string;
};

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
});
