import { db } from '@/db';
import { SelectEventsTable } from '@/db/schema';
import { AboutWrapper, BreadCrumps } from '@/shared/components';

export default async function AboutPage() {
  const events: SelectEventsTable[] | undefined = await db.query.eventsTable.findMany({
    where: (eventsTable, { eq }) => eq(eventsTable.visible, true),
  });

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
          <AboutWrapper events={events} />
        </div>
      </section>
    </>
  );
}
