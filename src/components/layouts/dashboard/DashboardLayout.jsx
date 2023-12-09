import React, { useEffect } from 'react';
import Loader from '../../../components/common/loader/Loader';
import Sidebar from '../../../components/layouts/sidebar/Sidebar';
import Navbar from '../../../components/layouts/menu/Navbar';
import Footer from '../../../components/layouts/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../../utils/helper/Helper';
import { dashboardAPI, setSocketEvents } from '../../../redux/dashboard';
import bell from '../../../assets/sound/bell.mp3';

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

  const socket = new WebSocket(
    'wss://free.blr2.piesocket.com/v3/1?api_key=MKiPuDQ31fMrusf9JsuwNKYnyGeTfEmP3w8YfXMq&notify_self=1',
  );

  useEffect(() => {
    // Connection opened
    socket.addEventListener('open', (event) => {
      // socket.send('Connection established');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      dispatch(setSocketEvents(JSON.parse(event.data)));
      if (!window.location.href.includes('support-chats')) {
        playNotificationSound();
      }
    });
  }, []);

  const playNotificationSound = () => {
    const notificationSound = document.getElementById('notificationSound');

    // Check if the audio element exists and is loaded
    if (notificationSound && notificationSound.readyState === HTMLAudioElement.HAVE_ENOUGH_DATA) {
      notificationSound.play();
    }
  };
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
        <audio
          style={{ visibility: 'hidden', display: 'none' }}
          id="notificationSound"
          src={bell}
          preload="auto"
        ></audio>

        <Footer />
      </main>
    </>
  );
};

export default DashboardLayout;
