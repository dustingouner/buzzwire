import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: 'red', textAlign: 'center', fontSize: '18px', padding: '20px' }}>
      {message}
    </div>
  );
};

export default ErrorMessage