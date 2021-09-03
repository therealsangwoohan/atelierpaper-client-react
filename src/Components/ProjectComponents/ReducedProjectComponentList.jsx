import React from 'react';

import ReducedProjectComponent from './ReducedProjectComponent';

export default function ReducedProjectComponentList({ projects }) {
  return (
    <div className="ReducedProjectComponentList">
      {projects.map((project) => (
        <ReducedProjectComponent project={project} key={project.project_id} />
      ))}
    </div>
  );
}
