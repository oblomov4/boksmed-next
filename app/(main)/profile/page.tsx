import { auth } from '@/auth';
import { BreadCrumps, FormProfile, ProfileMenu } from '@/shared/components';
import Link from 'next/link';

export default async function ProfilePage() {
  const session = await auth();

  return (
    <>
      <BreadCrumps
        links={[
          { id: 0, text: 'Главная', link: '/' },
          { id: 1, text: 'Личный кабинет', link: 'profile' },
        ]}
      />

      <section className="profile">
        <div className="container">
          <div className="profile__inner">
            {session ? (
              <>
                <FormProfile session={session} />
                <ProfileMenu />
              </>
            ) : (
              <div className="info-profile">
                <Link className="info-profile__link" href="/login">
                  Нажмите чтобы войти в аккаунт!
                </Link>
              </div>
            )}
            {/* <FormProfile />
            <ProfileMenu /> */}
          </div>
        </div>
      </section>
    </>
  );
}
