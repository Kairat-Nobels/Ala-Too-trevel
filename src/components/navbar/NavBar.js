import React from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import profile from '../../assets/profile.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../18n';
import { changeLanguage } from 'i18next';
export default function NavBar()
{
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) =>
  {
    i18n.changeLanguage(language)
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_inner}>
          <img src={logo} alt="logo" width={100} style={{ borderRadius: '100px' }} />
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
                {t("menu_home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/travel" className={({ isActive }) => (isActive ? styles.active : '')}>
                {t("menu_tours")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : '')}>
                {t("menu_about")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin">
                <img src={profile} alt="icon" width={24} />
              </NavLink>
              <select onChange={(e) => changeLanguage(e.target.value)} className={styles.languages}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ width: "100%", height: '5px', backgroundColor: "grey" }}></div>
    </nav>
  );
}