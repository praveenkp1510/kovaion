import React from 'react';
import './Card.scss';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

const Card = ({ title, value, change, status, chartColor }) => {
  const isPositive = status === 'positive';
  const ArrowIcon = isPositive ? BiSolidUpArrow : BiSolidDownArrow;

  return (
    <div className="card">
      <div className="card-content">
        <div className="title">{title}</div>
        <div className="value">{value}</div>
        <div className={`change-indicator ${status}`}>
          <ArrowIcon className="arrow-icon" />
          {change}
        </div>
      </div>
    
      <div className={`donut-chart-placeholder ${chartColor}`}>
     
      </div>
    </div>
  );
};

export default Card;