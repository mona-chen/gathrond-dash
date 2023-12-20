import React, { useEffect, useState } from 'react';
import Pagination from '../../../../components/common/pagination/Pagination';
import { capitalizeFirstLetter, formatDateTime, formatNumWithComma } from '../../../../utils/helper/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI } from '../../../../redux/dashboard';
import Loader from '../../../../components/common/loader/Loader';

const SwitchedGames = ({ user }) => {
  const dispatch = useDispatch();
  const { user_switched_games, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardAPI.getUserPurchase({ id: 1 }));
  }, [user?.id]);

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <>
              <div class="col mt-5">
                <div class="d-flex px-3 justify-content-between">
                  <h5>Switched Games</h5>
                  <p class="text-primary">Next</p>
                </div>

                <div className="row">
                  {user_switched_games?.map((chi, idx) => {
                    const creAt = formatDateTime(chi?.created_at).split(',');

                    return (
                      <div
                        key={idx}
                        class="swiper-slide swiper-slide-active"
                        style={{ width: '309px', marginRight: '32px' }}
                        role="group"
                        aria-label="1 / 6"
                      >
                        <div class="card tournament-card">
                          <div class="card-header">
                            <img src={chi?.image} class="img-fluid w-100 iq-img iq-img-shadow-blue" alt="img8" />
                            <span class="text-primary tournament-label">{creAt[0]}</span>
                            <span class="tournament-label d-inline-block ms-3"> AT {creAt[2]}</span>
                            <h6 class="mt-4 tournament-title">{capitalizeFirstLetter(chi?.game_name)}</h6>
                          </div>
                          <div class="card-body d-flex justify-content-between">
                            {/* <div>
                              <h6 class="text-primary tournament-label">Amount</h6>
                              <span class="tournament-label">
                                <svg
                                  width="14"
                                  height="12"
                                  viewBox="0 0 14 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.5 3.10369e-06C2.0285 3.10369e-06 1.542 0.177503 1.156 0.515003C0.771 0.854003 0.5 1.375 0.5 2C0.5 2.531 0.723 2.985 1 3.344C1.277 3.702 1.613 3.9865 1.922 4.2655C2.54 4.824 3 5.2825 3 6C3 6.076 2.925 6.26 2.828 6.4065C2.731 6.5515 2.6405 6.6405 2.6405 6.6405L3.3605 7.344C3.3605 7.344 3.5195 7.183 3.6725 6.954C3.8025 6.757 3.945 6.5015 3.985 6.1725C4.0415 6.3335 4.095 6.501 4.156 6.6565C4.501 7.544 4.896 8.339 5.344 8.938C5.5065 9.156 5.674 9.35 5.859 9.516C4.8265 9.59 4 10.45 4 11.5V12H10V11.5C10 10.4385 9.1575 9.5735 8.11 9.515C8.30583 9.34101 8.48341 9.14751 8.64 8.9375C9.09 8.3405 9.481 7.5425 9.828 6.656C9.893 6.49 9.9545 6.3125 10.0155 6.141C10.0505 6.4845 10.194 6.751 10.3285 6.953C10.4815 7.183 10.641 7.344 10.641 7.344L11.361 6.6405C11.361 6.6405 11.27 6.5525 11.173 6.4065C11.0755 6.2615 11.001 6.0765 11.001 6.0005C11.001 5.2825 11.461 4.824 12.079 4.2655C12.388 3.987 12.724 3.7025 13.001 3.3445C13.278 2.986 13.501 2.5315 13.501 2.0005C13.501 1.3745 13.231 0.854003 12.8445 0.515503C12.4729 0.187609 11.9956 0.00459764 11.5 3.10369e-06C11.0158 -0.000857326 10.5484 0.177211 10.1875 0.500003H3.8125C3.45161 0.177211 2.98418 -0.000857326 2.5 3.10369e-06ZM2.5 1C2.737 1 2.889 1.075 3 1.14C3.014 2.16 3.19 3.317 3.469 4.453C3.203 4.093 2.87 3.795 2.578 3.531C2.262 3.246 1.973 2.983 1.7815 2.7345C1.589 2.485 1.5 2.271 1.5 2C1.5 1.651 1.636 1.434 1.828 1.265C2.02 1.098 2.283 1 2.5 1ZM11.5 1C11.717 1 11.98 1.0975 12.172 1.265C12.364 1.434 12.5 1.651 12.5 2C12.5 2.2715 12.41 2.486 12.2185 2.735C12.027 2.983 11.7385 3.245 11.422 3.531C11.122 3.801 10.785 4.1125 10.5155 4.4845C10.8035 3.3395 10.9855 2.1745 11.0005 1.1395C11.1115 1.0745 11.2635 0.999503 11.5005 0.999503L11.5 1ZM4.0625 1.5H9.9375C9.861 2.986 9.4775 4.799 8.8905 6.297C8.567 7.1255 8.192 7.8445 7.8285 8.328C7.465 8.8115 7.132 9 6.985 9C6.8375 9 6.5185 8.813 6.156 8.328C5.794 7.843 5.416 7.1265 5.094 6.297C4.511 4.797 4.139 2.9785 4.0625 1.5ZM6.5 3V5.5H7.5V3H6.5ZM6 10.5H8C8.3585 10.5 8.605 10.7215 8.7815 11H5.219C5.395 10.7215 5.6415 10.5 6 10.5Z"
                                    fill="#FF8A00"
                                  ></path>
                                </svg>
                                {chi?.amount}
                              </span>
                            </div> */}
                            <div>
                              <h6 class="tournament-label text-primary">Category</h6>
                              <span class="tournament-label">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 2V6.5H3V3.7185L7.2815 8L3 12.2815V9.5H2V14H6.5V13H3.7185L8 8.7185L12.2815 13H9.5V14H14V9.5H13V12.2815L8.7185 8L13 3.7185V6.5H14V2H9.5V3H12.2815L8 7.2815L3.7185 3H6.5V2H2Z"
                                    fill="#BC7DD9"
                                  ></path>
                                </svg>
                                {'   '}
                                {chi?.category}
                              </span>
                            </div>
                            <div>
                              <h6 class="tournament-label text text-primary">Genre</h6>
                              <span class="tournament-label">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.98712 0C3.78662 0 0.341125 3.2395 0.015625 7.357L4.30212 9.1305C4.67819 8.87401 5.12292 8.73704 5.57812 8.7375C5.61963 8.7375 5.66162 8.74 5.70312 8.74L7.60962 5.9795V5.9405C7.60962 4.2765 8.96112 2.925 10.6251 2.925C12.2891 2.925 13.6431 4.279 13.6431 5.943C13.6421 6.74287 13.3237 7.50964 12.7579 8.07499C12.192 8.64035 11.425 8.9581 10.6251 8.9585H10.5576L7.83862 10.8985C7.83862 10.935 7.84113 10.969 7.84113 11.0055C7.84113 12.2555 6.83063 13.2685 5.58063 13.2685C4.49213 13.2685 3.57012 12.487 3.35912 11.451L0.291625 10.18C1.24213 13.5395 4.32312 16.0005 7.98712 16.0005C12.4036 16.0005 15.9846 12.42 15.9846 8.0005C15.9846 3.581 12.4041 0.0005 7.98712 0.0005V0ZM5.02612 12.1405L4.04413 11.734C4.22497 12.1097 4.53712 12.4062 4.92163 12.5675C5.33782 12.7398 5.80535 12.7401 6.22176 12.5683C6.63817 12.3965 6.96949 12.0666 7.14313 11.651C7.22927 11.4453 7.27384 11.2245 7.27427 11.0015C7.2747 10.7785 7.23098 10.5576 7.14563 10.3515C7.06143 10.1444 6.93673 9.95611 6.77884 9.79779C6.62094 9.63947 6.43303 9.51426 6.22612 9.4295C5.82746 9.26298 5.38016 9.25546 4.97612 9.4085L5.98912 9.828C6.62712 10.096 6.92912 10.828 6.66362 11.466C6.39812 12.104 5.66362 12.406 5.02562 12.1405H5.02612ZM12.6356 5.9375C12.6351 5.40488 12.4235 4.89418 12.0471 4.51733C11.6707 4.14047 11.1602 3.92819 10.6276 3.927C10.0944 3.927 9.58303 4.13882 9.20599 4.51586C8.82895 4.8929 8.61712 5.40428 8.61712 5.9375C8.61712 6.47072 8.82895 6.9821 9.20599 7.35914C9.58303 7.73618 10.0944 7.948 10.6276 7.948C11.1604 7.94721 11.671 7.73505 12.0475 7.35811C12.424 6.98117 12.6355 6.47024 12.6356 5.9375ZM9.12263 5.935C9.12263 5.099 9.79712 4.4245 10.6306 4.4245C11.4641 4.4245 12.1436 5.099 12.1436 5.935C12.1436 6.7685 11.4641 7.4455 10.6306 7.4455C9.79712 7.4455 9.12263 6.7685 9.12263 5.935Z"
                                    fill="#0F2A80"
                                  ></path>
                                </svg>
                                {'   '}
                                {chi?.genre}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwitchedGames;
