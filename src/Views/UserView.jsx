import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../CustomHooks/useFetch';

import FullUserComponent from '../Components/UserComponents/FullUserComponent';

export default function UserView() {
  const { user_id } = useParams();

  const { error, isPending, data: user } = useFetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/users/${user_id}`);

  return (
    <div className="ProjectView">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { user && <FullUserComponent user={user} /> }
    </div>
  );
}
