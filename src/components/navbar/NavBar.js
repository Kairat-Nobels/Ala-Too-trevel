import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import profile from '../../assets/profile.png'

export default function NavBar()
{
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_inner}>
          <img src={logo} alt="logo" width={100} style={{ borderRadius: '100px' }} />
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/travel" className={({ isActive }) => (isActive ? styles.active : '')}>
                Туры
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : '')}>
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin">
                <img src={profile} alt="icon" width={24} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ width: "100%", height: '5px', backgroundColor: "grey" }}></div>
    </nav>
  );
}