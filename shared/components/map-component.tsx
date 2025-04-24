import React from 'react';

export const MapComponent: React.FC = () => {
  return (
    <div className="dilivery__map">
      <iframe
        className="map-component"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f5e69415f623ea0632da9a7e37acd712a2e7e652f783cc7b4d274a6cf244365&amp;source=constructor"
        width="100%"
        height="345"
        frameBorder="0"></iframe>
    </div>
  );
};
