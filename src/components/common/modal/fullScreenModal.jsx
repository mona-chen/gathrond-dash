import React, { useEffect, useRef } from 'react';

const FullScreenModal = ({ id, children, visible, label, onClose }) => {
  const buttonRef = useRef(null);

  const triggerModal = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    if (visible === true) {
      triggerModal();
    }
  }, [visible]);

  return (
    <>
      <div class="modal fade" id={id} tabindex="-1" aria-labelledby={label} aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-body">{children}</div>
            <div class="modal-footer">
              <button onClick={onClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        ref={buttonRef}
        type="button"
        class="btn btn-primary position-absolute visually-hidden"
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      ></button>
    </>
  );
};

export default FullScreenModal;
