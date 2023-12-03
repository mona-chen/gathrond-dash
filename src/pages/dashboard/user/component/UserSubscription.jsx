import React, { useEffect, useState } from 'react';
import Pagination from '../../../../components/common/pagination/Pagination';
import { formatDateTime, formatNumWithComma, symbol } from '../../../../utils/helper/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI } from '../../../../redux/dashboard';
import Loader from '../../../../components/common/loader/Loader';

const UserSubscription = ({ user }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { dashboard_summary, users } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();
  const { subscriptions, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardAPI.getUserPurchase({ id: 1 }));
  }, []);

  function formatStatus(stat) {
    if (stat === 1) {
      return (
        <div className="pending-status">
          <p>Pending</p>
        </div>
      );
    } else if (stat === 2) {
      return (
        <div className="success-status">
          <p>Success</p>
        </div>
      );
    }
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="d-flex mt-3 ms-4 me-4 justify-content-between">
            <div className="card-header p-0 m-0">
              <h4 className="card-title text-white">User Trades</h4>
            </div>
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control ms-1"
                placeholder="Search.."
                aria-label="Search"
              />
            </div>
          </div>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className="">
                    <tr>
                      <th>Invoice ID</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions?.length > 0 &&
                      subscriptions?.map((chi, idx) => {
                        return (
                          <tr
                            // onClick={() =>
                            //   setModal({
                            //     on: true,
                            //     chi: chi,
                            //   })
                            // }
                            key={idx}
                          >
                            <td>{chi?.invoice_id}</td>
                            <td>{chi?.trade_name}</td>
                            <td>
                              {chi.amount !== '0.00'
                                ? symbol('ngn') + '' + formatNumWithComma(chi?.amount, 'ngn')
                                : '-'}
                            </td>
                            <td>{formatStatus(chi?.tranx_status)}</td>
                            <td>{formatDateTime(chi?.created_at)}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <Pagination
                  totalEntries={dashboard_summary.user_counts}
                  currentPage={currentPage}
                  entriesPerPage={dashboard_summary.cursor_length}
                  onPageChange={() => {
                    setCurrentPage((e) => setCurrentPage(e));
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSubscription;
