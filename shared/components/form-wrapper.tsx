/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React from 'react';

interface Props {
  title: string;
  description?: string;
  imgUrl?: string;
  underFormText?: string;
  border?: boolean;
}

export const FormWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  description,
  imgUrl,
  underFormText,
  border,
}) => {
  return (
    <div className={clsx('form-wrapper', border && 'border')}>
      <div className="form-wrapper-header">
        <div className="form-wrapper-text">
          <h3 className="form-wrapper-title">{title}</h3>
          {description && <p className="form-wrapper-subtitle">{description}</p>}
        </div>
        {imgUrl && <img className="form-wrapper-img" src={imgUrl} alt="" />}
      </div>

      <div className="form-wrapper-container">
        {children}
        {underFormText && <p className="form-wrapper-politic">{underFormText}</p>}
      </div>
    </div>
  );
};
