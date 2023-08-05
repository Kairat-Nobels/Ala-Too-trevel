import React from 'react'
import styles from './Record.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { API_GET_SIGN } from '../../redux/config';
import { CHECK_REQ } from '../../redux/reducer/type';
import { getTravel } from '../../redux/action/getTravel';
import { getSign } from '../../redux/action/getSign';
import { changeLoader } from '../../redux/action/loader';
import { useState } from 'react';

export default function Record()
{
  const dispatch = useDispatch();
  const sign = useSelector(s =>
  {
    const arr = s.sign.filter(el => el.type == 2)
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
          <input type="text" value={search} onChange={(e) => { setsearch(e.target.value) }} />
        </div>
        <h2 style={{ fontWeight: '500', color: '#636363', paddingRight: '1rem' }}>Записи</h2>
      </div>
      <div>
        <div className={styles.cardHeader}>
          <p style={{ width: '20px' }}>ID</p>
          <p style={{ width: '200px' }}>Имя</p>
          <p style={{ width: '150px' }}>Телефон</p>
          <p style={{ width: '100px' }}>Дата</p>
          <p style={{ width: '200px' }}>Тур</p>
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
                    {travel.find((e) => e.id == el.travel) ?
                      <p style={{ width: '400px' }}>{travel.find((e) => e.id == el.travel).name}</p>
                      : <p style={{ width: '400px' }}>Тур удален</p>
                    }
                    <button onClick={() =>
                    {
                      dispatch(changeLoader(true))
                      deleteItem(el.id)
                    }}>Удалить</button>
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
