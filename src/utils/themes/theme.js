import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
  color:  ${({ theme }) => theme.black_white_color};
  background-color: ${({ theme }) => theme.white_grey_fade_bg};
  }
  .black-white-color{
    color:  ${({ theme }) => theme.black_white_color};
  }
  .side-nav-wrap{
    background:  ${({ theme }) => theme.side_nav_bg};
  }
  .white-base-black-bg, .dashboard-layout-headernav-wrap .search-box form .form-group .input-group, .dashboard-layout-headernav-wrap .search-box form .form-group .input-group input {
    background-color:  ${({ theme }) => theme.white_base_black_color};
  }
  .white-base-black-color{
   color:  ${({ theme }) => theme.white_base_black_color};
  } 
  .main-wrap-bg{
    background-color:  ${({ theme }) => theme.main_wrap_bg};
  }
  .transparent-fade-white-bg{
    background-color:  ${({ theme }) => theme.transparent_fade_white_bg};
  }
  .side-nav-logo-text{
    color:  ${({ theme }) => theme.side_nav_logo_text};
  }
  .remove-dark-theme-border, .dashboard-layout-headernav-wrap .search-box form .form-group .input-group{
    border: ${({ theme }) => theme.dark_border_remove} !important;
  }
  .grey-fade-white-bg{
    background-color:  ${({ theme }) => theme.grey_fade_white_bg};
  }
  .white-dull-white-bg{
    background-color:  ${({ theme }) => theme.white_dull_white_bg};
  }
  .light-dull-border-color{
    border-color: ${({ theme }) => theme.light_dull_border_color} !important;
  }
  .white-fade-white-bg{
    background-color:  ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }
  .dashboard-layout-headernav-wrap .profile-avatar-box .avatar-box{
    background-color:  ${({ theme }) => theme.profile_avatar_box};
  }
  .deep-green-white-color{
    color: ${({ theme }) => theme.deep_green_white};
  }

  .overview .overview__wallets .wallets__balance {
    background-color: ${({ theme }) => theme.wallet_cards_bg};
    border-color: ${({ theme }) => theme.wallet_cards_border_color}
  }

  .overview .overview__wallets .wallets__balance .balance__currency span.active {
    background-color: ${({ theme }) => theme.wallet_cards_border_color}
  }

  .overview .overview__wallets .wallets__balance .balance__currency span.active p {
    color: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .overview .overview__wallets .wallets__balance .balance__view-all-wallet div {
    background-color: ${({ theme }) => theme.wallet_cards_button_bg}
  }

  .overview .overview__wallets .wallets__balance .balance__view-all-wallet div p {
    color: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .overview .overview__wallets .wallets__balance .balance__amount h5 {
    color: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .overview .overview__wallets .wallets__statistics .statistics__item {
    background-color: ${({ theme }) => theme.wallet_cards_bg};
    border-color: ${({ theme }) => theme.wallet_cards_border_color}
  }

  .overview .overview__wallets .wallets__statistics .statistics__item figure svg circle {
    fill: ${({ theme }) => theme.wallet_cards_border_color}
  }

  .overview .overview__wallets .wallets__statistics .statistics__item h5 {
    color: ${({ theme }) => theme.wallet_cards_button_color}
  }
  
  button.raven-btn.btn-md.btn-deep-green-light.text-white-light {
    background-color: ${({ theme }) => theme.deep_green_dark}
  }
  button.raven-btn.btn-md.btn-deep-green-light.text-white-dark {
    background-color: ${({ theme }) => theme.deep_green_dark}
  }

  .overview .overview__charts .charts__guage {
    background: ${({ theme }) => theme.white_black_color};
    border-color: ${({ theme }) => theme.atlas_grey_shade}
  }

  .overview .overview__charts .charts__guage .guage__wrap {
    background: ${({ theme }) => theme.atlas_grey_shade};
  }

  .overview .overview__charts .charts__guage .guage__wrap .wrap__filter span.active {
    background-color: ${({ theme }) => theme.wallet_cards_button_bg};
    box-shadow: ${({ theme }) => theme.raven_dark_shadow_lg};
  }

  .overview .overview__charts .charts__guage .guage__wrap .wrap__filter span.active p {
    color: ${({ theme }) => theme.wallet_cards_currency_color}
 
  }

  .overview .overview__charts .charts__guage .guage__stats .stats__item {
    background: ${({ theme }) => theme.atlas_grey_shade};
    border-color: ${({ theme }) => theme.white_fade_white_bg}
  }

  .overview .overview__charts .charts__guage .guage__stats .stats__item .item__name p:last-child {
    color: ${({ theme }) => theme.raven_black_fade}
  }

  .overview .overview__charts .charts__graph {
    background: ${({ theme }) => theme.overview_chart_bg};
    border-color: ${({ theme }) => theme.atlas_grey_shade}
  }
  .overview .overview__charts .charts__graph .graph__no-record {
    background: ${({ theme }) => theme.atlas_grey_shade};
  }

  .overview .overview__charts .charts__graph .graph__top . .top__title  p:first-child {
    color: ${({ theme }) => theme.raven_black_white_shade}
  }

  .overview .overview__charts .charts__graph .graph__no-record .no-record__text h5 {
    color: ${({ theme }) => theme.raven_black_white_shade}
  }

  .overview .overview__top-bar .top-bar__greetings h5 {
    color: ${({ theme }) => theme.black_white_color}
  }

  .wallet .wallet__wallets-wrap {
    background: ${({ theme }) => theme.atlas_grey_shade};
  }

  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap {
    background: ${({ theme }) => theme.atlas_grey_shade};

  }

  .wallet .wallet__wallets-wrap .wallets-wrap__selector {
    background-color: ${({ theme }) => theme.wallet_cards_bg};
  }

  .wallet .wallet__wallets-wrap .wallets-wrap__selector .selector__item.active, .settings .settings__sidebar .sidebar__selector .selector__item.active {
    background: ${({ theme }) => theme.atlas_grey_fade_white_bg}
  }

  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__main .main__buttons span {
    background: ${({ theme }) => theme.atlas_grey_fade_white_bg};
    border-color: ${({ theme }) => theme.atlas_grey_fade_white_bg}
  }



  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__main .main__balances .balances__available h5, .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__main .main__balances .balances__pending h5, .fund-card__title h5, .fund-card__card-no h6 {
    color: ${({ theme }) => theme.text_alt_color}
  }

  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__main .main__balances .balances__available h5, .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__main .main__balances .balances__available h5 {
    color: ${({ theme }) => theme.black_white_color}
  }

  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__transactions .transaction__title h5 {
    color: ${({ theme }) => theme.black_white_color}
  }

  .wallet .wallet__title .title__main h5 {
    color: ${({ theme }) => theme.black_white_color}
  }
  
  .history-wrap .history__content {
    background: ${({ theme }) => theme.atlas_grey_shade};
  }

  .history-wrap .history-wrap__top .	.top__title  h5 {
    color: ${({ theme }) => theme.black_white_color}
  }

  .history-wrap .history-wrap__top .top__wallet-select  {
    background: ${({ theme }) => theme.atlas_grey_shade};
  }

  .history-wrap .history-wrap__top .top__wallet-select .wallet-select__item {
    color: ${({ theme }) => theme.raven_black_fade}
  }

  .table .table-body>*:not(:last-child) td, .table .table-body>*:not(:last-child) .table-data, .table tbody>*:not(:last-child) td, .table tbody>*:not(:last-child) .table-data {
    border-color: ${({ theme }) => theme.white_fade_white_bg}
  }
  
  .history-wrap .history__content .content__main .main__wrap .transaction__table .table__main .main__direction figure svg circle{
    fill: ${({ theme }) => theme.white_fade_white_bg}
  }
  
  .form-group__deep-green-light .input-group {
    background-color: ${({ theme }) => theme.white_fade_white_bg};
    border-color: ${({ theme }) => theme.white_fade_white_bg}
  }

  .form-group__deep-green-light .input-group .form-input {
    background-color: ${({ theme }) => theme.white_fade_white_bg};
  }

  .history-wrap .history__content .content__main--top-bar .top-bar__title h5 {
    color: ${({ theme }) => theme.black_white_color}
  }

  table p.text {
    color: ${({ theme }) => theme.table_text_color}
  }

  table span {
    color: ${({ theme }) => theme.table_text_color}
  }
  
  .table .table-head tr th, .table thead tr th {
    background-color: ${({ theme }) => theme.white_fade_white_bg};
    border-color: ${({ theme }) => theme.wallet_cards_border_color}
  }

  .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__export-btn, .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn, .settings .settings__sidebar .settings__main-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__export-btn, .settings .settings__sidebar .settings__main-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn, .payment-settings__main .main__items {
    background-color: ${({ theme }) => theme.atlas_grey_shade};
    border-color: ${({ theme }) => theme.border_color_333};
  }

  .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__export-btn p, .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn p, .settings .settings__sidebar .settings__main-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__export-btn p, .settings .settings__sidebar .settings__main-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn p, .settings .settings__sidebar .settings__main-wrap .main-wrap__title .title__left h5, .payment-settings__main .main__items .items__grouped span h5, .payment-settings__main .main__items .items__options .options__right .right__item span p, .payment-settings__main .main__items .items__options .options__right .left__item span p, .payment-settings__main .main__items .items__options .options__left .right__item span p, .payment-settings__main .main__items .items__options .options__left .left__item span p {
    color: ${({ theme }) => theme.black_white_color} !important;
  }

  .history-wrap .history__content .content__top-bar .top-bar__filter-export figure svg path{
    stroke: ${({ theme }) => theme.black_white_color}
  }

  .history-wrap .history-wrap__top .top__wallet-select .wallet-select__item.active {
    background-color: ${({ theme }) => theme.white_fade_white_bg};
    color: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .dashboard-layout-headernav-wrap .api-documentation-box .text {
    color: ${({ theme }) => theme.documentation_text_color}
  }
  
  .dashboard-layout-headernav-wrap .api-documentation-box path{
    stroke: ${({ theme }) => theme.documentation_text_color}
  }

  .wallet .wallet__title .title__swap-btn {
    background-color: ${({ theme }) => theme.white_fade_white_bg};
  }

  .wallet .wallet__title .title__swap-btn p{
    color: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .wallet .wallet__title .title__swap-btn figure svg path{
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }
  
  .modal-parent-wrap .raven-modal-content-wrap {
    background-color: ${({ theme }) => theme.atlas_grey_shade};
  }

  .modal-parent-wrap .raven-modal-content-wrap .button-wrap {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .form-group__deep-green-light .input-submit {
    background-color: ${({ theme }) => theme.deep_green_dark};
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__title span h5 {
    color: ${({ theme }) => theme.black_white_color}
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__title span p {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .form-group__deep-green-light .form-label {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__form .form__balance {
    color: ${({ theme }) => theme.deep_green_dark};
  }

  .form-group__deep-green-light .react-select-class>*:nth-child(3), .bank-box-overview__bottom-contain .top-transacting__users .top-users span:first-child {
    background-color: ${({ theme }) =>
			theme.atlas_grey_fade_white_bg} !important;
    border-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__form .form__grouped .grouped__swap-icon {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};

  }

  .form-group__deep-green-light .form-input {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
    border-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__output .output__rate {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__output .output__rate, .bank-box-overview__bottom-contain .top-transacting__users .top-users span:first-child p {
    color: ${({ theme }) => theme.wallet_cards_currency_color};
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__output .output__value h5, .basic-details-settings__prices--title {
    color: ${({ theme }) => theme.black_white_color}
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__output {
    border-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};

  }

  .swap-modal-wrap .swap-modal-wrap__content .content__output .output__value p {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .modal-parent-wrap .raven-modal-content-wrap .close-box figure svg path {
    stroke: ${({ theme }) => theme.black_white_color};
  }

  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__main {
    border-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__transactions .transaction__table .table__main .main__direction figure svg circle {
    fill: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .dashboard-layout-wrap .main-body-wrap .header-wrap {
    zIndex: ${({ theme }) => theme.zIndex_header};
  }

  .swap-modal-wrap .swap-modal-wrap__content .content__form .form__grouped .grouped__swap-icon figure svg path {
    stroke: ${({ theme }) => theme.black_white_color}
  }
  body .css-1nmdiq5-menu, .css-1n6sfyn-MenuList, .css-19gyxg0-option {
    background-color: ${({ theme }) => theme.grey_fade_white_bg};

  }
  
  .css-1n6sfyn-MenuList {
    border-radius: 0.8rem;
  }
  
  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__main .main__buttons span figure svg circle {
    fill: ${({ theme }) => theme.deep_green_dark}
  }

  .fund-modal-wrap .fund-modal-wrap__content .content__main .main__account-details, .fund-modal-wrap .fund-modal-wrap__content .content__main .main__account-details .account-details__item:not(:last-child) {
    border-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__drop-down--open, .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__drop-down {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__switch span p {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .history-wrap .history__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__custom-date-range h5 {
    color: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .form-group__deep-green-light .wrap input {
    background-color: ${({ theme }) => theme.wallet_cards_button_color};
  }

  .collections-wrap .collections__content, .topup-modal-wrap__transfer {
    background: ${({ theme }) => theme.atlas_grey_shade};
  }

  .input-group .form-input {
    color: ${({ theme }) => theme.wallet_cards_button_color};
    caret-color: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__export-btn, .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};

  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__drop-down {    
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__switch span p {
    color: ${({ theme }) => theme.modal_test_shade_color}

  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__custom-date-range h5 {
    color: ${({ theme }) => theme.deep_green_dark};
  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__switch span.active {
    border-color: ${({ theme }) => theme.deep_green_dark};
  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__switch, .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__custom-date-range .custom-date-range__grouped-form, .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__drop-down .drop-down__custom-date-range .drop-down__action-btns {    
    border-color: ${({ theme }) => theme.atlas_grey_shade};
  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__export-btn p, .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn p {
    color: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__export-btn figure svg, .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn figure svg path {
    stroke: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__export-btn figure, .collections-wrap .collections__content .content__top-bar .top-bar__filter-export .filter-export__filter-btn figure svg.path {
    stroke: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .onboarding .onboarding__verification-steps, .onboarding .onboarding__learn-more .learn-more__content .content__documentation, .onboarding .onboarding__content-wrap .mobile-onboarding-steps {
    background-color: ${({ theme }) => theme.atlas_grey_shade};
  }
  .verification {
    background-color: ${({ theme }) => theme.wallet_cards_bg}
  }

  .verification .verification__header {
    background-color: ${({ theme }) => theme.atlas_grey_shade}
  }

  .verification .verification__header .cursor-pointer svg path {
    stroke: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .verification .verification__footer .footer__left p {
    color: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .verification-wrap, .cac-verification, .business-info-verification-wrap {
    background-color: ${({ theme }) => theme.atlas_grey_shade}
  }

  .cac-verification {
    border-radius: ${({ theme }) => theme.border_radius}
  }

  .verification-wrap .verification-wrap__title .title__big, .verification-wrap .verification-wrap__content .content__instruction-title .text, .verification-wrap .verification-wrap__content .content__youtube .text, .cac-verification .cac-verification__navbar .navbar__item.active p, .cac-verification .cac-verification__content .content__title p {
    color: ${({ theme }) => theme.wallet_cards_button_color}

  }
  
  .verification-wrap .verification-wrap__title .title__sub, .cac-verification .cac-verification__content .content__business-category-select p {
    color: ${({ theme }) => theme.modal_test_shade_color} 
  }

  .verification-wrap .verification-wrap__content .content__main .main__text, .cac-verification .cac-verification__navbar .navbar__item p, .form-group__purple-light .form-label{
    color: ${({ theme }) => theme.modal_test_shade_color} ;
  }

  .verification-wrap .verification-wrap__content, .verification-wrap .verification-wrap__content .content__instruction-title,.verification-wrap .verification-wrap__content .content__youtube, .form-group__purple-light .form-input, .cac-verification .cac-verification__navbar {
    border-color: ${({ theme }) => theme.wallet_cards_button_bg}
  }
  
 

  .form-group__purple-light .form-input {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
    color: ${({ theme }) => theme.wallet_cards_button_color};
    caret-color: ${({ theme }) => theme.wallet_cards_button_color}
  }

  .cac-verification .cac-verification__content .content__business-category-select .business-category-select__item:not(.active) {
    border-color: ${({ theme }) => theme.wallet_cards_button_bg}
  }

  .cac-verification .cac-verification__navbar .navbar__item.active {
    border-color: ${({ theme }) => theme.deep_green_dark}
  }
  .form-group__deep-green-light .react-select-class>:nth-child(3)>:first-child>:first-child {
    color: ${({ theme }) => theme.select_color} !important;
  }

  .dashboard-layout-wrap::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main_wrap_bg};
    z-index: -1;
  }
  
  .no-record {
    background-color: ${({ theme }) => theme.wallet_cards_border_color}
  }
  
  .no-record .no-record__text h5  {
    color: ${({ theme }) => theme.documentation_text_color}
  }

  .no-record .no-record__text p  {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }
  .walletslide__wallet, .verification-settings__main .main__items  {
    background: ${({ theme }) => theme.wallet_cards_bg};
    border-color: ${({ theme }) => theme.border_color_333}

  }
  .walletslide__wallet.active {
    background: ${({ theme }) => theme.wallet_cards_bg};
    ${({ theme }) => theme.raven_dark_shadow_lg};
    border-color: ${({ theme }) => theme.wallet_cards_currency_color}

  }
  .walletslide__wallet--available-balance span {
    color: ${({ theme }) => theme.black_white_color}
  }

  .walletslide__wallet--available-balance p, .smartfilter .top-bar__filter-export .filter-export__drop-down .drop-down__item span p {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .walletslide__wallet--pending-balance, .business-profile__details div span small, .business-profile__owner span p {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }
  .walletslide__wallet--pending-balance b {
    color: ${({ theme }) => theme.black_white_color}
  }
  .overview .overview__charts .charts__graph .graph__top .top__filter, .verification-settings__main .main__items {
    border-color: ${({ theme }) => theme.border_color_333}
  }
  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .wallet_slide-wrap.show {
    border-color: ${({ theme }) => theme.border_color_333}
  }
  
  .walletslide__wallet--buttons .buttons__withdraw {
    background-color: ${({ theme }) => theme.wallet_cards_button_bg};
    color: ${({ theme }) => theme.dark_mode_white}
  }

  .smartfilter .top-bar__filter-export .filter-export__export-btn, .smartfilter .top-bar__filter-export .filter-export__filter-btn, .container-page-wrap, .container-page-wrap .container-page {
    background-color: ${({ theme }) => theme.atlas_grey_fade_white_bg};
  }

  .smartfilter .top-bar__filter-export .filter-export__export-btn, .smartfilter .top-bar__filter-export .filter-export__filter-btn p {
    color: ${({ theme }) => theme.dark_mode_white}
  }

  .smartfilter .top-bar__filter-export .filter-export__export-btn figure svg, .smartfilter .top-bar__filter-export .filter-export__filter-btn figure svg path {
    stroke: ${({ theme }) => theme.dark_mode_white}
  }

  .transaction__table, .verification-settings {
    border-color: ${({ theme }) => theme.border_color_333}
  }
  .wallet .wallet__wallets-wrap .wallets-wrap__balances-wrap .balances-wrap__transactions {
    border-color: ${({ theme }) => theme.border_color_333}
  }
  .pagination__page-count {
    color: ${({ theme }) => theme.table_text_color}
  }

  .pagination__button svg path {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .topup-modal-wrap__transfe, .settings .settings__sidebar .settings__main-wrap .history__content {
    background: ${({ theme }) => theme.atlas_grey_shade}
  }
  .topup-modal-wrap__others {
    background: ${({ theme }) => theme.atlas_grey_shade}
  }

  .topup-modal-wrap__transfer .details__title span p:first-child {
    color: ${({ theme }) => theme.faint_white}
  }
  .topup-modal-wrap__transfer .details__title span p:last-child {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .topup-modal-wrap__transfer .details__bank-account span p:first-child {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .topup-modal-wrap__transfer .details__bank-account span h5 {
    color: ${({ theme }) => theme.faint_white}
  }

  .topup-modal-wrap__transfer .details__bank-account button {
    background-color: ${({ theme }) => theme.border_color_333}
  }

  .topup-modal-wrap__others .details__title span p:first-child, .bankbox-user-view__left--title h6, .bankbox-user-view__right--title h6, .bankbox-user-view__right--devices-contain .device__business h6 {
    color: ${({ theme }) => theme.faint_white}
  }

  .topup-modal-wrap__others .details__title span p:last-child, .bankbox-user-view__left--date-location .item p, .bankbox-user-view__left--user-details .details-row .details p, .bankbox-user-view__right--devices-contain .device__owner--trx-volume h6 {
    color: ${({ theme }) => theme.modal_test_shade_color}
  }

  .topup-modal-wrap__others {
    border-color: ${({ theme }) => theme.border_color_333}

  }

  .topup-modal-wrap__others .details__title:not(:last-child), .bankbox-user-view__left--date-location, .bankbox-user-view__left--user-details .details-row .details, .bankbox-user-view__right--title, .bankbox-user-view__left {
    border-color: ${({ theme }) => theme.border_color_333}
  }

  .topup-modal-wrap__transfer {
    border-color: ${({ theme }) => theme.border_color_333}
  }

  .topup-modal-wrap__transfer .details__title, .container-page-wrap .container-page .content, .kyc-dashboard-wrapper__form-wrap {
    border-color: ${({ theme }) => theme.border_color_333}
  }

  .topup-modal-wrap__transfer .details__bank-account {
    border-color: ${({ theme }) => theme.border_color_333}  
  }

  .no-record-mascot, .bankbox-user-view__right--devices-contain .device {
    border-color: ${({ theme }) => theme.border_color_333};
    background-color: ${({ theme }) => theme.wallet_cards_bg}  
  }

  .no-record-mascot .no-record-mascot__bottom, .settings .settings__sidebar, .bankbox-user-view, .bankbox-user-view__right--devices-contain .device__owner {
    background-color: ${({ theme }) => theme.atlas_grey_shade}  
  }

  .history-wrap .history-wrap__top .currency-selector,  .form-group__green-light .form-input, .trx-modal-main-wrapper .trx-modal__button-wrap button {
    background-color: ${({ theme }) => theme.border_color_333}
  }

  .trx-modal-main-wrapper .details-modal-wrap__title, .kyc-dashboard-wrapper__title h5 {
    color: ${({ theme }) => theme.dark_mode_white}
  }

  .trx-modal-main-wrapper .details-modal-wrap__content .content__main .main__account-details.not-collapsed, .trx-modal-main-wrapper .details-modal-wrap__content .content__main .main__account-details .account-details__item:not(:last-child),.trx-modal-main-wrapper .details-modal-wrap .meta_preview_wrapper.expanded, .code-editor-wrap .copy-button ,.wallet .wallet__bills-wrap .bills-wrap__payments-wrap, .wallet .wallet__bills-wrap .bills-wrap__payments-wrap .payments-wrap__main .transaction__table{
    border-color: ${({ theme }) => theme.border_color_333};
  }
  
  .code-editor-wrap .copy-button figure svg path, .trx-modal-main-wrapper .trx-modal__button-wrap button figure svg path {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .code-editor-wrap .copy-button p, .wallet .wallet__bills-wrap .bills-wrap__selector .selector__item.active p, .settings .settings__sidebar .sidebar__selector .selector__item.active p {
    color: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .transaction-status.successful, .transaction-status.refunded, .kyc-dashboard-wrapper__form-wrap .grouped-input .grouped-input__item input, .transaction-status.pending, .settings_role.admin, .settings_role.manager, .transaction-status.failed, .transaction-status.temporal, .wallet .wallet__bills-wrap .bills-wrap__selector .selector__item.active, .verification-settings__main .main__items .items__status.verified, .verification-settings__main .main__items .items__status.failed, .onboarding .onboarding__verification-steps .verification-steps__item .item__content span.verified, .onboarding .onboarding__verification-steps .verification-steps__item .item__content span, .verification-settings__main .main__items .items__status.pending,.settings_role.operation, .overview .overview__charts .charts__guage .guage__stats .stats__item.green .item__count, .overview .overview__charts .charts__guage .guage__stats .stats__item.orange .item__count, .overview .overview__charts .charts__guage .guage__stats .stats__item.red .item__count, .mobile-onboarding-steps__items .items__content span, .mobile-onboarding-steps__items .items__content span.verified, .transaction-status.card-type.virtual, .bankbox-status.activated {
    background-color: ${({ theme }) => theme.border_color_333}
  }
  
  .wallet .wallet__bills-wrap, .wallet .wallet__bills-wrap .bills-wrap__payments-wrap {
    background-color: ${({ theme }) => theme.atlas_grey_shade}  
  }

  .wallet .wallet__bills-wrap .bills-wrap__selector {
    background-color: ${({ theme }) => theme.wallet_cards_bg};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .wallet .wallet__bills-wrap .bills-wrap__payments-wrap .payments-wrap__title .title__left h5, .business-profile__details div span p, .verification-settings__main .main__items .items__grouped span h5 {
    color: ${({ theme }) => theme.dark_mode_white}
  }

  .wallet .wallet__bills-wrap .bills-wrap__payments-wrap .payments-wrap__main .transaction__table .table__main .main__reference-wrap figure svg circle, .onboarding .onboarding__verification-steps .verification-steps__item .item__step-rail figure svg circle, .mobile-onboarding-steps__items .items__rails figure svg circle {
    fill: ${({ theme }) => theme.border_color_333}
  }

  .wallet .wallet__bills-wrap .bills-wrap__payments-wrap .payments-wrap__main .transaction__table .table__main .main__reference-wrap figure svg path {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .checkmark__wrapper figure svg circle {
    fill: ${({ theme }) => theme.border_color_333}
  }

  .checkmark__wrapper figure svg path {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .checkmark__wrapper figure figure svg circle {
    fill: ${({ theme }) => theme.border_color_333}
  }

  .checkmark__wrapper figure figure svg path {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  html body .history__content .content__main .main__wrap .transaction__table .table__main .account_name--transfer .account_name__span:first-child, .form-group__green-light .input-group {
    background-color: ${({ theme }) => theme.border_color_333} !important;
  }

  .history__content .content__main .main__wrap .transaction__table .table__main .account_name--transfer .account_name__span:first-child p:first-child {
    color: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .container-page-wrap .container-page .container__bottom {
    background-color: ${({ theme }) => theme.atlas_grey_shade} ;
  }

  .container-page-wrap .container-page {
    background-color: ${({ theme }) => theme.wallet_cards_bg} ;
  }

  .kyc-dashboard-wrapper, .settings .settings__sidebar .sidebar__selector, .settings .settings__sidebar .settings__main-wrap {
    background: ${({ theme }) => theme.wallet_cards_bg}

  }

  .form-group__green-light .form-input, .form-group__green-light .input-group, .kyc-dashboard-wrapper__form-wrap .grouped-input .grouped-input__item input, .settings .settings__sidebar .settings__main-wrap, body .mobile-table-card-wrapper-box {
    border-color: ${({ theme }) => theme.border_color_333};
  }

  .react-loading-skeleton {
    background: ${({ theme }) => theme.skeleton_base_background};
  }
  .react-loading-skeleton::after {
    background: ${({ theme }) => theme.skeleton_base_background};
    background-image: ${({ theme }) => theme.skeleton_highlight_background};
  }

  .verification-settings__main .main__items .items__grouped figure svg circle {
    fill: ${({ theme }) => theme.wallet_cards_border_color};
    stroke: ${({ theme }) => theme.wallet_cards_border_color}
  }

  .verification-settings__main .main__items .items__grouped figure svg path:nth-child(2) {
    fill: ${({ theme }) => theme.deep_green_dark};
  }

  .verification-settings__main .main__items .items__grouped figure svg g path:first-child {
    fill: ${({ theme }) => theme.deep_green_dark}
  }

  .verification-settings__main .main__items .items__grouped figure svg g circle:last-child {
    stroke: ${({ theme }) => theme.border_color_333}
  }

  .container-page-wrap .container-page .content, .bank-box-overview__stats-wrapper--stats, .bank-box-overview__bottom-contain .charts__graph, .bank-box-overview__bottom-contain .top-transacting {
    background-color: ${({ theme }) => theme.atlas_grey_shade}
  }

  .mobile-table-card-wrapper-box .amount-box .amount {
    color: ${({ theme }) => theme.wallet_cards_currency_color} !important
  }
  
  body .dashboard-layout-headernav-wrap .mobile-hamburger p {
    background-color: ${({ theme }) => theme.dark_mode_white};
    color: ${({ theme }) => theme.dark_mode_white} 
  }

  .export-modal__export-as--selector-wrap .selector-wrap__item {
    background-color: ${({ theme }) => theme.border_color_333};
    border-color: ${({ theme }) => theme.border_color_333};
  }

  .export-modal__export-as--selector-wrap .selector-wrap__item.selected figure {
    border-radius: 50rem;
    width: fit-content;
    height: fit-content;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .export-modal__export-as--selector-wrap .selector-wrap__item figure svg circle {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color};
  }

  .export-modal__export-as--selector-wrap .selector-wrap__item.selected {
    background-color: ${({ theme }) => theme.atlas_deep_green}
  }

  .export-modal__days-selector .days-selector__item-wrap .days-selector__item {
    background-color: ${({ theme }) => theme.border_color_333};
  }

  .topup-modal-wrap__others .details__title figure svg rect, .payment-settings__main .main__items .items__grouped figure svg circle  {
    fill: ${({ theme }) => theme.border_color_333};
    stroke: ${({ theme }) => theme.border_color_333};
  }


  .topup-modal-wrap__others .details__title figure svg path:nth-child(2), .payment-settings__main .main__items .items__grouped figure svg g path:nth-child(1) {
    fill: ${({ theme }) => theme.deep_green_dark}
  }

  .smartfilter .top-bar__filter-export .filter-export__drop-down, .smartfilter .top-bar__filter-export .filter-export__drop-down .drop-down__item, body .smartfilter .top-bar__filter-export .filter-export__drop-down .dropdown__apply-filter-btn {
    background-color: ${({ theme }) => theme.border_color_333};
  }

  .smartfilter .top-bar__filter-export .filter-export__drop-down .dropdown__header p, .mobile-onboarding-steps__items .items__content h5, .bank-box-overview__bottom-contain .top-transacting__title h6 {
    color: ${({ theme }) => theme.faint_white}
  }
  
  .smartfilter .top-bar__filter-export .filter-export__drop-down .drop-down__item.active span figure svg circle {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .smartfilter .top-bar__filter-export .filter-export__drop-down, .smartfilter .top-bar__filter-export .filter-export__drop-down .dropdown__date-title, .smartfilter .top-bar__filter-export .filter-export__drop-down .dropdown__header, .smartfilter .top-bar__filter-export .filter-export__drop-down .drop-down__item span {
    border-color: ${({ theme }) => theme.border_alt}
  }

  .webhook-settings, .payment-settings, .payment-settings__main .main__items .items__options .options__right .right__item, .payment-settings__main .main__items .items__options .options__right .left__item, .payment-settings__main .main__items .items__options .options__left .right__item, .payment-settings__main .main__items .items__options .options__left .left__item {
    border-color: ${({ theme }) => theme.transparent_fade_white_bg} 
  }
  .history-wrap .history-wrap__top .currency-selector .currency__dropdown {
    background-color: ${({ theme }) => theme.border_color_333};
  }
  .currency .currency__dropdown .dropdown__select-item:not(:last-child), .single-card-container .single-card__content .content__right .right__content-table .content-table__row:not(:last-child) p,.single-card-container .single-card__content .content__right .right__content-table {
    border-color: ${({ theme }) => theme.border_alt}
  }
  .container-page-mode__content, .form-group__black-light .input-group, .form-group__black-light .input-group__phone .form-input, .form-group__black-light .form-input {
    background-color: ${({ theme }) => theme.border_color_333} !important;
  }
  
  .action_bar__info,.action_bar__warning, .transfer-mode .container-page-header .container-page-header__steppers .step span.active {
    background-color: ${({ theme }) => theme.border_alt} !important;
  }

  .action_bar__info .text, .action_bar__warning .text, .form-group__black-light .form-label, .transfer-mode .container-page-header .container-page-header__steppers .step.active p, .mobile-bills-wrap .mobile-bills-wrap__item .item__content h5, .create-card__card-type .create-card__type-unit--title h6, .create-card__title h5 {
    color: ${({ theme }) => theme.faint_white}
  }

  .history__content .content__main .main__wrap .transaction__table .table__main .account_name span,  .bill-purchase .form .select-network-provider_wrap .select-network-provider .select-network-provider__item.active {
    background-color: ${({ theme }) => theme.border_alt} !important;
  }

  .history__content .content__main .main__wrap .transaction__table .table__main .account_name span p, .transfer-mode .container-page-header .container-page-header__steppers .step span p, .cac-verification .cac-verification__content .content__form .form__note p, .single-card-container .single-card__toggle .toggle__item.false p {
    color: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .business-profile, .business-profile__details, .form-group__black-light .input-group, .form-group__black-light .form-input, .transfer-mode .container-page-header, .bill-purchase .form .select-network-provider_wrap .select-network-provider .select-network-provider__item.active, .transfer-mode .container-page-footer {
    border-color: ${({ theme }) => theme.border_color_333}
  }

  .form-group__black-light .form-input, .container-page-mode__top .top__left-wrap span h5, .cac-verification .cac-verification__content .content__title h5 {
    caret-color: ${({ theme }) => theme.faint_white};
    color: ${({ theme }) => theme.faint_white};
  }

  .preview-payment-view, .new-transfer .mode-items-wrap, .mobile-bills-wrap , .cac-verification .cac-verification__content .content__form .form__note, .create-card__stepper{
    background-color: ${({ theme }) => theme.border_color_333} ;
  }

  .preview-payment-view-main {
    ${({ theme }) => theme.dark_mode_shadow}
  }

  .preview-payment-view .preview-payment-view__header h5 p, .preview-payment-view-main .preview-payment-view__table .table__item p:last-child, .new-transfer__mode .mode__title, .new-transfer__mode .mode__items .items__content p, .preview-transfer .preview-transfer-main .preview-transfer__header h5, .single-card-container .single-card__content .content__right .right__title h5, .bankbox-overview__right--title h6, .bankbox-modals__right--content .basic-content__title h5, .bank-box-overview__stats-wrapper--stats .bottom h6 {
    color: ${({ theme }) => theme.faint_white};
  }

  .preview-payment-view .preview-payment-view__header small, .preview-payment-view-main .preview-payment-view__table .table__item p:first-child, .new-transfer__mode .mode__items .items__content small, .reusable-verified-pending-wrap .text, .verification .verification__header .logo-text-box .text, .bankbox-overview__right--title p, .bankbox-modals__right--content .basic-content__input-contain--brand-color .selector-title p, .bankbox-modals__left--stepper .stepper-item h6, .bank-box-overview__bottom-contain .top-transacting__users .top-users .name-box .name {
    color: ${({ theme }) => theme.text_alt_color};
  }

  .transfer-mode .container-page-header .container-page-header__back-btn figure svg path {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
  }

  .new-transfer__mode .mode__items, .single-card-container .history__content, .single-card-container{
    background-color: ${({ theme }) => theme.atlas_grey_shade};
  }

  .more-wrap.show-drop {
    background-color: ${({ theme }) => theme.border_color_333};
  }

  .more-wrap .more_item .profile_drop_img {
    background-color: ${({ theme }) => theme.border_alt} !important;
  }
  
  .more-wrap .more_item .profile_drop_img svg circle, .bank-box-overview__stats-wrapper--stats .top figure svg circle {
    fill: ${({ theme }) => theme.border_alt} !important;
   }
   .more-wrap .more_item .legacy svg path {
    stroke: ${({ theme }) => theme.faint_white} !important;
   }

   .more-wrap .more_item:not(:last-child) {
    border-color: ${({ theme }) => theme.border_alt}
   }

   .mobile-table-card-wrapper-box .avatar-img-box .img-box-debit, .mobile-table-card-wrapper-box .avatar-img-box .img-box-cre-deb, .omnisearch {
    background-color: ${({ theme }) => theme.border_color_333};
   }

   .overview .overview__charts .charts__graph .graph__top .top__filter span .next_cursor svg path {
    stroke: ${({ theme }) => theme.wallet_cards_currency_color}
   }
   
   .atlas-payment-container .form .recepient-box .preview-box .box, .mobile-bills-wrap .mobile-bills-wrap__item, .bank-box-overview__bottom-contain .top-transacting__users .top-users {
    background-color: ${({ theme }) => theme.dark_mode_black};
    border: ${({ theme }) => theme.dark_mode_black};
   }

   .atlas-payment-container .form .recepient-box .preview-box .box .raven-name, .mobile-bills-wrap .mobile-bills-wrap__item .item__content p, .container-page-mode__top .top__left-wrap span p, .preview-transfer .preview-transfer-main .preview-transfer__header small, .preview-transfer .preview-transfer-main .preview-transfer__table .table__item p, .single-card-container .single-card__content .content__right .right__title small, .single-card-container .single-card__content .content__right .right__content-table .content-table__row p {
    color: ${({ theme }) => theme.table_text_color}
   }
  .mobile-bills-wrap .mobile-bills-wrap__item figure svg circle {
    fill:${({ theme }) => theme.border_color_333};
  }

  .mobile-bills-wrap .mobile-bills-wrap__item figure svg path:last-child, .mobile-bills-wrap .mobile-bills-wrap__item figure svg path:nth-child(2) {
    fill:${({ theme }) => theme.deep_green_dark};
  }

  .preview-transfer, .single-card-container .single-card__content .content__right .right__content-table {
    background-color: ${({ theme }) => theme.dark_mode_black};
  }

  .preview-transfer .preview-transfer-main {
    ${({ theme }) => theme.dark_mode_shadow}
  }

 body .intercom-lightweight-app-launcher, body .intercom-1kkalmo, .intercom-1kkalmo {
    background: ${({ theme }) => theme.livechat} !important
  }
  
  .cac-verification .cac-verification__navbar .navbar__item.complete span {
    background-color: ${({ theme }) => theme.border_color_333};
    border-color: ${({ theme }) => theme.border_color_333};
  }

  .cac-verification .cac-verification__navbar .navbar__item span, .overview .overview__charts .charts__guage .guage__wrap .guage-drop-down-wrap__main .guage-drop-active, .create-card__card-type .create-card__type-unit {
    background-color: ${({ theme }) => theme.border_color_333};
    border-color: ${({ theme }) => theme.border_color_333};
  }

  .cac-verification .cac-verification__navbar .navbar__item.active span,   .cac-verification .cac-verification__navbar .navbar__item.active span p {
    border-color: ${({ theme }) => theme.wallet_cards_currency_color};
    color: ${({ theme }) => theme.wallet_cards_currency_color};

  }

  .overview .overview__charts .charts__guage .guage__wrap .guage-drop-down-wrap__main, .history__content .content__main .main__wrap .transaction__table .table__main .more-wrap.show-drop, .create-card__card-type .create-card__type-unit.active, .bankbox-overview__right {
    background-color: ${({ theme }) => theme.dark_mode_black};
  }

  .single-card-container .single-card__content .content__left figure, .bankbox-overview, .bankbox-modals__left {
    background: ${({ theme }) => theme.dark_mode_gradient}
  }

  .single-card-container  {
    border-radius: 12px;
  } 

  .container-page-mode__content, .form-group__black-light .input-group, .form-group__black-light .input-group__phone .form-input, .form-group__black-light .form-input {
    background-color : ${({ theme }) => theme.unset} !important;
  }

  .bankbox-assign-btn {
    
  }
  
  `;

export const lightTheme = {
	black_white_color: '#1b1b1b',
	white_black_color: '#ffffff',
	side_nav_bg: 'linear-gradient(180deg, #014345 0%, #012223 100%), #014345',
	white_base_black_color: '#ffffff',
	main_wrap_bg: '#F9F9F9',
	side_nav_logo_text: '#9be5c9',
	transparent_fade_white_bg: 'transparent',
	grey_fade_white_bg: '#f7f8f7',
	white_dull_white_bg: '#ffffff',
	light_dull_border_color: '#e5e6e6',
	profile_avatar_box: '#e8fff6',
	deep_green_white: '#014345',
	zIndex_header: 2,
	select_color: '#000000',
	skeleton_base_background: '#ebebeb',
	livechat: '#014345',
	skeleton_highlight_background:
		'linear-gradient( 90deg, #ebebeb, #f5f5f5, #ebebeb)',
};
//  background-blend-mode: multiply;
export const darkTheme = {
	black_white_color: '#ffffff',
	white_black_color: '#020202',
	side_nav_bg: '#1b1b1b',
	border_radius: '1.6rem',
	white_base_black_color: '#1b1b1b',
	main_wrap_bg: '#020202',
	side_nav_logo_text: '#ffffff',
	transparent_fade_white_bg: '#333333',
	dark_border_remove: 'none',
	white_dull_white_bg: '#515151',
	grey_fade_white_bg: '#333333',
	white_fade_white_bg: '#333333',
	light_dull_border_color: '#333333',
	profile_avatar_box: '#515151',
	deep_green_white: '#ffffff',
	wallet_cards_bg: '#020202',
	wallet_cards_border_color: '#1B1B1B',
	wallet_cards_currency_color: '#9BE5C9',
	wallet_cards_button_bg: '#333333',
	wallet_cards_button_color: 'white',
	deep_green_dark: '#0B8376',
	border_color_333: '#333',
	raven_black_fade: '#8B8B8B',
	raven_black_white_shade: '#E3E3E3',
	text_alt_color: '#D1D1D1',
	raven_dark_shadow_lg:
		'box-shadow: 0px 24px 48px -8px rgba(51, 51, 51, 0.04), 0px 48px 64px -36px rgba(51, 51, 51, 0.08);  ',
	table_text_color: '#CCCCCC',
	dark_mode_shadow:
		' box-shadow: 0px -3px 48px -8px #272727, 0px 4px 23px 12px #272727;',
	modal_test_shade_color: '#ACACAC',
	documentation_text_color: '#DBD6FC',
	atlas_grey_shade: '#1b1b1b',
	atlas_grey_fade_white_bg: '#333333',
	dark_mode_white: 'white',
	faint_white: '#F7F7F7',
	overview_chart_bg: '#1B1B1B',
	skeleton_base_background: '#252525',
	atlas_deep_green: '#014345',
	border_alt: '#515151',
	dark_mode_black: 'black',
	livechat: '#0B8376',
	dark_mode_gradient: 'linear-gradient(rgb(26, 26, 26) 0%, #000000 100%)',
	skeleton_highlight_background:
		'linear-gradient( 90deg, #252525, #0B8376, #252525)',

	unset: 'unset',
	none: 'none',
};

// .form-group__deep-green-light .react-select-class > :nth-child(3) {
//   background-color: ${({ theme }) => theme.white_dull_white_bg};
// }
