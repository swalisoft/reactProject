import React from 'react';
import '../assets/styles/components/Header.scss'

const Heater = () => (
  <header className="header">
    <img className="header__img" src="https://i.imgur.com/RdrXj8S.png" alt="logo de platzi" />
    <div className="header__menu">
      <img src="https://i.imgur.com/A4bnKkj.png" alt="profile" />
      <p>Profile</p>
      <ul>
        <li><a href="/">Account</a></li>
        <li><a href="/login.html">Sign out</a></li>
      </ul>
    </div>
  </header>
);

export default Heater;