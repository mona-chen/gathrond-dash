/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import utilImg05 from '../../../assets/images/utilities/05.png';
import utilImg04 from '../../../assets/images/utilities/04.png';
import utilImg03 from '../../../assets/images/utilities/03.png';
import utilImg02 from '../../../assets/images/utilities/02.png';
import avatar01 from '../../../assets/images/avatars/01.png';
import coin06 from '../../../assets/images/coins/06.png';
import { icons } from '../../../assets/icons/icons';
import logoIcon from '../../../assets/images/logoIcon.svg';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../../utils/helper/Helper';

function Navbar() {
  const sidebarToggle = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('sidebar-mini')) {
      sidebar.classList.remove('sidebar-mini');
    } else {
      sidebar.classList.add('sidebar-mini');
    }
  };

  const navigate = useNavigate();
  return (
    <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
      <div className="container-fluid navbar-inner">
        <a href="../dashboard/index.html" className="navbar-brand"></a>
        <div onClick={sidebarToggle} className="sidebar-toggle" data-toggle="sidebar" data-active="true">
          <i className="icon">
            <svg width="20px" height="20px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </i>
        </div>
        <div className="header-logo d-xl-none">
          <a onClick={() => navigate('/dashboard')} className="navbar-brand dis-none">
            <img src={logoIcon} alt="" />
          </a>
        </div>
        <div className="input-group search-input">
          <span className="input-group-text" id="search-input">
            <svg width={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="11.7669"
                cy="11.7666"
                r="8.98856"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0186 18.4851L21.5426 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input type="search" className="form-control" placeholder="Search..." />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1 mt-2" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto navbar-list mb-2 mb-lg-0 align-items-center">
            {/* <li className="nav-item dropdown">
              <a href="#" className="nav-link" id="notification-drop" data-bs-toggle="dropdown">
                <svg width={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3889 20.8572C13.0247 22.3719 10.8967 22.3899 9.51953 20.8572"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="bg-danger dots" />
              </a>
              <div className="sub-drop dropdown-menu iq-noti dropdown-menu-end p-0" aria-labelledby="notification-drop">
                <div className="card bg-transparent shadow-none m-0">
                  <div className="card-header bg-transparent d-flex justify-content-between">
                    <div className="header-title">
                      <p className="fs-6 ">New notifications.</p>
                    </div>
                    <div className="header-title">
                      <p className="fs-6">Mark all</p>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex">
                        <img src={utilImg05} className="img-fluid avatar avatar-30 avatar-rounded" alt="img51" />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">Successfull transaction</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">15 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img src={utilImg03} className="img-fluid avatar avatar-30 avatar-rounded" alt="img52" />
                        </div>
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">4 of Pending Transactions!</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">30 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          src="../assets/images/utilities/04.png"
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="img53"
                        />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">Cancelled order</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">55 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img src={utilImg05} className="img-fluid avatar avatar-30 avatar-rounded" alt="img54" />
                        <div className="w-100 ms-3">
                          <h6 className="mb-0 ">New game arrivals</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">14 Mar</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li> */}

            {/* <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link"
                id="mail-drop"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.9028 8.85107L13.4596 12.4641C12.6201 13.1301 11.4389 13.1301 10.5994 12.4641L6.11865 8.85107"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="bg-primary count-mail" />
              </a>
              <div className="sub-drop dropdown-menu dropdown-menu-end p-0" aria-labelledby="mail-drop">
                <div className="card bg-transparent shadow-none m-0">
                  <div className="card-header bg-transparent d-flex justify-content-between py-3">
                    <div className="header-title">
                      <p className="mb-0 text-white">Our Latest News</p>
                    </div>
                  </div>
                  <div className="card-body p-0 ">
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex ">
                        <div className="">
                          <img src={utilImg02} className="img-fluid avatar avatar-50 avatar-rounded" alt="img55" />
                        </div>
                        <div className=" w-100 ms-3">
                          <h6 className="mb-0 ">Bitcoin</h6>
                          <small className="float-left font-size-12">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex">
                        <div className="">
                          <img src={utilImg03} className="img-fluid avatar avatar-50 avatar-rounded" alt="img56" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Ethereum</h6>
                          <small className="float-left font-size-12">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex">
                        <div className="">
                          <img src={coin06} className="img-fluid avatar avatar-50 avatar-rounded" alt="img57" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Litecoin</h6>
                          <small className="float-left font-size-12">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link py-0 d-flex align-items-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={avatar01} alt="User-Profile" className="img-fluid avatar avatar-50 avatar-rounded" />
                <div className="caption ms-3 ">
                  <h6 className="mb-0 caption-title">Gathrone Games</h6>
                  <p className="mb-0 caption-sub-title">Super Admin</p>
                </div>
                ``
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                {/* <li className="border-0">
                  <a className="dropdown-item" href="../dashboard/app/user-profile.html">
                    Profile
                  </a>
                </li>
                <li className="border-0">
                  <a className="dropdown-item" href="../dashboard/app/user-privacy-setting.html">
                    Privacy Setting
                  </a>
                </li> */}
                {/* <li className="border-0">
                  <hr className="m-0 dropdown-divider" />
                </li> */}
                <li className="border-0">
                  <a
                    onClick={() => {
                      localStorage.clear();
                      setCookie('token', '', 0);
                    }}
                    className="dropdown-item"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
