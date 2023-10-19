import React from 'react';
import logoIcon from '../../../assets/images/logoIcon.svg';
import logo from '../../../assets/images/logo.svg';

function Sidebar() {
  const sidebarToggle = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('sidebar-mini')) {
      sidebar.classList.remove('sidebar-mini');
    } else {
      sidebar.classList.add('sidebar-mini');
    }
  };
  return (
    <aside className="sidebar sidebar-default sidebar-dark navs-gradient sidebar-mini sidebar-hover ">
      <div className="sidebar-header d-flex align-items-center justify-content-start">
        <a href="../dashboard/index.html" className="navbar-brand dis-none">
          <div className="logo">
            <img width={50} src={logoIcon} alt="" />
          </div>
          <div className="logo-hover">
            <img width={150} src={logo} alt="logo" />
          </div>
        </a>
        <div onClick={sidebarToggle} className="sidebar-toggle d-xl-none" data-toggle="sidebar" data-active="true">
          <i className="icon">
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="sidebar-body p-0 data-scrollbar">
        <div className="collapse navbar-collapse" id="sidebar">
          <ul className="navbar-nav iq-main-menu">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="../dashboard/index.html">
                <i className="icon">
                  <svg width={22} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="item-name">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-user"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-user"
              >
                <i className="icon">
                  <svg width={22} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                      stroke="currentColor"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{' '}
                  </svg>
                </i>
                <span className="item-name">Users</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </i>
              </a>
              <ul className="sub-nav collapse" id="sidebar-user" data-bs-parent="#sidebar">
                <li className="nav-item">
                  <a className="nav-link " href="../dashboard/app/user-profile.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> U </i>
                    <span className="item-name">User Profile</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="../dashboard/app/user-add.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> U </i>
                    <span className="item-name">User Edit</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="../dashboard/app/user-list.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> U </i>
                    <span className="item-name">User List</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-auth"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-user"
              >
                <i className="icon">
                  <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9846 21.606C11.9846 21.606 19.6566 19.283 19.6566 12.879C19.6566 6.474 19.9346 5.974 19.3196 5.358C18.7036 4.742 12.9906 2.75 11.9846 2.75C10.9786 2.75 5.26557 4.742 4.65057 5.358C4.03457 5.974 4.31257 6.474 4.31257 12.879C4.31257 19.283 11.9846 21.606 11.9846 21.606Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.38574 11.8746L11.2777 13.7696L15.1757 9.86963"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="item-name">Authentication</span>
                <i className="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </i>
              </a>
              <ul className="sub-nav collapse" id="sidebar-auth" data-bs-parent="#sidebar">
                <li className="nav-item">
                  <a className="nav-link" href="../dashboard/auth/sign-in.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> L </i>
                    <span className="item-name">Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../dashboard/auth/sign-up.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> R </i>
                    <span className="item-name">Register</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../dashboard/auth/confirm-mail.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> C </i>
                    <span className="item-name">Confirm Mail</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../dashboard/auth/lock-screen.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> L </i>
                    <span className="item-name">Lock Screen</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../dashboard/auth/recoverpw.html">
                    <i className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} viewBox="0 0 24 24" fill="currentColor">
                        <g>
                          <circle cx={12} cy={12} r={8} fill="currentColor" />
                        </g>
                      </svg>
                    </i>
                    <i className="sidenav-mini-icon"> R </i>
                    <span className="item-name">Recover password</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../dashboard/maps/google.html">
                <i className="icon">
                  <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="item-name">Maps</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../dashboard/icons/outline.html">
                <i className="icon">
                  <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.739 6.15368C19.739 3.40281 17.8583 2.30005 15.1506 2.30005H8.79167C6.16711 2.30005 4.2002 3.32762 4.2002 5.97022V20.694C4.2002 21.4198 4.98115 21.877 5.61373 21.5221L11.9957 17.9422L18.3225 21.5161C18.9561 21.873 19.739 21.4158 19.739 20.689V6.15368Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.27148 9.02811H15.5898"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="item-name">icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../dashboard/errors/error404.html">
                <i className="icon">
                  <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.3955 9.59497L9.60352 14.387"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.3971 14.3898L9.60107 9.59277"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <span className="item-name">Error</span>
              </a>
            </li>
            <li>
              <hr className="hr-horizontal" />
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../index.html" target="_blank">
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </i>
                <span className="item-name">Components</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://templates.iqonic.design/lite/nairobi/documentation/html/dist/main/"
                rel="noreferrer"
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                </i>
                <span className="item-name">Documentation</span>
              </a>
            </li>
          </ul>{' '}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
