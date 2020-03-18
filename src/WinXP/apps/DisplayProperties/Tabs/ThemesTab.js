import React from 'react';

export default function ThemesTab(props) {
  const { data } = props;
  const { title } = data;

  return <div>{title}</div>;
}
