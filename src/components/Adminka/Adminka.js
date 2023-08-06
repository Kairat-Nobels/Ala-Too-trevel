import React, { useState } from 'react'
import styles from './Adminka.module.css'
import Tury from '../Tury/Tury'
import Record from '../Record/Record'
import Reviews from '../Reviews/Reviews'
import { useDispatch } from 'react-redux'
import { checkAdminUpdate } from '../../redux/action/getCheckAdmin'
import { useTranslation } from 'react-i18next';

export default function Adminka()
{
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const [path, setPath] = useState('tury');
  const handleExit = () =>
  {
    dispatch(checkAdminUpdate(false))
  }
  return (
    <div className={styles.adminka}>
      <div className={styles.header}>
        <button onClick={() => setPath('tury')} className={styles.buttonPanel}>{t('menu_tours')}</button>
        <button onClick={() => setPath('record')} className={styles.buttonPanel}>{t('adminka_menuRecords')}</button>
        <button onClick={() => setPath('review')} className={styles.buttonPanel}>{t('adminka_menuReviews')}</button>
        <button onClick={handleExit} className={styles.buttonExit}>{t('logOut')}</button>
      </div>
      <hr />
      <div className={styles.content}>
        {
          path == 'tury' ? <Tury />
            : path == 'record' ? <Record />
              : <Reviews />
        }
      </div>
    </div>
  )
}
