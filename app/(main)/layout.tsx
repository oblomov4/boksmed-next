import { Footer, Header } from '@/shared/components';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper">
      <Header />

      <div className="main">{children}</div>

      <Footer />
    </div>
  );
}
