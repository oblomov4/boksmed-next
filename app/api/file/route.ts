import { auth } from '@/auth';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export const POST = auth(async (req) => {
  try {
    const admin = req.auth;
    if (!admin) {
      throw new Error('not authenticated');
    }
    if (admin.user.role === 'USER') {
      throw new Error('not authenticated');
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      throw new Error();
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const filename = file.name.replaceAll(' ', '_');

    await writeFile(path.join(process.cwd(), 'public/assets/' + filename), buffer);

    return NextResponse.json({ message: 'Success', fileName: filename, status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Failed', status: 500 });
  }
});
