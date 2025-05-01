import { db } from '@/db';
import { AdminUsersTable } from '@/shared/components';

export default async function UsersPage() {
  const users = await db.query.users.findMany();

  return (
    <>
      <h2 className="title main-content-title">Пользователи</h2>

      <div className="table-background">
        {users.map((user) => {
          return (
            <AdminUsersTable
              id={user.id}
              lastName={user.lastName}
              name={user.name}
              phone={user.phone}
              key={user.id}
              inn={user.inn}
              role={user.role}
            />
          );
        })}
      </div>
    </>
  );
}
