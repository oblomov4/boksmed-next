import { AdminUsersTable } from '@/shared/components';

export default function UsersPage() {
  return (
    <>
      <h2 className="title main-content-title">Пользователи</h2>

      <div className="table-background">
        <AdminUsersTable info={true} />
        <AdminUsersTable info={false} />
        <AdminUsersTable info={false} />
        <AdminUsersTable info={false} />
        <AdminUsersTable info={false} />
      </div>
    </>
  );
}
