'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type ServerCheckCodeType = {
  error?: string;
  success?: boolean;
};

type ServerStateType = {
  errors?: {
    confirmPassword?: string[];
  };
  messageError?: string;
  changedPassword?: boolean;
};

export const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const [code, setCode] = React.useState<string>('');
  const [serverCheckCode, setServerCheckCode] = React.useState<ServerCheckCodeType>({
    success: false,
  });

  const [serverState, setServerState] = React.useState<ServerStateType>({});
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  async function checkCode(): Promise<void> {
    if (code.length < 2) return;

    try {
      const res = await fetch('api/check-code', {
        method: 'POST',
        body: JSON.stringify({ code: code }),
      });
      const data = await res.json();
      setServerCheckCode(data);
    } catch (err) {
      console.log(err);
      setServerCheckCode({
        error: 'Что-то пошло не так попробуйте позже!',
      });
    }
  }

  async function handleResetPassword() {
    try {
      const resetPasswordObj = {
        password,
        confirmPassword,
      };

      const res = await fetch('/api/reset-password', {
        method: 'POST',
        body: JSON.stringify(resetPasswordObj),
      });

      const data = await res.json();

      setServerState(data);
    } catch (err) {
      console.log(err);

      setServerState({
        messageError: 'Что-то пошло не так!',
      });
    }
  }

  React.useEffect(() => {
    if (serverState.changedPassword) {
      router.push('/changed-password');
    }
  }, [serverState, router]);

  return (
    <>
      {!serverCheckCode.success && (
        <>
          <div className="anonym__content-left">
            <input
              placeholder="Введите код для сброса пароля"
              type="email"
              className="anonym__content-input"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {serverCheckCode.error && <p className="err">{serverCheckCode.error}</p>}

          <button className="promo__box-link" onClick={checkCode}>
            Проверить
          </button>
        </>
      )}

      {serverCheckCode.success && (
        <>
          <div className="anonym__content-left">
            <input
              placeholder="Введите пароль"
              type="password"
              className="anonym__content-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              placeholder="Подтвердите пароль"
              type="password"
              className="anonym__content-input"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {serverState.errors?.confirmPassword &&
            serverState.errors.confirmPassword.map((item, index) => (
              <p className="err" key={index}>
                {item}
              </p>
            ))}

          {serverState.messageError && <p className="err">{serverState.messageError}</p>}

          <button className="promo__box-link" onClick={handleResetPassword}>
            Проверить
          </button>
        </>
      )}
    </>
  );
};
