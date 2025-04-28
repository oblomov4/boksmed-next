import { db } from '@/db';
import { SelectEventsTable } from '@/db/schema';
import { AboutAdmin, AdminEventTable } from '@/shared/components';

export default async function AboutPage() {
  const events: SelectEventsTable[] | undefined = await db.query.eventsTable.findMany();

  return (
    <>
      <h2 className="title main-content-title">Мероприятия (события)</h2>

      <AboutAdmin />

      {events && (
        <div className="table-background">
          {events.map((item, index) => {
            if (index === 0) {
              return (
                <AdminEventTable
                  id={item.id}
                  description={item.description}
                  visible={item.visible}
                  title={item.title}
                  imageUrl={item.imageUrl!}
                  key={item.id}
                  info={true}
                />
              );
            } else {
              return (
                <AdminEventTable
                  id={item.id}
                  description={item.description}
                  visible={item.visible}
                  title={item.title}
                  imageUrl={item.imageUrl!}
                  key={item.id}
                  info={false}
                />
              );
            }
          })}
        </div>
      )}
    </>
  );
}
