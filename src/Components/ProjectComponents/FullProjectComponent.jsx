import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

import useFetch from '../../CustomHooks/useFetch';

import ImageCarouselComponent from './ImageCarouselComponent';

export default function FullProjectComponent({ project }) {
  const {
    project_id, user_id, title, body,
  } = project;

  const { error, isPending: imagesArePending, data: imageURLs } = useFetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/images/${project_id}/`);
  const { error: error2, isPending, data: user } = useFetch(`${process.env.REACT_APP_PROTOCOL_DOMAIN}/api/users/${user_id}`);

  return (
    <Card className="ReducedProjectComponent">
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">
          { error2 && { error2 } }
          { isPending && 'Loading...' }
          {'By '}
          { user && <Link to={`/users/${user_id}`}>{user.last_name} {user.first_name}</Link>}
        </Card.Subtitle>
        { error && <div>{ error }</div> }
        { imagesArePending && <div>Loading...</div> }
        { imageURLs && <ImageCarouselComponent imageURLs={imageURLs} /> }
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
