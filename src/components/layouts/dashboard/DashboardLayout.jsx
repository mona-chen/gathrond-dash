import React, { useEffect } from 'react';
import Loader from '../../../components/common/loader/Loader';
import Sidebar from '../../../components/layouts/sidebar/Sidebar';
import Navbar from '../../../components/layouts/menu/Navbar';
import Footer from '../../../components/layouts/footer/Footer';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../../utils/helper/Helper';
import { dashboardAPI } from '../../../redux/dashboard';

const DashboardLayout = ({ children, loading }) => {
  const dispatch = useDispatch();

  const categories = getCookie('categories');
  const genres = getCookie('genres');
  const game_types = getCookie('game_types');

  useEffect(() => {
    if (
      !categories ||
      !game_types ||
      !genres ||
      categories?.length === 0 ||
      genres?.length === 0 ||
      game_types?.length === 0
    ) {
      dispatch(dashboardAPI.getCategory());
      dispatch(dashboardAPI.getGenre());
      dispatch(dashboardAPI.getGameType());
    }
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Gathrone | Gaming</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="../assets/images/favicon.ico" />
      <link rel="stylesheet" href="../assets/css/libs.min.css" />
      <link rel="stylesheet" href="../assets/css/nairobi.css?v=1.0.0" />
      {/* loader Start */}
      {loading && <Loader />}
      {/* loader END */}
      <Sidebar />
      <main className="main-content">
        <div className="position-relative">
          <Navbar />
        </div>
        <div className="container-fluid content-inner pb-0">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default DashboardLayout;
