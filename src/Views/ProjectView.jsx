import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../CustomHooks/useFetch';

import FullProjectComponent from '../Components/ProjectComponents/FullProjectComponent';

export default function ProjectView() {
  const { project_id } = useParams();

  const { error, isPending, data: project } = useFetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/projects/${project_id}`);

  return (
    <div className="ProjectView">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { project && <FullProjectComponent project={project} /> }
    </div>
  );
}
