import { FormWrapper } from '@/shared/components';
import { RegisterForm } from '@/shared/components/register-form';

export default function RegisterPage() {
  return (
    <div className="register-page">
      <div className="container">
        <FormWrapper title="Зарегистрировать аккаунт" border>
          <RegisterForm />
        </FormWrapper>
      </div>
    </div>
  );
}
