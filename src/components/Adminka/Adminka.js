import React, { useState } from 'react'
import styles from './Adminka.module.css'
import Tury from '../Tury/Tury'
import Record from '../Record/Record'
import Reviews from '../Reviews/Reviews'
import { useDispatch } from 'react-redux'
import { checkAdminUpdate } from '../../redux/action/getCheckAdmin'

export default function Adminka() {
  const dispatch = useDispatch();
  const [path, setPath] = useState('tury');
  const handleExit = () => {
    dispatch(checkAdminUpdate(false))
  }
  return (
    <div className={styles.adminka}>
      <div className={styles.header}>
        <button onClick={() => setPath('tury')} className={styles.buttonPanel}>Туры</button>
        <button onClick={() => setPath('record')} className={styles.buttonPanel}>Записи</button>
        <button onClick={() => setPath('review')} className={styles.buttonPanel}>Отзывы</button>
        <button onClick={handleExit} className={styles.buttonExit}>Выйти</button>
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
