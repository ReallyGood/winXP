import React from 'react';

export default function TabList(props) {
  const { className = '', children, ...restProps } = props;

  return (
    <div className={`tab-list ${className}`} {...restProps}>
      {children}
    </div>
  );
}
