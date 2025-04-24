import { BreadCrumps, DetailsInfo, FormWrapper, QuestionForm } from '@/shared/components';

export default function DetailsPage() {
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
            text: 'Реквизиты',
            link: '/details',
          },
        ]}
      />
      <h2 className="title">Реквизиты</h2>

      <DetailsInfo />

      <section className="form-section">
        <div className="container">
          <FormWrapper
            title="Задать вопрос"
            underFormText="Нажимая на кнопку «отправить», я соглашаюсь с условиями."
            border>
            <QuestionForm />
          </FormWrapper>
        </div>
      </section>
    </>
  );
}
