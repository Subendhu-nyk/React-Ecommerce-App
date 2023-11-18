import React,{Fragment} from 'react';

function CarouselImage({ src, alt }) {
  return (
    <Fragment>
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust color and opacity here
          pointerEvents: 'none', // This makes the overlay click-through
        }}
      />
    </div>
  </Fragment>
  );
}

export default CarouselImage;
