import React, { useEffect } from 'react';
import { Popover, Tooltip } from 'bootstrap'; // Import Bootstrap JavaScript (if not already done in your project)
import Toast, { toast } from '../../components/common/toast/toast';

function InitApp() {
  useEffect(() => {
    // Initialize Bootstrap Popovers and Tooltips
    const initPopoversAndTooltips = () => {
      const popoverTriggerList = [...document.querySelectorAll('[data-bs-toggle="popover"]')];
      popoverTriggerList.forEach((popoverTriggerEl) => {
        new Popover(popoverTriggerEl);
      });

      const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new Tooltip(tooltipTriggerEl);
      });

      const sidebarTooltipTriggerList = [...document.querySelectorAll('[data-sidebar-toggle="tooltip"]')];
      sidebarTooltipTriggerList.forEach((tooltipTriggerEl) => {
        new Tooltip(tooltipTriggerEl);
      });

      //   toast.info('This is an info message.', { delay: 5000, dismissible: true });
      //   toast.success('This is a success message.', { delay: 5000, dismissible: false });
      //   toast.warning('This is a warning message.', { delay: 5000, dismissible: true, showIcon: false });
      //   toast.danger('This is a danger message.', { delay: 5000, dismissible: false });
      // const toast = [...document.querySelectorAll('[data-bs-toggle="toast"]')];
      // toast.forEach((toastTrig) => {
      //   new Toast(toastTrig);
      // });
    };

    // Initialize Popovers and Tooltips
    initPopoversAndTooltips();

    // Other initialization code...

    return () => {
      // Cleanup code if needed
    };
  }, []);

  // Other React component code...

  return <div>{/* JSX for your React component */}</div>;
}

export default InitApp;
