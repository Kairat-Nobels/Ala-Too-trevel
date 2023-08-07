/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './Footer.module.css';
import fc from '../assets/icons/fc.svg';
import inst from '../assets/icons/inst.svg';
import vk from '../assets/icons/vk.svg';
import wh from '../assets/icons/wh.svg';
import tg from '../assets/icons/tg.svg';
import mail from '../assets/icons/mail.svg';
import { useTranslation } from 'react-i18next';
function Footer()
{
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <div className={styles.address}>
            <h4>{t('footer_T1')}</h4>
            <p>{t('footer_adress')}</p>
          </div>
          <div className={styles.social}>
            <h4>{t('footer_T2')}</h4>
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
            <h4>{t('footer_T3')}</h4>
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
        <span>{t('footer_copyright')}</span>
        <p className={styles.footerCopy}>{t('footer_madeBy')}</p>
      </div>
    </footer>
  );
}

export default Footer;
