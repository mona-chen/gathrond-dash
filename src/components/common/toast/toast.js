import React from 'react';

const toasIcons = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
</symbol>
<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
</symbol>
<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
</symbol>
</svg>`;

export const toast = {
  zIndex: 9999, // Set your desired z-index value

  show: (message, options) => {
    const container = document.getElementById('toast-container');

    // Create a new toast element
    const toastElement = document.createElement('div');
    toastElement.className = 'alert alert-primary d-flex align-items-center';

    // Set the toast type (e.g., 'success', 'info', 'warning', 'danger')
    toastElement.classList.add(`alert-${options.type || 'primary'}`);
    // toastElement.classList.add('rounded-0', 'alert', 'alert-solid', 'alert-primary', ' rounded-0', );

    // Set the z-index
    toastElement.style.zIndex = toast.zIndex;

    // Add an optional custom class to the toast
    if (options.customClass) {
      toastElement.classList.add(options.customClass);
    }

    // Create the toast content with an optional icon
    const icon =
      options.showIcon !== false
        ? `<svg class="bi flex-shrink-0 me-2" width="24" height="24"><use xlink:href="#${
            options.icon || 'info-fill'
          }" /></svg>`
        : '';
    toastElement.innerHTML = `
      ${icon}
      ${toasIcons}
      ${message}
    `;

    // Check if the toast should be dismissible
    if (options.dismissible) {
      toastElement.classList.add('alert-dismissible');
      toastElement.innerHTML += `
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>      `;
    }

    // Add the toast to the container
    container.appendChild(toastElement);

    // Auto-remove the toast after a delay (default: 5000ms)
    setTimeout(() => {
      toastElement.remove();
    }, options.delay || 5000);
  },

  info: (message, options) => {
    toast.show(message, { ...options, type: 'info', icon: 'info-fill' });
  },

  success: (message, options) => {
    toast.show(message, { ...options, type: 'success', icon: 'check-circle-fill' });
  },

  warning: (message, options) => {
    toast.show(message, { ...options, type: 'warning', icon: 'exclamation-triangle-fill' });
  },

  error: (message, options) => {
    toast.show(message, { ...options, type: 'danger', icon: 'exclamation-triangle-fill' });
  },
};

const Toasty = () => {
  return (
    <>
      <div style={{ zIndex: 1000 }} id="toast-container" class="position-fixed top-0 end-0 p-3"></div>
    </>
  );
};

export default Toasty;
