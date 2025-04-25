'use client';

export default function TestimLoad() {
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }

    const formData = new FormData();

    const file = event.target.files[0];

    formData.append('file', file);

    await fetch('/api/file', {
      method: 'POST',
      body: formData,
    });
  }

  return <input type="file" onChange={handleFileUpload} />;
}
