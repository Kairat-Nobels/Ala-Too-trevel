import React, { useEffect, useState } from 'react'
import styles from './Reviews.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_REQ } from '../../redux/reducer/type';
import { getSign } from '../../redux/action/getSign';
import { changeLoader } from '../../redux/action/loader';
import { API_GET_SIGN } from '../../redux/config';
import { useTranslation } from 'react-i18next';

export default function Reviews()
{
  const { t } = useTranslation()
  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, [])
  const dispatch = useDispatch();
  const sign = useSelector(s =>
  {
    const arr = s.sign.filter(el => el.type == 1)
    return arr
  });
  const travel = useSelector(s => s.travel)
  console.log(sign)
  const deleteItem = async (id) =>
  {
    const response = await fetch(API_GET_SIGN + '/' + id, {
      method: "DELETE"
    });
    console.log(response.status + '')
    if (response.status == 200) {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'accept' }
      })
      dispatch(getSign())
    } else {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'error' }
      })
    }
    dispatch(changeLoader(false))
  }
  const [search, setsearch] = useState('')
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div className={styles.headerLeft}>
          <input type="text" placeholder={t('search')} value={search} onChange={(e) => { setsearch(e.target.value) }} />
        </div>
        <h2 style={{ fontWeight: '500', color: '#636363', paddingRight: '1rem' }}>{t('adminka_menuReviews')}</h2>
      </div>
      <div>
        <div className={styles.cardHeader}>
          <p style={{ width: '20px' }}>ID</p>
          <p style={{ width: '200px' }}>{t('home_form_name')}</p>
          <p style={{ width: '150px' }}>{t('tel')}</p>
          <p style={{ width: '100px' }}>{t('tours_date')}</p>
          <p style={{ width: '200px' }}>{t('review')}</p>
        </div>
        <div>
          {
            sign.map((el) =>
            {
              if (el.name.toLowerCase().indexOf(search.toLowerCase()) >= 0) return (
                <div key={el.id}>
                  <div key={el.id} className={styles.cardHeader} style={{ backgroundColor: 'white' }}>
                    <p style={{ width: '20px' }}>{el.id}</p>
                    <p style={{ width: '200px' }}>{el.name}</p>
                    <p style={{ width: '150px' }}>{el.phone}</p>
                    <p style={{ width: '100px' }}>{el.date}</p>
                    <p style={{ width: '600px', textAlign: 'justify' }}>{el.description}</p>
                    <button onClick={() =>
                    {
                      dispatch(changeLoader(true))
                      deleteItem(el.id)
                    }}>{t('delete_btn')}</button>
                  </div>
                  <div style={{ backgroundColor: '#f4f4f4', height: '3px' }}></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
