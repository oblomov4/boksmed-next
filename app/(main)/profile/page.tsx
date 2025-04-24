import { BreadCrumps, FormProfile, ProfileMenu } from '@/shared/components';

export default function ProfilePage() {
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
            <FormProfile />
            <ProfileMenu />
          </div>
        </div>
      </section>
    </>
  );
}
