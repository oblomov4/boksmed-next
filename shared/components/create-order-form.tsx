'use client';

import React from 'react';
import { ChooceCityInput } from './chooce-city-input';
import { AllCitiesType, ServerMessageType } from './calculate-component';
import { LoadingCalculate } from './loading-calculate';
import { useCart } from '../hooks/use-cart';
import { ButtonCreateOrder } from './button-create-order';

export const CreateOrderForm: React.FC = () => {
  const [cities, setCities] = React.useState<Array<string> | null>(null);
  const [allCities, setAllCities] = React.useState<AllCitiesType | null>(null);
  const [input, setInput] = React.useState<string>('');
  const [chooiceCities, setChooiceCities] = React.useState<string[]>([]);
  const [serverMessage, setServerMessage] = React.useState<ServerMessageType>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const { totalAmount } = useCart();

  React.useEffect(() => {
    async function getCities() {
      try {
        const res = await fetch('/api/get-cities');
        const data = await res.json();

        const arr1 = [];
        const arr2 = [];

        for (const keyOne in data.data) {
          arr1.push(keyOne);

          for (const keyTwo in data.data[keyOne]) {
            arr2.push(data.data[keyOne][keyTwo]);
          }
        }

        const cities = arr1.concat(arr2);

        setCities(cities);
        setAllCities(data.data);
      } catch (err) {
        console.log('СЛОВИЛ ОШИБКУ');

        console.log(err);
      }
    }

    if (!cities && !allCities) {
      getCities();
      console.log(cities);
    }
  }, [cities, allCities]);

  function hadleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
    if (cities) {
      const value = input.length > 0 ? input[0].toUpperCase() + input.slice(1) : '';
      const res = cities.filter((item) => item.includes(value));
      setChooiceCities(res);
    }
  }

  async function handleClickGetSum() {
    let citiesId: string | null = null;

    for (const keyOne in allCities) {
      for (const keyTwo in allCities[keyOne]) {
        if (allCities[keyOne][keyTwo] === input) {
          citiesId = keyTwo;
          break;
        }
      }
    }

    const obj = {
      cityId: citiesId,
    };
    try {
      setLoading(true);
      const res = await fetch('/api/get-sum-dilivery', {
        method: 'POST',
        body: JSON.stringify(obj),
      });

      const data = await res.json();

      setServerMessage(data);
    } catch (err) {
      console.log(err);
      setServerMessage({ err: 'Что-то пошло не так' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="title-pek">Мы доставляем заказы через ПЭК</h1>
      <div className="calc-wrapper-city">
        <input
          name="adress"
          className="dilivery__calculate-input"
          placeholder="Город получатель"
          onChange={(e) => hadleInputChange(e)}
          disabled={cities?.length == 0}
          value={input}
        />
        {chooiceCities.length != 0 && input != '' && (
          <ChooceCityInput
            cities={chooiceCities}
            setInput={setInput}
            setChooiceCity={setChooiceCities}
          />
        )}
      </div>

      <button
        className="dilivery__calculate-button promo__box-link pek-btn"
        onClick={handleClickGetSum}>
        Расчитать конечную стоимость
      </button>

      {loading && <LoadingCalculate width={50} />}
      {serverMessage?.message && (
        <>
          <p className="calc-message">
            {serverMessage.message[0]} - {serverMessage.message[2]}
          </p>

          <p className="final">
            ИТОГО: <b>{totalAmount + Number(serverMessage.message[2])}</b>
          </p>

          <ButtonCreateOrder
            city={input}
            totalAmount={totalAmount}
            diliveryAmount={Number(serverMessage.message[2])}
          />
        </>
      )}

      {serverMessage?.err && <p className="calc-err">{serverMessage.err}</p>}

      {serverMessage?.errors &&
        serverMessage.errors.map((item, id) => (
          <p key={id} className="calc-err">
            {item}
          </p>
        ))}
    </div>
  );
};
