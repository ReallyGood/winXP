import React from 'react';
import Button from 'components/Button';

export default function DesktopTab(props) {
  const { title, data, dataChanged } = props;

  const handleOnChanged = () => {
    dataChanged({ type: '3', ...data });
  };

  return (
    <div>
      <Button
        actionProps={data}
        onClick={handleOnChanged}
      >{`change ${title} data`}</Button>
    </div>
  );
}
