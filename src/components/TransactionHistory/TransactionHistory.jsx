import React from 'react';
import style from './Transaction.module.scss';

const titles = ['Type', 'Amount', 'Currency'];

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          {titles.map(title => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
