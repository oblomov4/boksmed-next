import { auth } from '@/auth';
import { SidebarAdmin } from '@/shared/components';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user.role !== 'ADMIN') {
    redirect('/admin-login');
  }
  return (
    <div className="admin-container">
      <SidebarAdmin />

      <div className="main-content">{children}</div>
    </div>
  );
}
