import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Tury.module.css';
import { API_DELETE_TRAVEL, API_GET_TRAVEL } from '../../redux/config';
import { getTravel } from '../../redux/action/getTravel';
import { changeLoader } from '../../redux/action/loader';
import { CHECK_REQ } from '../../redux/reducer/type';
import ModalAdd from '../../components/modalAdd/ModalAdd';
import { getSign } from '../../redux/action/getSign';

export default function Tury()
{
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const travel = useSelector((s) => s.travel);
  const deleteItem = async (id) =>
  {
    const response = await fetch(API_GET_TRAVEL + '/' + id, {
      method: 'DELETE',
    });
    if (response.status == 200) {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'accept' },
      });
      dispatch(getTravel());
    } else {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'error' },
      });
    }
    dispatch(changeLoader(false));
  };
  const [search, setsearch] = useState('');
  const [count, setcount] = useState('all');
  const [update, setupdate] = useState({
    name: '',
    price: '',
    img: '',
    img1: '',
    date: '',
    description: '',
    waiting: '',
    included: '',
  });
  const handleShow = () =>
  {
    setIsShow(true);
  };
  const handleHide = () =>
  {
    setIsShow(false);
  };
  const updateTravel = async ({ name, price, img, img1, date, description, waiting, included }) =>
  {
    const response = await fetch(API_DELETE_TRAVEL + count, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        price: price,
        img: img,
        img1: img1,
        date: date,
        description: description,
        waiting: waiting,
        included: included
      }),
    });
    if (response.status == 200) {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'accept' },
      });
    } else {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'error' },
      });
    }
    dispatch(changeLoader(false));
    dispatch(getSign());
    dispatch(getTravel())
    setcount('all')
  }
  const createTravel = async ({ name, price, img, img1, date, description, waiting, included }) =>
  {
    const response = await fetch(API_DELETE_TRAVEL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        price: price,
        img: img,
        img1: img1,
        date: date,
        description: description,
        waiting: waiting,
        included: included
      }),
    });
    if (response.status == 201) {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'accept' },
      });
    } else {
      dispatch({
        type: CHECK_REQ,
        payload: { value: 'error' },
      });
    }
    dispatch(changeLoader(false));
    dispatch(getSign());
    dispatch(getTravel())
    setcount('all')
  }
  const [product, setproduct] = useState({
    name: '',
    description: '',
    price: '',
    img: '',
    img1: '',
    date: '',
    waiting: '',
    included: ''
  })
  return (
    <div>
      {count == 'all' && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div className={styles.headerLeft}>
          <input
            type="text"
            value={search}
            onChange={(e) =>
            {
              setsearch(e.target.value);
            }}
          />
          <button onClick={() =>
          {
            setcount(0)
            setproduct({
              name: '',
              description: '',
              price: '',
              img: '',
              img1: '',
              date: '',
              waiting: '',
              included: ''
            })
          }}>Добавить</button>
        </div>
        <h2 style={{ fontWeight: '500', color: '#636363', paddingRight: '1rem' }}>Туры</h2>
      </div>}
      {count == 'all' ? (
        <div>
          <div className={styles.cardHeader}>
            <p style={{ width: '20px' }}>ID</p>
            <p style={{ width: '200px' }}>Название</p>
            <p style={{ width: '70px' }}>Цена</p>
            <p style={{ width: '100px' }}>Дата</p>
            <p style={{ width: '100px' }}>Описание</p>
          </div>
          <div>
            {travel.map((el) =>
            {
              if (el.name.toLowerCase().indexOf(search.toLowerCase()) >= 0)
                return (
                  <div key={el.id}>
                    <div
                      key={el.id}
                      className={styles.cardHeader}
                      style={{ backgroundColor: 'white' }}>
                      <p
                        style={{
                          width: '20px',
                          color: 'blueviolet',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                        onClick={() =>
                        {
                          setcount(el.id);
                          setproduct(el)
                        }}>
                        {el.id}
                      </p>
                      <p style={{ width: '200px' }}>{el.name}</p>
                      <p style={{ width: '70px' }}>{el.price}</p>
                      <p style={{ width: '100px' }}>{el.date}</p>
                      <p style={{ width: '500px', textAlign: 'justify' }}>
                        {el.description.slice(0, 200)}
                      </p>
                      <button
                        onClick={() =>
                        {
                          dispatch(changeLoader(true));
                          deleteItem(el.id);
                        }}>
                        Удалить
                      </button>
                    </div>
                    <div style={{ backgroundColor: '#f4f4f4', height: '3px' }}></div>
                  </div>
                );
            })}
          </div>
        </div>
      ) : (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className={styles.cardUpdate}>
            <p>Наименвание:</p>
            <input type="text" className={styles.inputUpdate} style={{ width: '40%' }} value={product.name}
              onChange={(e) =>
              {
                setproduct((s) =>
                {
                  return {
                    name: e.target.value,
                    description: s.description,
                    img: s.img,
                    img1: s.img1,
                    price: s.price,
                    waiting: s.waiting,
                    included: s.included,
                    date: s.date
                  }
                })
              }}
            />
          </div>
          <div className={styles.cardUpdate}>
            <p>Цена:</p>
            <input type="text" className={styles.inputUpdate} style={{ width: '140px' }} value={product.price}
              onChange={(e) =>
              {
                setproduct((s) =>
                {
                  return {
                    name: s.name,
                    description: s.description,
                    img: s.img,
                    img1: s.img1,
                    price: e.target.value,
                    waiting: s.waiting,
                    included: s.included,
                    date: s.date
                  }
                })
              }}
            />
          </div>
          <div className={styles.cardUpdate}>
            <p>Ссылки к фотографиям:</p>
            <input
              type="text"
              className={styles.inputUpdate}
              style={{ width: '300px', marginRight: '20px' }}
              value={product.img}
              onChange={(e) =>
              {
                setproduct((s) =>
                {
                  return {
                    name: s.name,
                    description: s.description,
                    img: e.target.value,
                    img1: s.img1,
                    price: s.price,
                    waiting: s.waiting,
                    included: s.included,
                    date: s.date
                  }
                })
              }}
            />
            <input
              type="text"
              className={styles.inputUpdate}
              style={{ width: '300px' }}
              value={product.img1}
              onChange={(e) =>
              {
                setproduct((s) =>
                {
                  return {
                    name: s.name,
                    description: s.description,
                    img: s.img,
                    img1: e.target.value,
                    price: s.price,
                    waiting: s.waiting,
                    included: s.included,
                    date: s.date
                  }
                })
              }}
            />
          </div>
          <div className={styles.cardUpdate}>
            <p>Дата выезда:</p>
            <input type="date" className={styles.inputUpdate} value={product.date.split('.').reverse().join('-')} onChange={(e) => setproduct((s) =>
            {
              return {
                name: s.name,
                description: s.description,
                img: s.img,
                img1: s.img1,
                price: s.price,
                waiting: s.waiting,
                included: s.included,
                date: e.target.value
              }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>Описание тура:</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.description} onChange={(e) => setproduct((s) =>
            {
              return {
                name: s.name,
                description: e.target.value,
                img: s.img,
                img1: s.img1,
                price: s.price,
                waiting: s.waiting,
                included: s.included,
                date: s.date
              }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>Ожидание по туру:</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.waiting} onChange={(e) => setproduct((s) =>
            {
              return {
                name: s.name,
                description: s.description,
                img: s.img,
                img1: s.img1,
                price: s.price,
                waiting: e.target.value,
                included: s.included,
                date: s.date
              }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>Что входит в тур:</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.included} onChange={(e) => setproduct((s) =>
            {
              return {
                name: s.name,
                description: s.description,
                img: s.img,
                img1: s.img1,
                price: s.price,
                waiting: s.waiting,
                included: e.target.value,
                date: s.date
              }
            })} />
          </div>
          <div className={styles.blockButton}>
            {count == 0 ? <button className={styles.update}
              onClick={() =>
              {
                if (product.date && product.description && product.img && product.img1
                  && product.included && product.name && product.price && product.waiting) {
                  dispatch(changeLoader(true))
                  createTravel(product)
                } else {
                  alert('Заполните все данные')
                }
              }}
            >Создать</button>
              : <button className={styles.update}
                onClick={() =>
                {
                  if (product.date && product.description && product.img && product.img1
                    && product.included && product.name && product.price && product.waiting) {
                    dispatch(changeLoader(true))
                    updateTravel(product)
                  } else {
                    alert('Заполните все данные')
                  }
                }}
              >Обновить и закрыть</button>}
            <button className={styles.update} onClick={() => setcount('all')}>Назад</button>
          </div>
        </div>
      )}
    </div>
  );
}
