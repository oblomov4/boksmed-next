import { ForgotPasswordForm, FormWrapper } from '@/shared/components';

export default function ForgotPassword() {
  return (
    <div className="container">
      <FormWrapper border title="Забыли пароль">
        <ForgotPasswordForm />
      </FormWrapper>
      ;
    </div>
  );
}
