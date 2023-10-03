import React from 'react';

const ExternalLink = ({ url }) => {
  return (
    <div className='external-page'>
      <iframe
        src={url}
        title="External Page"
        width="100%"
        height="1000px" // Adjust the height as needed
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default ExternalLink;
