import React, { useEffect, useRef, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import Pagination from '../../../components/common/pagination/Pagination';
import {
  capitalizeFirstLetter,
  debounce,
  formatDateTime,
  formatNumWithComma,
  symbol,
} from '../../../utils/helper/Helper';
import { icons } from '../../../assets/icons/icons';
import GInput from '../../../components/common/inputs/GInputs';
import GModal from '../../../components/common/modal/GModal';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI } from '../../../redux/dashboard';
import Loader from '../../../components/common/loader/Loader';
import UpdateStatusModal from './component/UpdateStatus';
import DiscardTransactionModal from './component/DiscardModal';
import TransactionDetailsModal from './component/TransactionDetails';

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
function Trades() {
  const [filter, setFilter] = useState({
    value: 'get_subscriptions?',
    label: 'All',
  });

  const [deleteModal, setDeleteModal] = useState({
    on: false,
    chi: '',
  });
  const [editData, setEditData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      dashboardAPI.getPlatformSubscriptions({
        url: filter.value,
        cursor: currentPage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, currentPage]);

  const { loading } = useSelector((state) => state.dashboard);
  const { dashboard_summary, all_subscriptions } = useSelector((state) => state.dashboard);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  async function handleDelete(id) {
    const resp = await dispatch(dashboardAPI.deleteItem({ type: 'game', data: { game_id: id } }));

    if (resp.payload?.status === 'success') {
      setDeleteModal(false);
    }
  }

  const { trades } = all_subscriptions;

  let searchTerm;
  function handleSearchInputChange(event) {
    const debouncedSearch = debounce(handleSearch, 300);

    searchTerm = event.target.value;

    if (searchTerm?.length > 4) debouncedSearch(searchTerm);
    if (searchTerm?.length < 4)
      dispatch(
        dashboardAPI.getPlatformSubscriptions({
          url: filter.value,
          cursor: currentPage,
        }),
      );
  }

  function handleSearch(e) {
    dispatch(dashboardAPI.searchPlatformSubscriptions({ q: e }));
  }

  console.log(editData);
  return (
    <DashboardLayout>
      <div class="container-fluid content-inner pb-0">
        <div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex mb-4 justify-content-between ">
                  <h4 class="card-title text-white">Subscriptions</h4>
                </div>
                <div class="d-flex mt-3 ms-4 me-4 justify-content-between">
                  <div class="form-outline">
                    <input
                      type="search"
                      id="form1"
                      onChange={handleSearchInputChange}
                      class="form-control ms-1"
                      placeholder="Search.."
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div class="card-body">
                  {loading ? (
                    <>
                      <Loader transparent style={{ width: '100px' }} loading={loading} />
                    </>
                  ) : (
                    <div class="table-responsive">
                      <table class="table">
                        <thead class="">
                          <tr>
                            <th>Recipient</th>
                            <th>BANK</th>
                            <th>Amount</th>
                            <th>Session ID</th>
                            <th>Created At</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {trades?.map((chi, idx) => {
                            const meta = chi.meta_data[0];

                            return (
                              <tr>
                                <td>
                                  <div className="d-flex gap-3 justify-content-start align-items-center">
                                    <p>{chi.firstname + ' ' + chi?.lastname}</p>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex justify-content-start flex-column align-items-start">
                                    <small className="">{meta?.bank_name}</small>
                                    <p>{meta?.receiving_account_number}</p>
                                  </div>
                                </td>
                                <td>{symbol('ngn') + formatNumWithComma(chi?.amount, 'ngn')}</td>
                                <td>{meta?.session_id}</td>
                                <td>{formatDateTime(chi.created_at)}</td>
                                <td>
                                  <div className="d-flex gap-4">
                                    {/* <figure
                                      onClick={() => {
                                        setEditData({ ...chi, game_id: chi.id, game_type_id: chi.game_type });
                                        setShowUpdateModal(true); //
                                      }}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit Game"
                                    >
                                      <svg
                                        // data-bs-toggle="offcanvas"
                                        // data-bs-target="#editGame"
                                        // aria-controls="editGame"
                                        width={22}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        {icons.pencil}
                                      </svg>{' '}
                                    </figure> */}

                                    <figure
                                      onClick={() => {
                                        setEditData({ ...meta, image: chi?.image });
                                        setDetailsModal(true); //
                                      }}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="View Transaction"
                                    >
                                      {icons.eye}
                                    </figure>

                                    {/* <figure
                                      onClick={() =>
                                        setDeleteModal({
                                          ...deleteModal,
                                          id: chi.id,
                                        })
                                      }
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Destroy Game"
                                    >
                                      <svg
                                        color="red"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteGame"
                                        aria-controls="deleteGame"
                                        width={22}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        {icons.delete}
                                      </svg>{' '}
                                    </figure> */}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <Pagination
                        totalEntries={4}
                        currentPage={all_subscriptions?.cursor}
                        entriesPerPage={20}
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
      </div>

      <UpdateStatusModal
        // show={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdateStatus={() => {}}
      />
      <DiscardTransactionModal
        show={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdateStatus={() => {}}
      />
      <GModal
        onBtnClick={() => handleDelete(deleteModal.id)}
        shutdown={deleteModal.on}
        danger
        type="centered"
        id="deleteGame"
        btnLabel={'Yes, Destroy'}
        dismissible
        loading={loading}
        title={'Update Status'}
      >
        <div className="mt-1 mb-5">Are you sure you want to update the status of this item to game?</div>
      </GModal>

      <TransactionDetailsModal
        handleClose={() => setDetailsModal(false)}
        show={detailsModal}
        image={editData?.image}
        transactionDetails={{
          'Account Name ': editData?.meta_data ? JSON.parse(editData?.meta_data)?.account_name : '',
          'Account NO ': editData?.receiving_account_number,
          'Bank ': editData?.bank_name,
          'Bal Before(admin) ': editData?.balance_state
            ? formatNumWithComma(JSON.parse(editData?.balance_state)?.balance_before)
            : '',
          'Bal After(admin) ': editData?.balance_state
            ? formatNumWithComma(JSON.parse(editData?.balance_state)?.balance_after)
            : '',
          'Settled Amount ': formatNumWithComma(editData?.settled_amount, 'ngn'),
          'Transaction Amount ': formatNumWithComma(editData?.transaction_amount, 'ngn'),
        }}
      />
    </DashboardLayout>
  );
}

export default Trades;
