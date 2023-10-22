import React from 'react';

const GOffCanvas = ({ children, title, id }) => {
  return (
    <div
      style={{ visibility: 'unset' }}
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id={id}
      aria-labelledby={`${id}Label`}
    >
      <div class="offcanvas-header">
        {title && <h5 id="offcanvasRightLabel">{title}</h5>}
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">{children}</div>
    </div>
  );
};

export default GOffCanvas;
