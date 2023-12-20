import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDashboardData, getGamesStock, dashboardAPI } from '../../../redux/dashboard';
import { useSelector } from 'react-redux';
import { formatNumWithComma } from '../../../utils/helper/Helper';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dashboard_summary, inStock, recommended_games, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardAPI.getDashboardData());
    dispatch(dashboardAPI.getGamesStock());
    dispatch(dashboardAPI.getRecommendedGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(inStock, 'shayo');

  return (
    <DashboardLayout loading={loading}>
      <div className="row">
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="text-primary fw-bold mb-3">Good Morning Admin</h2>
            <p>Here is a snapshot of platform's performance 😎</p>
          </div>
          <div>
            {/* <a href="#" className="btn btn-sm btn-primary">
              More Games
            </a> */}
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="card banner d-block">
            <div className="banner-actions d-none">
              <button
                type="button"
                className="banner-slider-next btn btn-white text-primary rounded-pill btn-icon me-3 "
              >
                <span className="btn-inner">
                  <svg
                    width={32}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </button>
              <button type="button" className="banner-slider-prev btn btn-white text-primary rounded-pill btn-icon">
                <span className="btn-inner">
                  <svg
                    width={32}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="card-body gap-4 banner-body">
              <span className="banner-text">GATHRONE</span>

              <div class="col  glass-morph border-1">
                <div class="card bg-transparent ">
                  <div class="card-header bg-transparent">Users</div>
                  <div class="card-body bg-transparent">
                    <h1 class="card-title display-6 ">{dashboard_summary?.user_counts}</h1>
                    {/* <p className='opacity-0'>d</p> */}
                  </div>
                  {/* <div class="card-footer text-muted bg-transparent">
                       View All
                    </div> */}
                </div>
              </div>

              <div class="col glass-morph border-1 ">
                <div class="card bg-transparent ">
                  <div class="card-header bg-transparent">Subscriptions</div>
                  <div class="card-body bg-transparent">
                    <h1 class="card-title display-6 ">{dashboard_summary?.subscription_count}</h1>
                    {/* <p className='opacity-0'>d</p> */}
                  </div>
                  {/* <div class="card-footer text-muted bg-transparent">
                       View All
                    </div> */}
                </div>
              </div>

              <div class="col glass-morph border-1">
                <div class="card bg-transparent ">
                  <div class="card-header bg-transparent">Pending Purchases</div>
                  <div class="card-body bg-transparent">
                    <h1 class="card-title display-6 ">{dashboard_summary?.total_pending_purchase}</h1>

                    {/* <p className='text-muted'>Resolved Purchases: {dashboard_summary?.resolved_purchase}</p> */}
                  </div>
                  {/* <div class="card-footer text-muted bg-transparent">
                       View All
                    </div> */}
                </div>
              </div>
              <div class="col glass-morph border-1 ">
                <div class="card bg-transparent ">
                  <div class="card-header bg-transparent">Game Switches</div>
                  <div class="card-body bg-transparent">
                    <h1 class="card-title display-6 ">{dashboard_summary?.total_game_switch}</h1>
                    {/* <p className='opacity-0'>d</p> */}
                  </div>
                  {/* <div class="card-footer text-muted bg-transparent">
                       View All
                    </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card banner-sm d-none">
            <div className="card-body banner-body">
              <div className="banner-item">
                <div className="banner-text-1">
                  <p className="text-center m-0">Video Game</p>
                  <div className="countdown banner-countdown text-center">
                    <p className="mb-0">
                      Game Stars in<span data-days="">15</span>:
                      <span data-hours="">11</span>:
                      <span data-minutes="">33</span>:
                      <span data-seconds="">34</span>
                    </p>
                  </div>
                  <h1 className="fw-bold mb-4 text-center">
                    Let <span className="ms-2">The</span>
                    <span className="text-primary ms-2">Matriachy</span>
                    <br /> <span className="mt-2">Begin</span>
                  </h1>
                </div>
                <div className="iq-video-thumb iq-video-thumb-resposive align-self-end">
                  <img
                    src="../assets/images/pages/02.png"
                    className="img-fluid m-0 iq-img iq-img-shadow-blue"
                    alt="img8"
                  />
                  <button
                    type="button"
                    className="iq-btn-thumb btn btn-white text-primary rounded-pill btn-icon"
                  >
                    <span className="btn-inner">
                      <svg
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8817 9.20912C14.5492 8.3891 12.8335 9.3478 12.8335 10.9124V33.0875C12.8335 34.6522 14.5492 35.6109 15.8817 34.7908L33.8989 23.7033C35.168 22.9223 35.168 21.0776 33.8989 20.2967L15.8817 9.20912Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <button type="button" className="btn btn-primary">
                    Know More
                  </button>
                  <button type="button" className="btn btn-white ms-3">
                    Play
                  </button>
                </div>
              </div>
              <div className="banner-img">
                <img
                  src="../assets/images/pages/01.png"
                  className="img-fluid"
                  alt="img8"
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <div className="caption">
                  <h4 className="font-weight-bold mb-2">Games for Sale</h4>
                  {/* <p className="mb-2">Accept the Challenge</p> */}
                </div>
                <div className="text-center">
                  {/* <button type="button" className="btn btn-primary">
                    Time left
                  </button>
                  <button type="button" className="btn btn-soft-secondary">
                    Rewards
                  </button> */}
                </div>
              </div>
              <div className="card card-block card-stretch custom-scroll">
                <div className="table-responsive rounded">
                  <table className="table table-striped mb-0">
                    <tbody>
                      {inStock &&
                        inStock?.map((chi, idx) => {
                          return (
                            <tr key={idx} className="white-space-no-wrap">
                              <td>
                                <img
                                  src={chi?.image_url}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="img23"
                                />
                                {chi?.name}
                              </td>
                              <td>
                                <small className="">Genre</small>

                                <br />
                                {chi?.genre_name}
                              </td>
                              <td>
                                <small className="">Amount</small>

                                <br />
                                {chi?.amount}
                              </td>
                              <td>
                                <small className="">Category</small>

                                <br />
                                {chi?.category_name}
                              </td>
                              <td>
                                <small className="">Stocks Left</small>
                                <br />
                                <span className="text-primary">₦{formatNumWithComma(chi?.count, 'ngn')}</span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-4 border-bottom">
                <div className="header-title">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title">
                      Recommended Games
                      <span className="dropdown">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </span>
                    </h4>
                    <button type="button" className="btn btn-sm btn-primary btn-icon">
                      <span className="btn-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={27}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body p-0 team-card">
                <ul className="list-inline m-0 p-0">
                  {recommended_games.slice(0, 5)?.map((chi, idx) => {
                    return (
                      <li key={idx} className="team-chat">
                        <div className="flex-shrink-0 align-self-start team-chat-body">
                          <img src={chi?.image_url} className="img-fluid avatar avatar-40 avatar-rounded" alt="img6" />
                        </div>
                        <div className="flex-grow-1 ms-3 team-chat-body">
                          <div className="d-flex align-items-center mb-2">
                            <button className="btn btn-icon btn-secondary me-3 btn-sm align-self-start">
                              <span className="btn-inner">
                                <svg width={25} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.0381 0.790607C11.1859 0.739872 11.3459 0.736597 11.4957 0.781241C11.6455 0.825884 11.7776 0.916215 11.8736 1.03961L17.1236 7.78961C17.226 7.92126 17.2816 8.08331 17.2816 8.25011C17.2816 8.41691 17.226 8.57895 17.1236 8.71061L11.8736 15.4606C11.7776 15.5839 11.6455 15.6741 11.4958 15.7186C11.346 15.7632 11.1861 15.7599 11.0383 15.7092C10.8906 15.6585 10.7623 15.5629 10.6715 15.4358C10.5807 15.3086 10.5319 15.1563 10.5318 15.0001V12.0076C6.49756 12.0916 4.55956 12.8574 3.58606 13.6899C2.66056 14.4811 2.49106 15.4119 2.31481 16.3869L2.26906 16.6381C2.2354 16.8179 2.13721 16.9792 1.99295 17.0916C1.8487 17.2041 1.66832 17.2599 1.48576 17.2487C1.3032 17.2374 1.13105 17.1599 1.00168 17.0306C0.87231 16.9013 0.794649 16.7292 0.783308 16.5466C0.654308 14.4856 0.847808 11.4991 2.30356 9.00086C3.71656 6.57611 6.26056 4.71161 10.5318 4.51661V1.50011C10.5318 1.34384 10.5805 1.19147 10.6713 1.06427C10.7621 0.937068 10.8903 0.841392 11.0381 0.790607Z"
                                    fill="currentcolor"
                                  />
                                </svg>
                              </span>
                            </button>
                            <div>
                              <h6 className="team-title">{chi?.name}</h6>
                              <span className="team-subtitle">{chi.category_name}</span>
                            </div>
                          </div>
                          <span className="team-decription">{chi?.description.slice(0, 70)}...</span>
                        </div>
                        <div className="team-action align-self-start">
                          <div className="dropdown">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Homepage;
