import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import FullScreenModal from '../../../components/common/modal/fullScreenModal';
import SingleUserModal from '../component/SingleUserModal';
import Pagination from '../../../components/common/pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { dashboardAPI } from '../../../redux/dashboard';
import { formatDateTime } from '../../../utils/helper/Helper';

function Users() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { dashboard_summary, users } = useSelector((state) => state.dashboard);
  const buttonStyle = {
    padding: '10px 15px 10px 15px',
    color: '#fff',
    backgroundColor: '#202022',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    backgroundSize: '16px 12px',
    border: '1px solid #69697a',
    borderRadius: '.5rem',
  };

  useEffect(() => {
    dispatch(dashboardAPI.getDashboardData());
    dispatch(dashboardAPI.getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DashboardLayout>
        <div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="d-flex mt-3 ms-4 me-4 justify-content-between">
                  <div className="card-header p-0 m-0">
                    <h4 className="card-title text-white">Users</h4>
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
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="">
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Switches</th>
                          <th>Joined</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((chi, idx) => {
                          return (
                            <tr
                              onClick={() =>
                                setModal({
                                  on: true,
                                  chi: chi,
                                })
                              }
                              key={idx}
                            >
                              <td>{chi?.firstname + ' ' + chi?.lastname}</td>
                              <td>{chi?.email}</td>
                              <td>{chi?.phone}</td>
                              <td>{chi.all_switch}</td>
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
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <FullScreenModal
        onClose={() => setModal({ chi: '', on: false })}
        id="show-user"
        label="single-user-view"
        visible={modal.on}
      >
        <SingleUserModal chi={modal?.chi} />
      </FullScreenModal>
    </>
  );
}

export default Users;
