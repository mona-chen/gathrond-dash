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
import UpdatePurchase from './component/UpdatePurchases';

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
function Purchases() {
  const [filter, setFilter] = useState({
    value: 'get_purchased_games?order_type=0&cursor=0&',
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
      dashboardAPI.getPlatformPurchasedGames({
        url: filter.value,
        cursor: currentPage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, currentPage]);

  const { loading } = useSelector((state) => state.dashboard);
  const { dashboard_summary, all_purchases } = useSelector((state) => state.dashboard);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  async function handleDelete(id) {
    const resp = await dispatch(dashboardAPI.deleteItem({ type: 'game', data: { game_id: id } }));

    if (resp.payload?.status === 'success') {
      setDeleteModal(false);
    }
  }

  const { order } = all_purchases;

  let searchTerm;
  function handleSearchInputChange(event) {
    const debouncedSearch = debounce(handleSearch, 300);

    searchTerm = event.target.value;

    if (searchTerm?.length > 4) debouncedSearch(searchTerm);
    if (searchTerm?.length < 4)
      dispatch(
        dashboardAPI.getPlatformPurchasedGames({
          url: filter.value,
          cursor: currentPage,
        }),
      );
  }

  function handleSearch(e) {
    dispatch(dashboardAPI.searchPlatformPurchases({ q: e }));
  }

  const gameFilters = [
    {
      label: 'Pending',
      value: 'get_purchased_games?order_type=0&cursor=0&',
    },
    {
      label: 'Approved',
      value: 'get_purchased_games?order_type=1&cursor=0&',
    },
  ];

  async function handleUpdate(status) {
    const resp = await dispatch(
      dashboardAPI.updatePlatformTrades({
        invoice_id: editData.invoice_id,
        status: status,
        trade_id: editData.id,
        url: 'update_order_status?cursor=0',
        user_id: editData.c_id,
        id: editData.id,
      }),
    );

    if (resp.payload.data.status === 'success') {
      await dispatch(
        dashboardAPI.getPlatformSwitchedGames({
          url: filter.value,
          cursor: currentPage,
        }),
      );
    }
  }

  return (
    <DashboardLayout>
      <div class="container-fluid content-inner pb-0">
        <div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex mb-4 justify-content-between ">
                  <h4 class="card-title text-white">Purchases</h4>
                </div>
                <div class="d-flex mt-3 ms-4 me-4 justify-content-between">
                  <GInput
                    onChange={setFilter}
                    value={filter}
                    chevron
                    style={buttonStyle}
                    type="select"
                    selectOptions={gameFilters}
                  />
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
                            <th>Game Name</th>
                            <th>Bank</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Created At</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {order?.map((chi, idx) => {
                            const meta = chi?.meta_data ? chi?.meta_data[0] : [];
                            console.log(chi);
                            return (
                              <tr>
                                <td>
                                  <div className="d-flex gap-3 justify-content-start align-items-center">
                                    <figure style={{ width: '50px', height: '50px' }} className="rounded-pill">
                                      <img
                                        className="w-100 h-100 rounded-pill  object-fit-contain"
                                        src={chi?.image}
                                        alt=""
                                      />
                                    </figure>
                                    <p>{chi?.game_name}</p>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex justify-content-start flex-column align-items-start">
                                    <small className="">{meta?.bank_name}</small>
                                    <p>{meta?.receiving_account_number}</p>
                                  </div>
                                </td>
                                <td>{symbol('ngn') + formatNumWithComma(chi?.amount, 'ngn')}</td>
                                <td>
                                  {chi?.description.length > 50
                                    ? chi?.description.slice(0, 50) + '...'
                                    : chi?.description}
                                </td>
                                <td>{formatDateTime(chi.created_at)}</td>
                                <td>
                                  <div className="d-flex gap-4">
                                    <figure
                                      onClick={() => {
                                        setEditData({ ...chi, game_id: chi.id, game_type_id: chi.game_type });
                                        setShowUpdateModal(true); //
                                      }}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit Game"
                                    >
                                      {chi?.order_status === 0 ? (
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
                                        </svg>
                                      ) : (
                                        ''
                                      )}
                                    </figure>

                                    <figure
                                      onClick={() => {
                                        setEditData({
                                          ...meta,

                                          image: chi?.image,
                                          address: chi?.address,
                                          gameName: chi?.game_name,
                                          invoice_id: chi?.invoice_id,
                                          phone: chi?.phone,
                                        });
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
                        currentPage={all_purchases?.cursor}
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

      <UpdatePurchase
        show={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdateStatus={(e) => {
          handleUpdate(e);
        }}
      />
      {/* <DiscardTransactionModal
        show={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        handleUpdateStatus={() => {}}
      /> */}
      {/* <GModal
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
      </GModal> */}

      <TransactionDetailsModal
        handleClose={() => setDetailsModal(false)}
        image={editData.image}
        show={detailsModal}
        transactionDetails={{
          'Game Name': editData?.gameName,
          'Account Name ': editData?.meta_data ? JSON.parse(editData?.meta_data)?.account_name : '',
          'Account NO ': editData?.receiving_account_number,
          'Bank ': editData?.bank_name,
          'Invoice ID': editData?.invoice_id,
          Phone: editData?.phone,
          // 'Bal Before(admin) ': editData?.balance_state
          //   ? formatNumWithComma(JSON.parse(editData?.balance_state)?.balance_before)
          //   : '',
          // 'Bal After(admin) ': editData?.balance_state
          //   ? formatNumWithComma(JSON.parse(editData?.balance_state)?.balance_after)
          //   : '',
          'Settled Amount ': formatNumWithComma(editData?.settled_amount, 'ngn'),
          'Transaction Amount ': formatNumWithComma(editData?.transaction_amount, 'ngn'),
          Address: editData?.address,
        }}
      />
    </DashboardLayout>
  );
}

export default Purchases;
