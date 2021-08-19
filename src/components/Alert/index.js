import React from 'react';
import './index.css';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className='alert__content'>
        <i className='fas fa-info-circle'></i>
        {message}
      </div>
    </div>
  );
};

export default Alert;
