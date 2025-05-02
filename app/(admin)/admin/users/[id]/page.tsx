import { db } from '@/db';
import { SelectUserTable } from '@/db/schema';
import Link from 'next/link';

export default async function AdminUserPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const findUser: SelectUserTable | undefined = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, id),
  });

  if (!findUser) {
    return <h2 className="title main-content-title">Пользователя не существует</h2>;
  }

  return (
    <div className="user-profile__inner">
      <div className="user-profile__box">{findUser.name}</div>
      <div className="user-profile__box">{findUser.lastName}</div>
      <div className="user-profile__box">
        <Link href={`/admin/users/${id}/orders`}>Заказы</Link>
      </div>
      <div className="user-profile__box">{findUser.phone}</div>
      <div className="user-profile__box">{findUser.inn}</div>
      <div className="user-profile__box">
        <Link href={`/admin/users/${id}/reviews`}>Оценки</Link>
      </div>
      <div className="user-profile__box">{findUser.email}</div>
      <div className="user-profile__box">{findUser.role}</div>
    </div>
  );
}
