'use client';

import React from 'react';
import { ChooceCityInput } from './chooce-city-input';
import { LoadingCalculate } from './loading-calculate';

type CalculateParamsType = {
  weight: number;
  length: number;
  width: number;
  heightProd: number;
};

export type AllCitiesType = {
  [key: string]: { [number: string]: string };
};

export type ServerMessageType = {
  message?: string[];
  err?: string;
  errors?: string[];
};

export const CalculateComponent: React.FC = () => {
  const [cities, setCities] = React.useState<Array<string> | null>(null);
  const [allCities, setAllCities] = React.useState<AllCitiesType | null>(null);
  const [input, setInput] = React.useState<string>('');
  const [chooiceCities, setChooiceCities] = React.useState<string[]>([]);
  const [serverMessage, setServerMessage] = React.useState<ServerMessageType>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const [calculateParams, setCalculateParams] = React.useState<CalculateParamsType>({
    width: 0,
    length: 0,
    weight: 0,
    heightProd: 0,
  });

  async function handleClick() {
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
      ...calculateParams,
    };
    try {
      setLoading(true);
      const res = await fetch('api/get-sum-dilivery', {
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

  React.useEffect(() => {
    async function getCities() {
      try {
        const res = await fetch('api/get-cities');
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
        console.log(err);
      }
    }

    if (!cities && !allCities) {
      getCities();
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

  return (
    <div className="dilivery__calculate-city">
      <div className="calc-wrapper-city">
        <input
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

      <div className="dilivery__calculate-params">
        <div className="dilivery__calculate-weight">
          <p className="dilivery__calculate-name">Вес:</p>
          <div className="dilivery__calculate-panel">
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                calculateParams.weight > 0 &&
                setCalculateParams({
                  ...calculateParams,
                  weight: calculateParams.weight - 1,
                })
              }>
              -
            </button>
            <p className="dilivery__panel-btn-text">{calculateParams.weight}</p>
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                setCalculateParams({
                  ...calculateParams,
                  weight: calculateParams.weight + 1,
                })
              }>
              +
            </button>
          </div>
        </div>

        <div className="dilivery__calculate-weight">
          <p className="dilivery__calculate-name">Длина:</p>
          <div className="dilivery__calculate-panel">
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                calculateParams.length > 0 &&
                setCalculateParams({
                  ...calculateParams,
                  length: calculateParams.length - 1,
                })
              }>
              -
            </button>
            <p className="dilivery__panel-btn-text">{calculateParams.length}</p>
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                setCalculateParams({
                  ...calculateParams,
                  length: calculateParams.length + 1,
                })
              }>
              +
            </button>
          </div>
        </div>

        <div className="dilivery__calculate-weight">
          <p className="dilivery__calculate-name">Ширина:</p>
          <div className="dilivery__calculate-panel">
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                calculateParams.width > 0 &&
                setCalculateParams({
                  ...calculateParams,
                  width: calculateParams.width - 1,
                })
              }>
              -
            </button>
            <p className="dilivery__panel-btn-text">{calculateParams.width}</p>
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                setCalculateParams({
                  ...calculateParams,
                  width: calculateParams.width + 1,
                })
              }>
              +
            </button>
          </div>
        </div>

        <div className="dilivery__calculate-weight">
          <p className="dilivery__calculate-name">Высота:</p>
          <div className="dilivery__calculate-panel">
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                calculateParams.heightProd > 0 &&
                setCalculateParams({
                  ...calculateParams,
                  heightProd: calculateParams.heightProd - 1,
                })
              }>
              -
            </button>
            <p className="dilivery__panel-btn-text">{calculateParams.heightProd}</p>
            <button
              className="dilivery__panel-btn"
              onClick={() =>
                setCalculateParams({
                  ...calculateParams,
                  heightProd: calculateParams.heightProd + 1,
                })
              }>
              +
            </button>
          </div>
        </div>
      </div>

      <button
        className="dilivery__calculate-button promo__box-link"
        disabled={
          calculateParams.heightProd === 0 ||
          calculateParams.length === 0 ||
          calculateParams.weight === 0 ||
          calculateParams.width === 0 ||
          input.length == 0
        }
        onClick={handleClick}>
        Расчитать
      </button>

      {serverMessage?.message && (
        <p className="calc-message">
          {serverMessage.message[0]} - {serverMessage.message[2]}
        </p>
      )}

      {serverMessage?.err && <p className="calc-err">{serverMessage.err}</p>}

      {serverMessage?.errors &&
        serverMessage.errors.map((item, id) => (
          <p key={id} className="calc-err">
            {item}
          </p>
        ))}

      {loading && <LoadingCalculate width={50} />}

      {serverMessage?.message && (
        <p className="calc-message">
          {serverMessage.message[0]} - {serverMessage.message[2]}
        </p>
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
