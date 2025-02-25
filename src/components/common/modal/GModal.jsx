import { Modal } from 'bootstrap';
import React, { useEffect, useRef } from 'react';
import GButton from '../button/Button';

function GModal({
  id,
  title,
  children,
  type,
  dismissible,
  loadingText,
  onBtnClick,
  shutdown,
  danger,
  loading,
  btnLabel,
}) {
  const baseClassNames = 'modal fade';

  // Define a function to generate additional className names based on the type
  const getClassNamesByType = () => {
    switch (type) {
      case 'centered':
        return 'modal-dialog modal-dialog-centered';
      case 'scrollable':
        return 'modal-dialog modal-dialog-scrollable';
      case 'fullscreen':
        return 'modal-dialog modal-fullscreen';
      default:
        return 'modal-dialog'; // Default className
    }
  };

  const modalRef = useRef(null);

  useEffect(() => {
    if (shutdown) {
      if (modalRef.current) {
        var myModal = document.getElementById(id);
        var modalBackdrop = document.querySelector('.modal-backdrop');
        var body = document.body;

        myModal.classList.remove('in');

        if (modalBackdrop) {
          modalBackdrop.parentNode.removeChild(modalBackdrop);
        }

        body.classList.remove('modal-open');
        body.style.paddingRight = '';
        myModal.style.display = 'none';
      }
    }
  }, [id, shutdown]);

  return (
    <>
      <div
        ref={modalRef}
        data-bs-backdrop={`${dismissible ?? 'static'}`}
        aria-labelledby={`${id}Label`}
        tabindex="-1"
        aria-hidden="true"
        id={id}
        className={baseClassNames}
      >
        <div className={`${getClassNamesByType()}`}>
          <div className="modal-content">
            {title && (
              <h5 className="modal-title mx-3" id={`${id}Title`}>
                {title}
              </h5>
            )}
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button type="button" className="btn border btn-secondary bg" data-bs-dismiss="modal">
                Close
              </button>
              <GButton
                onClick={onBtnClick}
                type="button"
                loadingText={loadingText}
                loading={loading}
                className={`btn btn-primary ${danger ? 'bg-danger border-danger' : ''}`}
              >
                {btnLabel ?? 'Continue'}
              </GButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GModal;
