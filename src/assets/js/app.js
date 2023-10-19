import { bootstrap } from 'bootstrap';
import { Waypoint } from 'waypoints';
import noUiSlider from 'no-ui-slider';

/*
Template: nairobi - Responsive Bootstrap 5 Admin Dashboard Template
Author: iqonic.design
Design and Developed by: iqonic.design
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

------- Plugin Init --------

:: Tooltip
:: Popover
:: NoUiSlider
:: CopyToClipboard
:: Vanila Datepicker
:: SliderTab
:: Data Tables
:: Active Class for Pricing Table

------ Functions --------

:: Loader Init
:: Resize Plugins
:: Sidebar Toggle
:: Back To Top

------- Listners ---------

:: DOMContentLoaded
:: Window Resize
------------------------------------------------
Index Of Script
----------------------------------------------*/
/*---------------------------------------------------------------------
              Popover
-----------------------------------------------------------------------*/

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

/*---------------------------------------------------------------------
                Tooltip
-----------------------------------------------------------------------*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-sidebar-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/*---------------------------------------------------------------------
Progress Bar
-----------------------------------------------------------------------*/
const progressBarInit = (elem) => {
  const currentValue = elem.getAttribute('aria-valuenow');
  elem.style.width = '0%';
  elem.style.transition = 'width 2s';
  new Waypoint({
    element: elem,
    handler: function () {
      setTimeout(() => {
        elem.style.width = currentValue + '%';
      }, 100);
    },
    offset: 'bottom-in-view',
  });
};

const customProgressBar = document.querySelectorAll('[data-toggle="progress-bar"]');
Array.from(customProgressBar, (elem) => {
  progressBarInit(elem);
});

/*---------------------------------------------------------------------
                 noUiSlider
-----------------------------------------------------------------------*/

const rangeSlider = document.querySelectorAll('.range-slider');

