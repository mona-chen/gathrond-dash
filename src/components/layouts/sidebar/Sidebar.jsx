import React, { useEffect, useState } from 'react';
import logoIcon from '../../../assets/images/logoIcon.svg';
import logo from '../../../assets/images/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { sideMenuList } from './sidebarList';
import { capitalizeFirstLetter } from '../../../utils/helper/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI } from '../../../redux/dashboard';

function Sidebar() {
  const sidebarToggle = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('sidebar-mini')) {
      sidebar.classList.remove('sidebar-mini');
    } else {
      sidebar.classList.add('sidebar-mini');
    }
  };

  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useDispatch();

  const isActive = (e) => {
    return location.pathname.includes(e);
  };

  const { dashboard_summary } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardAPI.getDashboardData());
  }, []);

  console.log(
    sideMenuList.filter((item) => {
      if (item.name?.children) {
        const hasWithdrawInChildren = item.name.children.name.toLowerCase().trim() === 'withdraw';
        console.log(
          `Item: ${item.name}, Children: ${JSON.stringify(
            item.name.children,
          )}, Has Withdraw in Children: ${hasWithdrawInChildren}`,
        );
        return hasWithdrawInChildren;
      } else {
        const isWithdrawTopLevel = item.name && item.name.toLowerCase() === 'withdraw';
        console.log(`Item: ${item.name}, Is Withdraw Top Level: ${isWithdrawTopLevel}`);
        return isWithdrawTopLevel;
      }
    }),
  );

  return (
    <aside className="sidebar sidebar-default sidebar-dark navs-gradient sidebar-mini sidebar-hover ">
      <div className="sidebar-header d-flex align-items-center justify-content-start">
        <a href="#" onClick={() => navigate('/dashboard')} className="navbar-brand dis-none">
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
            {sideMenuList.map((chi, idx) => {
              return (
                <React.Fragment key={idx}>
                  {!chi.children ? (
                    <li className="nav-item ">
                      <div
                        role="button"
                        onClick={() => navigate(chi.link)}
                        className={`nav-link  ${isActive(chi.link) ? 'active' : ''} `}
                        aria-current="page"
                      >
                        <i className="icon">
                          <svg width={22} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {chi.icon}
                          </svg>
                        </i>
                        <span className="item-name">{chi.name}</span>
                      </div>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <a
                        className={`nav-link  ${isActive(chi.link) ? 'active' : ''} `}
                        data-bs-toggle="collapse"
                        href={`#sidebar-user${idx}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls={`sidebar-user${idx}`}
                      >
                        <i className="icon">
                          <svg width={22} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {chi.icon}
                          </svg>
                        </i>
                        <span className="item-name">{chi?.name}</span>
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
                      <ul className="sub-nav collapse" id={`sidebar-user${idx}`} data-bs-parent="#sidebar">
                        {chi.children.map((x, idx) => {
                          return (
                            <li style={{ cursor: 'pointer' }} key={idx} className="nav-item pointer-event">
                              <div onClick={() => navigate(x.link)} className="nav-link">
                                <i className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                  >
                                    <g>
                                      <circle cx={12} cy={12} r={8} fill="currentColor" />
                                    </g>
                                  </svg>
                                </i>
                                <i className="sidenav-mini-icon"> {capitalizeFirstLetter(x.name.slice(0, 1))} </i>
                                <span className="item-name">{x.name}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
            <li>
              <hr className="hr-horizontal" />
            </li>
          </ul>{' '}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
