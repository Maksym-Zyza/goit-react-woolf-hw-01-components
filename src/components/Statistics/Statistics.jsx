import React from 'react';
import style from './Statistics.module.scss';

const Statistics = ({ title = '', stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h3>Upload stats</h3>}

      <ul className={style.statList}>
        {stats.map(el => (
          <li className={style.item} key={el.id}>
            <span className={style.label}>{el.label}</span>
            <span className={style.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
