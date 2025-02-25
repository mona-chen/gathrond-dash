import React from 'react';

function Loader({ style, transparent }) {
  return (
    <div style={{ ...style, backgroundColor: transparent ? 'unset' : '' }} id="loading">
      <div style={{ backgroundColor: transparent ? 'unset' : '' }} className="loader simple-loader">
        <div style={{ backgroundColor: transparent ? 'unset' : '' }} className="loader-body" />
        <div style={{ backgroundColor: transparent ? 'unset' : '' }} className="loader-inner" />
      </div>{' '}
    </div>
  );
}

export default Loader;