Array.from(rangeSlider, (elem) => {
  noUiSlider.create(elem, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
});

const slider = document.querySelectorAll('.slider');

Array.from(slider, (elem) => {
  noUiSlider.create(elem, {
    start: 50,
    connect: [true, false],
    range: {
      min: 0,
      max: 100,
    },
  });
});

/*---------------------------------------------------------------------
              Copy To Clipboard
-----------------------------------------------------------------------*/
const copy = document.querySelectorAll('[data-toggle="copy"]');
Array.from(copy, (elem) => {
  elem.addEventListener('click', (e) => {
    const target = elem.getAttribute('data-copy-target');
    let value = elem.getAttribute('data-copy-value');
    const container = document.querySelector(target);
    if (container !== undefined && container !== null) {
      if (container.value !== undefined && container.value !== null) {
        value = container.value;
      } else {
        value = container.innerHTML;
      }
    }
    if (value !== null) {
      const elem = document.createElement('input');
      document.querySelector('body').appendChild(elem);
      elem.value = value;
      elem.select();
      document.execCommand('copy');
      elem.remove();
    }
  });
});

/*---------------------------------------------------------------------
              Vanila Datepicker
-----------------------------------------------------------------------*/
// const datepickers = document.querySelectorAll('.vanila-datepicker')
// Array.from(datepickers, (elem) => {
//   new Datepicker(elem)
// })
// const daterangePickers = document.querySelectorAll('.vanila-daterangepicker')
// Array.from(daterangePickers, (elem) => {
//   new DateRangePicker(elem)
// })

/*---------------------------------------------------------------------
              CounterUp 2
-----------------------------------------------------------------------*/
if (window.counterUp !== undefined) {
  const counterUp = window.counterUp['default'];
  const counterUp2 = document.querySelectorAll('.counter');
  Array.from(counterUp2, (el) => {
    const waypoint = new Waypoint({
      element: el,
      handler: function () {
        counterUp(el, {
          duration: 1000,
          delay: 10,
        });
        this.destroy();
      },
      offset: 'bottom-in-view',
    });
  });
}

// Smooth Scollbar
let Scrollbar;

const dataScrollbarElements = document.querySelectorAll('.data-scrollbar');

if (dataScrollbarElements.length > 0) {
  // Assuming that the "Scrollbar" is a global object
  if (window.Scrollbar) {
    Scrollbar = window.Scrollbar;

    dataScrollbarElements.forEach(function (dataScrollbar) {
      Scrollbar.init(dataScrollbar, {
        continuousScrolling: false,
      });
    });
  }
}

/*---------------------------------------------------------------------
  Active Class for Pricing Table
-----------------------------------------------------------------------*/
// Select the table header cells and add a click event listener to each of them
const tableHeaderCells = document.querySelectorAll('#my-table tr th');
tableHeaderCells.forEach(function (cell) {
  cell.addEventListener('click', function () {
    // Remove the "active" class from all children of table header cells
    const headerCellChildren = this.querySelectorAll('*');
    headerCellChildren.forEach(function (child) {
      child.classList.remove('active');
    });

    // Add the "active" class to the clicked table header cell's children
    const thisHeaderCellChildren = this.querySelectorAll('*');
    thisHeaderCellChildren.forEach(function (child) {
      child.classList.add('active');
    });

    // Remove the "active" class from all table data cells
    const tableDataCells = document.querySelectorAll('#my-table td');
    tableDataCells.forEach(function (dataCell) {
      if (dataCell.classList.contains('active')) {
        dataCell.classList.remove('active');
      }
    });

    // Get the index of the clicked table header cell
    const col = Array.from(this.parentNode.children).indexOf(this);

    // Add the "active" class to the corresponding table data cells in the same column
    const tableDataCellsInColumn = document.querySelectorAll(`#my-table tr td:nth-child(${col + 1})`);
    tableDataCellsInColumn.forEach(function (dataCell) {
      dataCell.classList.add('active');
    });
  });
});

/*---------------------------------------------------------------------
              Resize Plugins
-----------------------------------------------------------------------*/

const resizePlugins = () => {
  // sidebar-mini
  const tabs = document.querySelectorAll('.nav');
  const sidebarResponsive = document.querySelector('.sidebar-default');
  if (window.innerWidth < 991) {
    Array.from(tabs, (elem) => {
      if (
        !elem.classList.contains('flex-column') &&
        elem.classList.contains('nav-tabs') &&
        elem.classList.contains('nav-pills')
      ) {
        elem.classList.add('flex-column', 'on-resize');
      }
    });
    if (sidebarResponsive !== null) {
      if (!sidebarResponsive.classList.contains('sidebar-mini')) {
        sidebarResponsive.classList.add('sidebar-mini', 'on-resize');
      }
    }
  } else {
    Array.from(tabs, (elem) => {
      if (elem.classList.contains('on-resize')) {
        elem.classList.remove('flex-column', 'on-resize');
      }
    });
    if (sidebarResponsive !== null) {
      if (sidebarResponsive.classList.contains('sidebar-mini') && sidebarResponsive.classList.contains('on-resize')) {
        sidebarResponsive.classList.remove('sidebar-mini', 'on-resize');
      }
    }
  }
};

/*---------------------------------------------------------------------
              LoaderInit
-----------------------------------------------------------------------*/

const loaderInit = () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
      loader.classList.add('d-none');
    }, 500);
  }, 500);
};

/*---------------------------------------------------------------------
              Sidebar Toggle
-----------------------------------------------------------------------*/
const sidebarToggle = (elem) => {
  elem.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('sidebar-mini')) {
      sidebar.classList.remove('sidebar-mini');
    } else {
      sidebar.classList.add('sidebar-mini');
    }
  });
};

const sidebarToggleBtn = document.querySelectorAll('[data-toggle="sidebar"]');
const sidebar = document.querySelector('.sidebar-default');
if (sidebar !== null) {
  const sidebarActiveItem = sidebar.querySelectorAll('.active');
  Array.from(sidebarActiveItem, (elem) => {
    if (!elem.closest('ul').classList.contains('iq-main-menu')) {
      const childMenu = elem.closest('ul');
      childMenu.classList.add('show');
      const parentMenu = childMenu.closest('li').querySelector('.nav-link');
      parentMenu.classList.add('collapsed');
      parentMenu.setAttribute('aria-expanded', true);
    }
  });
}
Array.from(sidebarToggleBtn, (sidebarBtn) => {
  sidebarToggle(sidebarBtn);
});

/*------------------------
Back To Top
--------------------------*/
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 250) {
    fadeIn(backToTopButton, 1400);
  } else {
    fadeOut(backToTopButton, 400);
  }
});

backToTopButton.addEventListener('click', function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  return false;
});

function fadeIn(element, duration) {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = 1;
}

function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = 0;
}

/*---------------------------------------------------------------------
              DOMContentLoaded
-----------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', (event) => {
  resizePlugins();
  loaderInit();
});

/*---------------------------------------------------------------------
              Window Resize
-----------------------------------------------------------------------*/

