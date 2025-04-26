import { db } from '@/db';
import { AdminUsersTable } from '@/shared/components';

export default async function UsersPage() {
  const users = await db.query.usersTable.findMany();

  return (
    <>
      <h2 className="title main-content-title">Пользователи</h2>

      <div className="table-background">
        {users.map((user, index) => {
          if (index === 0) {
            return (
              <AdminUsersTable
                id={user.id}
                lastName={user.lastName}
                name={user.name}
                phone={user.phone}
                key={user.id}
                info={true}
                inn={user.inn}
                role={user.role}
              />
            );
          } else {
            return (
              <AdminUsersTable
                key={user.id}
                id={user.id}
                lastName={user.lastName}
                name={user.name}
                info={false}
                phone={user.phone}
                inn={user.inn}
                role={user.role}
              />
            );
          }
        })}
        {/* <AdminUsersTable info={true} />
        <AdminUsersTable info={false} />
        <AdminUsersTable info={false} />
        <AdminUsersTable info={false} />
        <AdminUsersTable info={false} /> */}
      </div>
    </>
  );
}
