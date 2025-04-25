import { SidebarAdmin } from '@/shared/components';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-container">
      <SidebarAdmin />

      <div className="main-content">{children}</div>
    </div>
  );
}
