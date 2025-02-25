import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import { sendNotification } from '../../../redux/notificationSlice';

const Notification = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.notifications); // Get Redux state

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSendNotification = async () => {
    if (!title || !message) {
      return alert('Please fill in both fields.');
    }

    const resultAction = await dispatch(sendNotification({ title, message }));

    // Clear fields if the request is successful
    if (sendNotification.fulfilled.match(resultAction)) {
      setTitle('');
      setMessage('');
    }
  };

  return (
    <DashboardLayout>
      <div className="container-fluid content-inner pb-0">
        <div className="row">
          <div className="col-12 col-md-8">
            <h4 className="mb-3">FMC Notifications</h4>

            <div className="input-group flex-column">
              <textarea
                className="form-control"
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  resize: 'none',
                  height: '40px',
                  width: '100%',
                  maxWidth: '450px',
                  borderRadius: '7px',
                  padding: '8px 12px',
                  marginBottom: '15px',
                }}
              ></textarea>
              <textarea
                className="form-control"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  resize: 'none',
                  height: '200px',
                  width: '100%',
                  maxWidth: '450px',
                  borderRadius: '7px',
                }}
              ></textarea>

              <button
                className="btn btn-primary mt-4"
                type="button"
                onClick={handleSendNotification}
                disabled={loading} // Disable button when loading
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  borderRadius: '7px',
                  height: '45px',
                }}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>

              {error && <p className="text-danger mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notification;
