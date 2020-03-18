import React from 'react';

export default function ScreenSaverTab(props) {
  const { data } = props;
  const { title } = data;

  return <div>{title}</div>;
}
