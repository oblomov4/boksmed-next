import { writeFile } from 'fs/promises';
import { type NextRequest, NextResponse } from 'next/server';
import path from 'path';

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    throw new Error();
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const filename = file.name.replaceAll(' ', '_');
  console.log(filename);

  try {
    // Write the file to the specified directory (public/assets) with the modified filename
    await writeFile(path.join(process.cwd(), 'public/assets/' + filename), buffer);

    // Return a JSON response with a success message and a 201 status code
    return NextResponse.json({ message: 'Success', fileName: filename, status: 201 });
  } catch (error) {
    // If an error occurs during file writing, log the error and return a JSON response with a failure message and a 500 status code
    console.log('Error occurred ', error);
    return NextResponse.json({ message: 'Failed', status: 500 });
  }
};
