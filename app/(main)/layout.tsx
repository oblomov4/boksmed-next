import { Header } from '@/shared/components';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
}
