import React from 'react';
import UserProfile from '../user/component/UserProfile';

function SingleUserModal({ chi }) {
  return (
    <div>
      <ul class="nav nav-pills" data-toggle="slider-tab" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#pills-home1"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Profile
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#pills-profile1"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Subscriptions
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#pills-contact1"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Games
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#pills-contact1"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Switched Games
          </button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
          <p>
            <UserProfile chi={chi} />
          </p>
        </div>
        <div class="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab1">
          <p>tab 2</p>
        </div>
        <div class="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab1">
          <p>tab3</p>
        </div>
      </div>
    </div>
  );
}

export default SingleUserModal;
