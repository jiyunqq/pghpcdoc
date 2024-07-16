import React from 'react';

export default function Highlight2({
  children,
  color,
  size,
  bold,
}) {
  return (
    <span
      style={{
        borderRadius: '2px',
        color: color,
        padding: '0.2rem',
        fontSize: size ? size : '16px',
        fontWeight: bold ? 'bold' : 'normal', // 添加粗体样式
      }}>
      {children}
    </span>
  );
}