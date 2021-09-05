import React from 'react';

import useFetch from '../CustomHooks/useFetch';

import ReducedProjectComponentList from '../Components/ProjectComponents/ReducedProjectComponentList';

export default function HomeView() {
  const { error, isPending, data: projects } = useFetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/projects/`);

  return (
    <div className="HomeView">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { projects && <ReducedProjectComponentList projects={projects} /> }
    </div>
  );
}
