/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import FullScreenModal from '../../../components/common/modal/fullScreenModal';
import SingleUserModal from '../component/SingleUserModal';
import Pagination from '../../../components/common/pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { dashboardAPI } from '../../../redux/dashboard';
import { debounce, formatDateTime } from '../../../utils/helper/Helper';
import Empty from '../../../components/common/empty';
import Loader from '../../../components/common/loader/Loader';

function Users() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [querySearch, setQuerySearch] = useState('');
  const { dashboard_summary, users, loading } = useSelector((state) => state.dashboard);
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
    // dispatch(dashboardAPI.getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const all_users = users?.users;

  function handleSearchInputChange(event) {
    const debouncedSearch = debounce(handleSearch, 300);

    setSearchTerm(event.target.value);

    if (searchTerm?.length > 4) debouncedSearch(searchTerm);
    if (searchTerm?.length < 4) dispatch(dashboardAPI.getUsers());
  }

  function handleSearch(e) {
    dispatch(dashboardAPI.getUsers({ url: `search_user?search_key=${e}&cursor=0&` }));
  }

  function handleQuerySearch(q) {
    const debouncedSearch = debounce(handleSearch, 300);

    setSearchTerm(q);

    if (searchTerm?.length > 4) debouncedSearch(searchTerm);
    if (searchTerm?.length < 4) dispatch(dashboardAPI.getUsers());
  }

  useEffect(() => {
    // Get the current URL search parameters
    const queryParams = new URLSearchParams(window.location.search);

    const searchQuery = queryParams.get('q') || '';

    setQuerySearch(searchQuery);

    setTimeout(() => {
      if (querySearch || querySearch?.length > 0) {
        window.location.reload();
        handleQuerySearch(searchQuery);
      }
    }, 1000);
  }, [querySearch]);

  useEffect(() => {
    if (querySearch?.length < 4) {
      dispatch(
        dashboardAPI.getUsers({
          cursor: currentPage,
        }),
      );
    } else {
      handleQuerySearch(querySearch);
    }

    const searchInput = document.getElementById('searchInput');
    const searchParams = new URLSearchParams(window.location.search);

    searchInput.addEventListener('input', () => {
      if (searchInput.value.length > 0) {
        searchParams.set('q', searchInput.value);
        setQuerySearch(searchInput.value);
      } else {
        searchParams.delete('q');
      }
      window.history.pushState(null, null, `?${searchParams.toString()}`);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

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
                      id="searchInput"
                      value={searchTerm || querySearch}
                      onChange={handleSearchInputChange}
                      className="form-control ms-1"
                      placeholder="Search.."
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div className="card-body">
                  {loading ? (
                    <Loader />
                  ) : all_users?.length === 0 ? (
                    <Empty title={'No users found'} />
                  ) : (
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
                          {all_users?.map((chi, idx) => {
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
                        totalEntries={users?.cursor_length}
                        currentPage={currentPage}
                        entriesPerPage={dashboard_summary.cursor_length}
                        onPageChange={(e) => {
                          setCurrentPage(e);
                        }}
                      />
                    </div>
                  )}
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
