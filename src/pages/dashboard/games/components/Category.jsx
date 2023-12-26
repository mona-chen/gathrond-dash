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
function Category() {
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
  const editImageRef = useRef(null);
  const addImageRef = useRef(null);

  const gameFilters = [
    {
      label: 'All',
      value: 'get_all_games',
    },
    {
      label: 'For Sale',
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
  const all_categories = useSelector((state) => state.dashboard)?.categories;

  useEffect(() => {
    dispatch(
      dashboardAPI.getAllGames({
        url: filter.value,
        cursor: currentPage,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, currentPage]);

  const categoryRef = useRef(new Categories(all_categories));

  const categories = categoryRef.current;
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
        categories.reset();
        await dispatch(
          dashboardAPI.updateItem({
            type: 'category',
            data: { ...editData, image_key: resp.key },
          }),
        );

        dispatch(dashboardAPI.getCategory());
      } else {
        setUploading(false);
      }
    } else {
      await dispatch(
        dashboardAPI.updateItem({
          type: 'category',
          data: editData,
        }),
      );
      categories.reset();
      dispatch(dashboardAPI.getCategory());
    }
  }

  async function handleAddSubmit() {
    setUploading(true);

    const resp = await fileManager.upload(dispatch, addImage);

    categories.reset();
    dispatch(dashboardAPI.getCategory());

    if (resp) {
      setUploading(false);

      const resp2 = await dispatch(
        dashboardAPI.addItem({
          type: 'category',
          data: { ...addData, image_key: resp.key },
        }),
      );

      if (resp2.payload?.status === 'success') {
        setAddData({
          category_name: '',
          image_key: '',
        });

        window.location.reload();
      }
    } else {
      setUploading(false);
    }
  }
  async function handleDelete(id) {
    const resp = await dispatch(dashboardAPI.deleteItem({ type: 'categories', data: { game_id: id } }));

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
    dispatch(dashboardAPI.getCategory());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    categoryRef.current = new Categories(all_categories);
  }, [all_categories]);

  const [editGameModal, setEditGameModal] = useState(false);
  const [addGame, setAddGame] = useState(false);

  return (
    <DashboardLayout>
      <div class="container-fluid content-inner pb-0">
        <div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex mb-4 justify-content-between ">
                  <h4 class="card-title text-white">{capitalizeFirstLetter(filter.label)} Categories</h4>
                  <button
                    // data-bs-toggle="offcanvas"
                    // data-bs-target="#addGame"
                    // aria-controls="addGame"

                    onClick={() => setAddGame(true)}
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
                            <th>Created At</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.max?.map((chi, idx) => {
                            return (
                              <tr key={idx}>
                                <td>
                                  <div className="d-flex gap-3 justify-content-start align-items-center">
                                    <figure style={{ width: '80px', height: '80px' }} className="rounded-pill">
                                      <img
                                        className="w-100 h-100 rounded-pill  object-fit-contain"
                                        src={chi.image_url}
                                        alt=""
                                      />
                                    </figure>
                                    <p>{chi.name}</p>
                                  </div>
                                </td>
                                <td>{formatDateTime(chi.created_at)}</td>
                                <td>
                                  <div className="d-flex gap-4">
                                    <figure
                                      onClick={() => {
                                        setEditData({ ...chi, category_id: chi.id, category_name: chi.name });
                                        setEditGameModal(true);
                                      }}
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Edit Category"
                                    >
                                      <svg
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
                                      title="Destroy Category"
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
                      {/* <Pagination
                        totalEntries={dashboard_summary.total_games}
                        currentPage={currentPage}
                        entriesPerPage={dashboard_summary.cursor_length}
                        onPageChange={(e) => {
                          setCurrentPage(e);
                        }}
                      /> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GOffCanvas show={editGameModal} onHide={() => setEditGameModal(false)} title={'Edit Category'}>
        <div class="row  row-cols-1 row-cols-md-1 g-4">
          <div class="col">
            <div class="card">
              <img ref={editImageRef} className="rounded-top" src={editData.image_url} alt="" />
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <GInput
                      id="image"
                      hint={'Category Image'}
                      onChange={(e) => fileManager.onChange(e, editImageRef, setEditImage)}
                      type={'file'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      onChange={handleChange}
                      value={editData?.category_name}
                      id="category_name"
                      hint={'Category Name'}
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

      <GOffCanvas show={addGame} onHide={() => setAddGame(false)} title={'Add New Category'}>
        <div class="row  row-cols-1 row-cols-md-1 g-4">
          <div class="col">
            <div class="card">
              <img ref={addImageRef} className="rounded-top" src={addData.image} alt="" />
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <GInput
                      id="image"
                      hint={'Category Image'}
                      onChange={(e) => fileManager.onChange(e, addImageRef, setAddImage)}
                      type={'file'}
                    />
                  </div>
                  <div class="mb-3">
                    <GInput
                      onChange={handleAddChange}
                      value={addData?.category_name}
                      id="category_name"
                      hint={'Category Name'}
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
                  Create Category
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
        title={'Delete Category'}
      >
        <div className="mt-1 mb-5">Are you sure you want to delete this category?</div>
      </GModal>
    </DashboardLayout>
  );
}

export default Category;
