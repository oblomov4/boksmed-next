import React from 'react';

interface Props {
  width?: number;
}

export const LoadingCalculate: React.FC<Props> = (props) => {
  return (
    <div className="loading-calculate">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
        <path fill="#3E75FF" stroke="#3E75FF" strokeWidth={15} d="M25 85h30v30H25z">
          <animate
            attributeName="opacity"
            begin={-0.4}
            calcMode="spline"
            dur={2}
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            values="1;0;1;"
          />
        </path>
        <path fill="#3E75FF" stroke="#3E75FF" strokeWidth={15} d="M85 85h30v30H85z">
          <animate
            attributeName="opacity"
            begin={-0.2}
            calcMode="spline"
            dur={2}
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            values="1;0;1;"
          />
        </path>
        <path fill="#3E75FF" stroke="#3E75FF" strokeWidth={15} d="M145 85h30v30h-30z">
          <animate
            attributeName="opacity"
            begin={0}
            calcMode="spline"
            dur={2}
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            values="1;0;1;"
          />
        </path>
      </svg>
    </div>
  );
};
