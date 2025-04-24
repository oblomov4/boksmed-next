import React from 'react';

export const FormProfile: React.FC = () => {
  return (
    <div className="profile__left">
      <form>
        <h3 className="profile__left-title">Мой профиль</h3>
        <div className="profile__left-wrapper">
          <input className="profile__left-box" defaultValue={'Суворова В.П'} />
          <input className="profile__left-box" defaultValue={'ИП Суворова'} />
          <input className="profile__left-box" defaultValue={'+7 919 91738 92'} />
          <input className="profile__left-box" defaultValue={'ИНН 4567894321'} />
          <input className="profile__left-box" defaultValue={'supervika94@icloud.com'} />
          <input className="profile__left-box" defaultValue={'supervika94@icloud.com'} />
        </div>

        <button className="profile__left-btn profile__right-btn">Сохранить!</button>
      </form>
    </div>
  );
};
