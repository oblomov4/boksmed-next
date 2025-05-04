import { FormWrapper, ResetPasswordForm } from '@/shared/components';

export default function ResetPasswordPage() {
  return (
    <div className="container">
      <FormWrapper border title="Сбросить пароль">
        <ResetPasswordForm />
      </FormWrapper>
      ;
    </div>
  );
}
