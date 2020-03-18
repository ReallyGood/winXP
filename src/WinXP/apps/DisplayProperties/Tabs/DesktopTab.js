import React, { useState } from 'react';
import Button from 'components/Button';

export default function DesktopTab(props) {
  const { title, data, dataChanged } = props;
  const { counter } = data;
  const [count, setCount] = useState(counter);
  const handleOnChanged = () => {
    const newCount = count + 1;
    const newData = { ...data, ...{ counter: newCount } };
    dataChanged(newData);
    setCount(newCount);
  };

  return (
    <div>
      <Button
        action={data}
        onClick={handleOnChanged}
      >{`change ${title} data`}</Button>
      {count}
    </div>
  );
}
