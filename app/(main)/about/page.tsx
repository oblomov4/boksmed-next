import { AboutWrapper, BreadCrumps } from '@/shared/components';

export default function AboutPage() {
  return (
    <>
      <BreadCrumps
        links={[
          {
            id: 0,
            text: 'Гланая',
            link: '/',
          },
          {
            id: 1,
            text: 'О Компании',
            link: '/about',
          },
        ]}
      />

      <section className="about">
        <div className="container">
          <h2 className="title">О компании</h2>
          <AboutWrapper />
        </div>
      </section>
    </>
  );
}
