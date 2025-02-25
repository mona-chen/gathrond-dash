import React from 'react';
import UserProfile from '../user/component/UserProfile';
import UserSubscription from '../user/component/UserSubscription';
import UserGames from '../user/component/UserGames';
import SwitchedGames from '../user/component/SwitchedGames';

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
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#user-games"
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
            data-bs-target="#user-trades"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Trades
          </button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
          <p>
            <UserProfile chi={chi} />
          </p>
        </div>
        <div class="tab-pane fade" id="user-trades" role="tabpanel" aria-labelledby="pills-profile-tab1">
          <UserSubscription user={chi} />
        </div>
        <div class="tab-pane fade" id="user-games" role="tabpanel" aria-labelledby="pills-contact-tab1">
          <UserGames user={chi} />
        </div>
        <div class="tab-pane fade" id="switched-games" role="tabpanel" aria-labelledby="pills-contact-tab1">
          <SwitchedGames user={chi} />
        </div>
      </div>
    </div>
  );
}

export default SingleUserModal;
