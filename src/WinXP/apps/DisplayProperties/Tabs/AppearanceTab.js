import React from 'react';

export default function AppearanceTab(props) {
  const { data } = props;
  const { title } = data;

  return <div>{title}</div>;
}
