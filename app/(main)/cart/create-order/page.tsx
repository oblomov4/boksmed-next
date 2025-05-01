'use client';

import { FormWrapper } from '@/shared/components';
import { CreateOrderForm } from '@/shared/components/create-order-form';

export default function CreateOrderPage() {
  return (
    <div className="create-order">
      <div className="container">
        <FormWrapper border title="Оформление заказа">
          <CreateOrderForm />
        </FormWrapper>
      </div>
    </div>
  );
}
