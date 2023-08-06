import React, { useState } from 'react'
import styles from './Admin.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { checkAdminUpdate } from '../../redux/action/getCheckAdmin';
import Adminka from '../../components/Adminka/Adminka';
import { useTranslation } from 'react-i18next';

export default function Admin()
{
  const { t } = useTranslation()

  const dispatch = useDispatch();
  const adminStatus = useSelector(s => s.getCheckAdmin.value)
  const [dataAdmin, setDataAdmin] = useState({
    login: '',
    password: '',
  })
  return (
    <div>
      {
        adminStatus ? <Adminka />
          : <div className={styles.blockInput}>
            <h2>{t('admin_h2')}</h2>
            <input value={dataAdmin.login} onChange={(e) =>
            {
              setDataAdmin(s =>
              {
                return {
                  login: e.target.value,
                  password: s.password
                }
              })
            }} />
            <input value={dataAdmin.password} type='password' onChange={(e) =>
            {
              setDataAdmin(s =>
              {
                return {
                  login: s.login,
                  password: e.target.value
                }
              })
            }} />
            <button className={styles.btn2} onClick={() =>
            {
              if (dataAdmin.login == 'admin' && dataAdmin.password == '1234') {
                dispatch(checkAdminUpdate(true))
                setDataAdmin({
                  login: '',
                  password: ''
                })
              } else {
                alert('Неправиильные данные!')
              }
            }}><span>{t('admin_btn')}</span></button>
          </div>
      }
    </div>
  )
}
