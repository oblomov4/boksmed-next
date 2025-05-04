import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

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

    const blob = await put(file.name, file, {
      access: 'public',
      allowOverwrite: true,
    });

    return NextResponse.json({ message: 'Success', fileName: blob.url, status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'Failed', status: 500 });
  }
});
