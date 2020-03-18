import React from 'react';

export default function SettingsTab(props) {
  const { data } = props;
  const { title } = data;

  return <div>{title}</div>;
}
