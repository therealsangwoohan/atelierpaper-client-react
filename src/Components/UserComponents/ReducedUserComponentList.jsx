import React from 'react';

import ReducedUserComponent from './ReducedUserComponent';

export default function ReducedUserComponentList({ users }) {
  return (
    <div className="ReducedUserComponentList">
      {users.map((user) => (
        <ReducedUserComponent user={user} key={user.user_id} />
      ))}
    </div>
  );
}