window.addEventListener('resize', function (event) {
  resizePlugins();
});

/*-------------------------------
| | | | | DropDown
--------------------------------*/

function darken_screen(yesno) {
  if (yesno == true) {
    document.querySelector('.screen-darken').classList.add('active');
  } else if (yesno == false) {
    document.querySelector('.screen-darken').classList.remove('active');
  }
}

function close_offcanvas() {
  darken_screen(false);
  document.querySelector('.mobile-offcanvas.show').classList.remove('show');
  document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
  darken_screen(true);
  document.getElementById(offcanvas_id).classList.add('show');
  document.body.classList.add('offcanvas-active');
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
    let offcanvas_id = everyelement.getAttribute('data-trigger');
    everyelement.addEventListener('click', function (e) {
      e.preventDefault();
      show_offcanvas(offcanvas_id);
    });
  });
  if (document.querySelectorAll('.btn-close')) {
    document.querySelectorAll('.btn-close').forEach(function (everybutton) {
      everybutton.addEventListener('click', function (e) {
        close_offcanvas();
      });
    });
  }
  if (document.querySelector('.screen-darken')) {
    document.querySelector('.screen-darken').addEventListener('click', function (event) {
      close_offcanvas();
    });
  }
});
if (document.querySelector('#navbarSideCollapse')) {
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
  });
}

/*---------------------------------------------------------------------
    Fieldset
-----------------------------------------------------------------------*/

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Your code here

  // Variables
  let e,
    t,
    a,
    n,
    o = 1;
  const r = document.querySelectorAll('fieldset').length;

  // Function to update progress bar
  function updateProgressBar(value) {
    const progressBar = document.querySelector('.progress-bar');
    const width = (value / r) * 100;
    progressBar.style.width = width.toFixed() + '%';
  }

  // Function to handle "Next" button click
  function handleNextClick() {
    e = this.parentElement;
    t = e.nextElementElementSibling;
    const topTabListItems = document.querySelectorAll('#top-tab-list li');
    const indexT = Array.from(r.children).indexOf(t);
    topTabListItems[indexT].classList.add('active');

    const indexE = Array.from(r.children).indexOf(e);
    topTabListItems[indexE].classList.add('done');

    t.style.display = 'block';
    e.style.opacity = 0;

    let a = 1;
    const animationInterval = setInterval(function () {
      n = 1 - a;
      e.style.display = 'none';
      e.style.position = 'relative';
      t.style.opacity = n;
      a += 0.01;
      if (a >= 1) {
        clearInterval(animationInterval);
      }
    }, 5);

    o++;
    updateProgressBar(o);
  }

  // Function to handle "Previous" button click
  function handlePreviousClick() {
    e = this.parentElement;
    a = e.previousElementSibling;
    const topTabListItems = document.querySelectorAll('#top-tab-list li');
    const indexE = Array.from(r.children).indexOf(e);
    topTabListItems[indexE].classList.remove('active');

    const indexA = Array.from(r.children).indexOf(a);
    topTabListItems[indexA].classList.remove('done');

    a.style.display = 'block';
    e.style.opacity = 0;

    let t = 1;
    const animationInterval = setInterval(function () {
      n = 1 - t;
      e.style.display = 'none';
      e.style.position = 'relative';
      a.style.opacity = n;
      t += 0.01;
      if (t >= 1) {
        clearInterval(animationInterval);
      }
    }, 5);

    o--;
    updateProgressBar(o);
  }

  // Function to handle form submission
  function handleSubmitClick() {
    return false;
  }

  // Next button click event
  const nextButtons = document.querySelectorAll('.next');
  nextButtons.forEach(function (button) {
    button.addEventListener('click', handleNextClick);
  });

  // Previous button click event
  const previousButtons = document.querySelectorAll('.previous');
  previousButtons.forEach(function (button) {
    button.addEventListener('click', handlePreviousClick);
  });

  // Submit button click event
  const submitButtons = document.querySelectorAll('.submit');
  submitButtons.forEach(function (button) {
    button.addEventListener('click', handleSubmitClick);
  });

  // Your code here
});

/*---------------------------------------------------------------------
Form Validation
-----------------------------------------------------------------------*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
window.addEventListener(
  'load',
  function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener(
        'submit',
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false,
      );
    });
  },
  false,
);
