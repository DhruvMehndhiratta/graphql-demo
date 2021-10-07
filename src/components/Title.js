import React from 'react';
const Title = ({ title }) => {
  console.log(title, 'title')
  return (
    <div>
      {title}
    </div>
  );
}

export default React.memo(Title);