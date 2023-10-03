import React, { useState, useEffect } from 'react';
import "./ExternalLink.css"

const ExternalLink = ({ url }) => {
  const [deviceView, setDeviceView] = useState('desktop-view');

  const changeDeviceView = (view) => {
    setDeviceView(view);
    sessionStorage.setItem('deviceView', view); 
  };

  useEffect(() => {

    const storedView = sessionStorage.getItem('deviceView');
    if (storedView) {
      setDeviceView(storedView);
    }
  }, []);

  return (
    <div className='external-page'>
      <div className={`frame-container ${deviceView}`}>
        <div className="device-bar"></div>
      <iframe
        src={url}
        title="External Page"
        width="100%"
        className={deviceView} 
        frameBorder="0"
        allowFullScreen
      />
      </div>
       <div className="device-tabs">
        <div
          className={`device-icons ${deviceView === 'mobile-view' ? 'active' : ''}`}
          id='mobile-view'
          onClick={() => changeDeviceView('mobile-view')}
        >
          <i className="fa fa-mobile"></i>
        </div>
        <div
          className={`device-icons ${deviceView === 'tablet-view' ? 'active' : ''}`}
          id='tablet-view'
          onClick={() => changeDeviceView('tablet-view')}
        >
          <i className="fa fa-tablet"></i>
        </div>
        <div
          className={`device-icons ${deviceView === 'desktop-view' ? 'active' : ''}`}
          id='desktop-view'
          onClick={() => changeDeviceView('desktop-view')}
        >
          <i className="fa fa-desktop"></i>
        </div>
      </div>
    </div>
  );
};

export default ExternalLink;
