import React from 'react';

export default function Highlight({
  children,
  color,
  size,
}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
        fontSize: size ? size : '16px',
      }}>
      {children}
    </span>
  );
}