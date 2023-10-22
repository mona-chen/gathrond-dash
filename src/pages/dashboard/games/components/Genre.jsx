import React, { useEffect, useRef, useState } from 'react';
import DashboardLayout from '../../../../components/layouts/dashboard/DashboardLayout';
import Pagination from '../../../../components/common/pagination/Pagination';
import { capitalizeFirstLetter, formatDateTime, formatNumWithComma, symbol } from '../../../../utils/helper/Helper';
import { icons } from '../../../../assets/icons/icons';
import GOffCanvas from '../../../../components/common/offCanvas/OffCanvas';
import GInput from '../../../../components/common/inputs/GInputs';
import GModal from '../../../../components/common/modal/GModal';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI } from '../../../../redux/dashboard';
import { Categories, GameTypes, Genres } from '../../../../utils/helper/categories';
import { FileManager } from '../../../../utils/helper/upload';
import GButton from '../../../../components/common/button/Button';
import Loader from '../../../../components/common/loader/Loader';

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
function Genre() {
  const [filter, setFilter] = useState({
    value: 'get_all_games',
    label: 'All',
  });

  const [deleteModal, setDeleteModal] = useState({
    on: false,
    chi: '',
  });
  const [editData, setEditData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [editImage, setEditImage] = useState();
  const [addImage, setAddImage] = useState();
  const [uploading, setUploading] = useState(false);
  const { all_games } = useSelector((state) => state.dashboard);
  const editImageRef = useRef(null);
  const addImageRef = useRef(null);

  const gameFilters = [
    {
      label: 'All',
      value: 'get_all_games',
    },
    {
      label: 'In Stock',
      value: 'get_games_in_stock',
    },
    {
      label: 'Out of Stock',
      value: 'get_out_of_stock_games',
    },
    {
      label: 'Recommended',
      value: 'get_recommended_games',
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      dashboardAPI.getAllGames({
        url: filter.value,
        cursor: currentPage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, currentPage]);

  const categories = new Categories();
  const genres = new Genres();
  const gameTypes = new GameTypes();
  const fileManager = new FileManager();
  const { loading } = useSelector((state) => state.dashboard);
  const { dashboard_summary } = useSelector((state) => state.dashboard);

  function handleChange(e) {
    setEditData({
      ...editData,
      [e.target.id]: e.target.value,
    });
  }

  function handleAddChange(e) {
    setAddData({
      ...addData,
      [e.target.id]: e.target.value,
    });
  }
  async function handleEditSubmit() {
    if (editImage) {
      setUploading(true);
      const resp = await fileManager.upload(dispatch, editImage);

      if (resp) {
        setUploading(false);
        // setEditData({
        //   ...editData,
        //   image_key: resp.key,
        // });

        await dispatch(
          dashboardAPI.updateItem({
            type: 'genre',
            data: { ...editData, image_key: resp.key },
          }),
        );
      } else {
        setUploading(false);
      }
    } else {
      await dispatch(
        dashboardAPI.updateItem({
          type: 'genre',
          data: editData,
        }),
      );
    }
  }

  async function handleAddSubmit() {
    setUploading(true);
    const resp = await fileManager.upload(dispatch, addImage);

    if (resp) {
      setUploading(false);

      const resp2 = await dispatch(
        dashboardAPI.addItem({
          type: 'genres',
          data: { ...addData, image_key: resp.key },
        }),
      );

      if (resp2.payload.status === 'success') {
        setAddData({
          game_type_id: '',
          category_id: '',
          count: '',
          recommended: '',
          description: '',
          amount: '',
          name: '',
          genre_id: '',
          image_key: '',
        });
      }
    } else {
      setUploading(false);
    }
  }
  async function handleDelete(id) {
    const resp = await dispatch(dashboardAPI.deleteItem({ type: 'genre', data: { game_id: id } }));

    if (resp.payload?.status === 'success') {
      setDeleteModal(false);
    }
  }

  function disabledAlgoAdd(data) {
    if (!addImage) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    dispatch(dashboardAPI.getDashboardData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout>
      <div class="container-fluid content-inner pb-0">
        <div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex mb-4 justify-content-between ">
                  <h4 class="card-title text-white">{capitalizeFirstLetter(filter.label)} Genres</h4>
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#addGame"
                    aria-controls="addGame"
                    className="btn btn-primary "
                  >
                    Add New
                  </button>
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
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Recommended</th>
                            <th>Created At</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {all_games?.map((chi, idx) => {
                            return (
                              <tr>
                                <td>
                                  <div className="d-flex gap-3 justify-content-start align-items-center">
                                    <figure style={{ width: '80px', height: '80px' }} className="rounded-pill">
                                      <img
                                        className="w-100 h-100 rounded-pill  object-fit-contain"
                                        src={chi.image}
                                        alt=""
                                      />
                                    </figure>
                                    <p>{chi.name}</p>
                                  </div>
                                </td>{' '}
                                <td>{symbol('ngn') + formatNumWithComma(chi?.amount, 'ngn')}</td>
                                <td>{categories.filter(chi?.category_id)?.label}</td>
                                <td>{chi.count}</td>
                                <td>{chi.recommended === 0 ? 'No' : 'Yes'}</td>
                                <td>{formatDateTime(chi.created_at)}</td>
                                <td>
                                  <div className="d-flex gap-4">
                                    <figure
                                      onClick={() =>
                                        setEditData({ ...chi, game_id: chi.id, game_type_id: chi.game_type })
                                      }
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit Genre"
                                    >
                                      <svg
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#editGame"
                                        aria-controls="editGame"
                                        width={22}
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        {icons.pencil}
                                      </svg>{' '}
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
                                      title="Destroy Genre"
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
                        totalEntries={dashboard_summary.total_games}
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
      </div>

      <GOffCanvas id={'editGame'} title={'Edit Genre'}>
        <div class="row  row-cols-1 row-cols-md-1 g-4">
          <div class="col">
            <div class="card">
              <img ref={editImageRef} className="rounded-top" src={editData.image} alt="" />
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <GInput
                      id="image"
                      hint={'Genre Image'}
                      onChange={(e) => fileManager.onChange(e, editImageRef, setEditImage)}
                      type={'file'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput onChange={handleChange} value={editData?.name} id="name" hint={'Genre Name'} />
                  </div>

                  <div class="mb-3">
                    <GInput
                      onChange={handleChange}
                      id="amount"
                      value={editData.amount}
                      hint={'Amount'}
                      type={'number'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      style={{ minHeight: '7rem' }}
                      value={editData.description}
                      id="description"
                      onChange={handleChange}
                      hint={'Description'}
                      type={'textarea'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="recommended"
                      onChange={(e) => {
                        handleChange({
                          target: {
                            id: 'recommended',
                            value: e.value,
                          },
                        });
                      }}
                      value={[
                        {
                          value: editData.recommended,
                          label: editData.recommended === 0 ? 'No' : 'Yes',
                        },
                      ]}
                      hint={'Recommended'}
                      selectOptions={[
                        { label: 'Yes', value: 0 },
                        { label: 'No', value: 1 },
                      ]}
                      type={'select'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      onChange={handleChange}
                      value={editData?.count}
                      id="count"
                      hint={'Stock Count'}
                      type={'number'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="category_id"
                      value={categories.filter(editData.category_id)}
                      hint={'Category'}
                      onChange={(e) => {
                        handleChange({
                          target: {
                            id: 'category_id',
                            value: e.value,
                          },
                        });
                      }}
                      selectOptions={categories.mid}
                      type={'select'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="game_type_id"
                      hint={'Genre Type'}
                      onChange={(e) => {
                        handleChange({
                          target: {
                            id: 'game_type_id',
                            value: e.value,
                          },
                        });
                      }}
                      value={gameTypes.filter(editData.game_type_id)}
                      selectOptions={gameTypes.mid}
                      type={'select'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="genre_id"
                      onChange={(e) => {
                        handleChange({
                          target: {
                            id: 'genre_id',
                            value: e.value,
                          },
                        });
                      }}
                      value={genres.filter(editData.genre_id)}
                      hint={'Genre'}
                      selectOptions={genres.mid}
                      type={'select'}
                    />
                  </div>
                </form>
                <GButton
                  loadingText={uploading ? 'Uploading image...' : 'Saving data...'}
                  loading={loading}
                  onClick={handleEditSubmit}
                  className="btn mt-5 w-100 btn-secondary"
                >
                  Save
                </GButton>
              </div>
            </div>
          </div>
        </div>
      </GOffCanvas>

      <GOffCanvas id={'addGame'} title={'Add New Genre'}>
        <div class="row  row-cols-1 row-cols-md-1 g-4">
          <div class="col">
            <div class="card">
              <img ref={addImageRef} className="rounded-top" src={addData.image} alt="" />
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <GInput
                      id="image"
                      hint={'Genre Image'}
                      onChange={(e) => fileManager.onChange(e, addImageRef, setAddImage)}
                      type={'file'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput onChange={handleAddChange} value={addData?.name} id="name" hint={'Genre Name'} />
                  </div>

                  <div class="mb-3">
                    <GInput
                      onChange={handleAddChange}
                      id="amount"
                      value={addData.amount}
                      hint={'Amount'}
                      type={'number'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      style={{ minHeight: '7rem' }}
                      value={addData.description}
                      id="description"
                      onChange={handleAddChange}
                      hint={'Description'}
                      type={'textarea'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="recommended"
                      onChange={(e) => {
                        handleAddChange({
                          target: {
                            id: 'recommended',
                            value: e.value,
                          },
                        });
                      }}
                      value={[
                        {
                          value: addData.recommended,
                          label: addData.recommended === 0 ? 'No' : 'Yes',
                        },
                      ]}
                      hint={'Recommended'}
                      selectOptions={[
                        { label: 'Yes', value: 0 },
                        { label: 'No', value: 1 },
                      ]}
                      type={'select'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      onChange={handleAddChange}
                      value={addData?.count}
                      id="count"
                      hint={'Stock Count'}
                      type={'number'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="category_id"
                      value={categories.filter(addData.category_id)}
                      hint={'Category'}
                      onChange={(e) => {
                        handleAddChange({
                          target: {
                            id: 'category_id',
                            value: e.value,
                          },
                        });
                      }}
                      selectOptions={categories.mid}
                      type={'select'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="game_type_id"
                      hint={'Genre Type'}
                      onChange={(e) => {
                        handleAddChange({
                          target: {
                            id: 'game_type_id',
                            value: e.value,
                          },
                        });
                      }}
                      value={gameTypes.filter(addData.game_type_id)}
                      selectOptions={gameTypes.mid}
                      type={'select'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      id="genre_id"
                      onChange={(e) => {
                        handleAddChange({
                          target: {
                            id: 'genre_id',
                            value: e.value,
                          },
                        });
                      }}
                      value={genres.filter(addData.genre_id)}
                      hint={'Genre'}
                      selectOptions={genres.mid}
                      type={'select'}
                    />
                  </div>
                </form>
                <GButton
                  loadingText={uploading ? 'Uploading image...' : 'Creating...'}
                  loading={loading}
                  disabled={disabledAlgoAdd()}
                  onClick={handleAddSubmit}
                  className={`btn mt-5 w-100 btn-${disabledAlgoAdd() ? 'secondary' : 'primary'} `}
                >
                  Create Genre
                </GButton>
              </div>
            </div>
          </div>
        </div>
      </GOffCanvas>
      <GModal
        onBtnClick={() => handleDelete(deleteModal.id)}
        shutdown={deleteModal.on}
        danger
        type="centered"
        id="deleteGame"
        btnLabel={'Yes, Destroy'}
        dismissible
        loading={loading}
        title={'Delete Genre'}
      >
        <div className="mt-1 mb-5">Are you sure you want to delete this genre?</div>
      </GModal>
    </DashboardLayout>
  );
}

export default Genre;
