import {
  BreadCrumps,
  ContactInfo,
  FormWrapper,
  MapComponent,
  QuestionForm,
} from '@/shared/components';

export default function ContactsPage() {
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
            text: 'Контакты',
            link: '/contacts',
          },
        ]}
      />

      <section className="contacts">
        <h2 className="title">Контакты</h2>
        <ContactInfo />

        <div className="container">
          <MapComponent />

          <div className="question-main">
            <FormWrapper
              border
              title="Задать вопрос"
              underFormText=" Нажимая на кнопку «отправить», я соглашаюсь с условиями.">
              <QuestionForm />
            </FormWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
