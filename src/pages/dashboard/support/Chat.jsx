import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI, setUserMessage } from '../../../redux/dashboard';
import { formatDateTime, formatRelativeDate } from '../../../utils/helper/Helper';
import Empty from '../../../components/common/empty/index';
import { icons } from '../../../assets/icons/icons';

function ChatSection() {
  const dispatch = useDispatch();
  const { all_messages, messages, socket_events } = useSelector((state) => state.dashboard);
  const [replyMessage, setReplyMessage] = useState('');
  let { chat } = messages;

  const handleReply = async () => {
    if (replyMessage.trim() !== '') {
      // Optimistically update local state
      const optimisticMessage = {
        id: Date.now(), // Use a unique identifier, you can generate it differently if needed
        admin_id: 1,
        c_id: 12,
        message: replyMessage.trim(),
        message_type: 0,
        read_status: 0,
        deleted: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      // dispatch(
      //   setUserMessage({
      //     ...messages,
      //     chat: [...messages.chat, optimisticMessage],
      //   }),
      // );

      setReplyMessage('');
      scrollToBottom();

      try {
        // Dispatch an action to send the reply
        await dispatch(
          dashboardAPI.replyMessages({ user_id: userId?.c_id, message: replyMessage.trim(), message_type: 0 }),
        );
      } catch (error) {
        console.error('Error sending message:', error);

        // Revert the optimistic update in case of an error
        dispatch(
          setUserMessage({
            ...messages,
            chat: messages.chat.filter((message) => message.id !== optimisticMessage.id),
          }),
        );
      }
    }
  };

  const scrollToBottom = () => {
    const chat = document.getElementById('chatList');

    chat.scrollIntoView({ behavior: 'smooth' });
  };
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const isSocketEventInMessages = Array.isArray(chat) && chat?.some((d) => d.id === socket_events?.id);

    console.log(isSocketEventInMessages);
    const fetchData = () => {
      dispatch(dashboardAPI.getAllMessages());

      if (userId && messages && socket_events?.c_id === userId?.c_id && !isSocketEventInMessages) {
        dispatch(
          setUserMessage({
            ...messages,
            chat: [...messages?.chat, socket_events],
          }),
        );

        scrollToBottom();
      }
    };

    fetchData();
  }, [socket_events]);

  function fetchMsg() {
    dispatch(
      dashboardAPI.getAMessage({
        user_id: userId?.c_id,
        message: replyMessage,
        message_type: 0,
      }),
    );
  }

  useEffect(() => {
    if (userId !== null) {
      dispatch(dashboardAPI.getAllMessages());
      dispatch(dashboardAPI.readMessage(userId?.c_id));
      fetchMsg();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

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
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=${chi?.firstname}`}
                                alt="avatar"
                                className="rounded-circle avatar d-flex align-self-center me-3 shadow-1-strong"
                                width={60}
                              />
                              <div className="pt-1">
                                <p className="fw-bold mb-0">{chi?.firstname + ' ' + chi?.lastname}</p>
                                <p className="small text-white">{chi?.message}</p>
                              </div>
                            </div>
                            <div className="pt-1">
                              <p className="small text-white mb-1">{formatDateTime(chi?.updated_at).split(',')[2]}</p>

                              {chi.read_status !== 1 && chi?.admin_id == null && (
                                <span className="badge bg-danger float-end">1</span>
                              )}
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="chat-scroll-container col-md-6 col-lg-7 col-xl-7">
              <div className="overflow-scroll chat-scroll">
                <ul className="list-unstyled text-white">
                  {!chat || chat?.length === 0 ? (
                    <Empty title={'No Messages Found'} subTitle={'Kindly click on a chat to see the messages'} />
                  ) : (
                    chat?.map((chi, idx) => {
                      return (
                        <React.Fragment key={idx}>
                          {chi?.admin_id != null ? (
                            <li className={`d-flex gap-4 justify-content-end mb-4 chat-message-item-${idx}`}>
                              <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=admin`}
                                alt="avatar"
                                className="rounded-circle d-flex avatar align-self-start me-3 shadow-1-strong"
                                width={60}
                              />
                              <div className="card mask-custom">
                                <div
                                  st
                                  className="card-header w-100 d-flex justify-content-between p-3"
                                  style={{ borderBottom: '1px solid rgba(255,255,255,.3)', minWidth: '250px' }}
                                >
                                  <p className="fw-bold mb-0">Admin</p>
                                  <p className="text-light small mb-0">
                                    <i className="far fa-clock" /> {formatRelativeDate(chi?.created_at)}
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
                                    <i className="far fa-clock" /> {formatRelativeDate(chi?.created_at)}
                                  </p>
                                </div>
                                <div className="card-body">
                                  <p className="mb-0">{chi?.message}</p>
                                </div>
                              </div>
                              <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=${userId?.firstname}`}
                                alt="avatar"
                                className="rounded-circle d-flex avatar align-self-start ms-3 shadow-1-strong"
                                width={60}
                              />
                            </li>
                          )}
                        </React.Fragment>
                      );
                    })
                  )}
                </ul>

                <div style={{ marginBottom: '80px', backgroundColor: 'red' }} id={'chatList'} className="in"></div>
              </div>

              {chat && chat?.length > 0 && (
                <div className="reply-button">
                  <textarea
                    style={{
                      height: replyMessage.length > 50 ? `${replyMessage?.length}px` : '50px',
                    }}
                    className="form-control bg-dark text-white"
                    placeholder="Type your reply..."
                    value={replyMessage}
                    rows={1}
                    cols={1}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  ></textarea>

                  <div type="button" className="send-btn" onClick={handleReply}>
                    <span role="img" aria-label="send">
                      {icons.send_icon}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default ChatSection;
