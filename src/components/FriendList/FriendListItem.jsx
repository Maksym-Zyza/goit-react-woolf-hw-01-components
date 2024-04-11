import React from 'react';
import style from './Friends.module.scss';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={style.item}>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
      <span className={isOnline ? style.online : style.offline}>
        {isOnline}
      </span>
    </li>
  );
};

export default FriendListItem;
