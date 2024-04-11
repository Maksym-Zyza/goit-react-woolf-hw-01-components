import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../Data/user.json';
import data from '../Data/data.json';

export const App = () => {
  const NewComponent = React.createElement(
    'div',
    {
      id: '123',
      className: 'sdfsdf',
      dasdsa: 'Lorefasfsjdflsjfljs',
    },
    'DDDDD'
  );
  console.log(NewComponent);

  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* <NewComponent /> */}
    </div>
  );
};
