import React from 'react';
import styles from './Footer.module.css';
import fc from '../assets/icons/fc.svg';
import inst from '../assets/icons/inst.svg';
import vk from '../assets/icons/vk.svg';
import wh from '../assets/icons/wh.svg';
import tg from '../assets/icons/tg.svg';
import mail from '../assets/icons/mail.svg';

function Footer()
{
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <div className={styles.address}>
            <h4>Адрес</h4>
            <p>Улица Юсупа Абдрахманова, 101/1​ Свердловский район, Бишкек, 720021</p>
          </div>
          <div className={styles.social}>
            <h4>Социальные сети</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/kairat_nobels">
                  <img src={fc} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kairat_nobels">
                  <img src={inst} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kairat_nobels">
                  <img src={vk} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="#">
                  <img src={wh} alt="" />
                  <span>+996 708‒11‒15‒77</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={tg} alt="" />
                  <span>+996 507‒20‒07‒07</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={mail} alt="" />
                  <span>alatootrevel@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <span>
          © Все права защищены. Туристическое агентство Ala-Too Travel
          <br />
          Разработано студентом
        </span>
      </div>
    </footer>
  );
}

export default Footer;
