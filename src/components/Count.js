import React from 'react';

const Count = ({ name, value }) => {

  console.log(name, value, 'count')
  return (
    <div>
      {`${name} - ${value}`}
    </div>
  );
}

export default React.memo(Count);