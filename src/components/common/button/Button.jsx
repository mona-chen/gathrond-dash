import React from 'react';

/**
 *
 * @param {string} className
 * @param {string} type
 * @param {string} loadingText
 * @param {boolean} loading
 * @param {string} label
 * @param {() => void} onClick
 * @param {boolean} disabled
 * @returns {import('react').ReactNode}
 * @requires onClick
 * @requires label
 */
const GButton = ({ className, type, loadingText, loading, label, onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${type || 'primary'} ${className}`}
      type="button"
      disabled={loading || disabled}
    >
      {loading && <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>}
      {loading ? loadingText || 'Processing' : label || children}
    </button>
  );
};

export default GButton;
