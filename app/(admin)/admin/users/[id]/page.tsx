import { db } from '@/db';
import { SelectUserTable } from '@/db/schema';

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
        <a href="#">Заказы</a>
      </div>
      <div className="user-profile__box">{findUser.phone}</div>
      <div className="user-profile__box">{findUser.inn}</div>
      <div className="user-profile__box">
        <a href="">Оценки</a>
      </div>
      <div className="user-profile__box">{findUser.email}</div>
      <div className="user-profile__box">{findUser.role}</div>
    </div>
  );
}
