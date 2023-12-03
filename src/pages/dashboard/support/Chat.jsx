import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI } from '../../../redux/dashboard';
import { formatDateTime } from '../../../utils/helper/Helper';

function ChatSection() {
  const dispatch = useDispatch();
  const { all_messages, messages } = useSelector((state) => state.dashboard);
  const [replyMessage, setReplyMessage] = useState('');

  const handleReply = () => {
    if (replyMessage.trim() !== '') {
      // Dispatch an action to send the reply
      dispatch(dashboardAPI.replyMessages({ user_id: userId?.c_id, message: replyMessage, message_type: 0 }));
      setReplyMessage('');
    }
  };
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      dispatch(dashboardAPI.getAllMessages());

      if (all_messages.length > 0) {
        setUserId(all_messages[0]);
      }
    };

    fetchData();

    // Polling interval in milliseconds (e.g., every 15 seconds)
    const intervalId = setInterval(fetchData, 15000);

    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userId !== null) {
      dispatch(dashboardAPI.getAllMessages());
      dispatch(
        dashboardAPI.getAMessage({
          user_id: userId?.c_id,
          message: replyMessage,
          message_type: 0,
        }),
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const { chat } = messages;

  useEffect(() => {}, []);

  return (
    <DashboardLayout>
      <section className="gradient-custom">
        <div className="container py-5 overflow-hidden chat-container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-white">Member</h5>

              <div className="card mask-custom">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {all_messages?.map((chi, idx) => {
                      return (
                        <li
                          key={idx}
                          className="p-2 border-bottom"
                          onClick={() => setUserId(chi)}
                          style={{
                            borderBottom: '1px solid rgba(255,255,255,.3) !important',
                          }}
                        >
                          <a href="#!" className="d-flex justify-content-between link-light">
                            <div className="d-flex flex-row">
                              <img
                                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${chi?.firstname}`}
                                alt="avatar"
                                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                width={60}
                              />
                              <div className="pt-1">
                                <p className="fw-bold mb-0">{chi?.firstname + ' ' + chi?.lastname}</p>
                                <p className="small text-white">{chi?.message}?</p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-white mb-1">{formatDateTime(chi?.updated_at).split(',')[2]}</p>
                              <span className="badge bg-danger float-end">1</span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 col-xl-7 overflow-scroll chat-scroll">
              <ul className="list-unstyled text-white">
                {chat?.map((chi, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      {chi?.admin_id == null ? (
                        <li className="d-flex gap-4 justify-content-end mb-4">
                          <img
                            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=admin`}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                            width={60}
                          />
                          <div className="card mask-custom">
                            <div
                              className="card-header w-100 d-flex justify-content-between p-3"
                              style={{ borderBottom: '1px solid rgba(255,255,255,.3)' }}
                            >
                              <p className="fw-bold mb-0">Admin</p>
                              <p className="text-light small mb-0">
                                <i className="far fa-clock" /> 12 mins ago
                              </p>
                            </div>
                            <div className="card-body">
                              <p className="mb-0">{chi?.message}</p>
                            </div>
                          </div>
                        </li>
                      ) : (
                        <li className="d-flex justify-content-start mb-4">
                          <div style={{ minWidth: '240px' }} className="card mask-custom ">
                            <div
                              className="card-header w-100 d-flex justify-content-between p-3"
                              style={{ borderBottom: '1px solid rgba(255,255,255,.3)' }}
                            >
                              <p className="fw-bold mb-0">{userId?.firstname}</p>
                              <p className="text-light small mb-0">
                                <i className="far fa-clock" /> 13 mins ago
                              </p>
                            </div>
                            <div className="card-body">
                              <p className="mb-0">S{chi?.message}</p>
                            </div>
                          </div>
                          <img
                            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${userId?.firstname}`}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                            width={60}
                          />
                        </li>
                      )}
                    </React.Fragment>
                  );
                })}

                <div className="mb-3">
                  <textarea
                    className="form-control bg-dark text-white"
                    placeholder="Type your reply..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="button" className="btn btn-light btn-lg btn-rounded float-end" onClick={handleReply}>
                  Send
                  <span role="img" aria-label="send">
                    🚀
                  </span>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ChatSection;
