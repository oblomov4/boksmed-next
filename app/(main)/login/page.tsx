import { BreadCrumps, FormWrapper, LoginForm } from '@/shared/components';

export default function LoginPage() {
  return (
    <>
      <BreadCrumps
        links={[
          {
            id: 0,
            text: 'Главная',
            link: '/',
          },

          {
            id: 1,
            text: 'Вход',
            link: '/login',
          },
        ]}
      />

      <section className="login">
        <div className="container">
          <FormWrapper
            border={true}
            title="Войти в личный кабинет"
            underFormText="Нажимая на кнопку «Регистрация», я соглашаюсь с условиями."
            imgUrl="../images/wearable.png">
            <LoginForm />
          </FormWrapper>
        </div>
      </section>
    </>
  );
}
