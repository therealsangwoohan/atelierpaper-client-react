import React from 'react';

import useFetch from '../CustomHooks/useFetch';

import ReducedUserComponentList from '../Components/UserComponents/ReducedUserComponentList';

export default function TeamView() {
  const { error, isPending, data: users } = useFetch(`${process.env.REACT_APP_BACKEND_HOST}/api/users/`);

  return (
    <div className="HomeView">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { users && <ReducedUserComponentList users={users} /> }
    </div>
  );
}
