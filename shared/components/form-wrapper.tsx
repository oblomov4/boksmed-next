/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  title: string;
  description: string;
  imgUrl?: string;
  underFormText?: string;
}

export const FormWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  description,
  imgUrl,
  underFormText,
}) => {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper-header">
        <div className="form-wrapper-text">
          <h3 className="form-wrapper-title">{title}</h3>
          <p className="form-wrapper-subtitle">{description}</p>
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
