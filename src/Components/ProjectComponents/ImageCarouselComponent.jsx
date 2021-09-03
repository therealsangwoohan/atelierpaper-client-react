import React from 'react';

import { Carousel } from 'react-bootstrap';

export default function ImageCarouselComponent({ imageURLs }) {
  return (
    <Carousel fade>
      {imageURLs.map((imageURL) => (
        <Carousel.Item key={imageURL}>
          <img
            className="d-block w-100"
            src={imageURL}
            alt=""
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
