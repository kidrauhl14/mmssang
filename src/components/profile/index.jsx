import React from 'react';
import './index.scss';

export default function Profile() {
  return (
    <>
      <div className="profile__box">
        <div className="flex__box-lg">
          <div className="profile__image" />
          <div>
            <div className="profile__email"></div>
            <div className="profile__name"></div>
          </div>
        </div>
      </div>
    </>
  );
}
