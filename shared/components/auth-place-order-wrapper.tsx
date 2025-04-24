import React from 'react';
import { AuthPlaceOrder } from './auth-place-order';
import { AuthPlaceNewBuyer } from './auth-place-new-buyer';

export const AuthPlaceOrderWrapper: React.FC = () => {
  return (
    <div className="auth-wrapper">
      <AuthPlaceNewBuyer />
      <AuthPlaceOrder />
    </div>
  );
};
