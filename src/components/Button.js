import React from 'react';

const Button = ({ handleClick, label}) => {
  console.log('button render');
  return (
    <button onClick={() => handleClick()}>
      {label}
    </button>
  );
}

export default React.memo(Button);