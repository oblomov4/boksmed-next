export default function AdminLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="admin-login">{children}</div>;
}
