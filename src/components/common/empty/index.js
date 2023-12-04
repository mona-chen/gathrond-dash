import React from 'react';
import { icons } from '../../../assets/icons/icons';
import './styles/index.css';

const Empty = ({ title, subTitle }) => {
  return (
    <div className="w-100 d-flex flex-column gap-5 empty-screen">
      <figure className="w-25">{icons.lazy_bun}</figure>

      <span className="w-100 d-flex flex-column gap-2">
        <h6 className="text text-white">{title}</h6>
        <p>{subTitle}</p>
      </span>
    </div>
  );
};

export default Empty;
