import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Tury.module.css';
import { API_DELETE_TRAVEL, API_GET_TRAVEL } from '../../redux/config';
import { getTravel } from '../../redux/action/getTravel';
import { changeLoader } from '../../redux/action/loader';
import { CHECK_REQ } from '../../redux/reducer/type';
import ModalAdd from '../../components/modalAdd/ModalAdd';
import { getSign } from '../../redux/action/getSign';
import { useTranslation } from 'react-i18next';

export default function Tury()
{
  const { t, i18n } = useTranslation()

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
  const updateTravel = async ({ name, nameEng, price, img, img1, date, description, descEng, waiting, waitingEng, included, includedEng }) =>
  {
    const response = await fetch(API_DELETE_TRAVEL + count, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        nameEng: nameEng,
        price: price,
        img: img,
        img1: img1,
        date: date,
        description: description,
        descEng: descEng,
        waiting: waiting,
        waitingEng: waitingEng,
        included: included,
        includedEng: includedEng
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
  const createTravel = async ({ name, nameEng, price, img, img1, date, description, descEng, waiting, waitingEng, included, includedEng }) =>
  {
    const response = await fetch(API_DELETE_TRAVEL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        nameEng: nameEng,
        price: price,
        img: img,
        img1: img1,
        date: date,
        description: description,
        descEng: descEng,
        waiting: waiting,
        waitingEng: waitingEng,
        included: included,
        includedEng: includedEng
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
    nameEng: '',
    description: '',
    descEng: '',
    price: '',
    img: '',
    img1: '',
    date: '',
    waiting: '',
    waitingEng: '',
    included: '',
    includedEng: ''
  })
  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      {count == 'all' && <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div className={styles.headerLeft}>
          <input
            type="text"
            placeholder={t('search')}
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
              nameEng: '',
              description: '',
              descEng: '',
              price: '',
              img: '',
              img1: '',
              date: '',
              waiting: '',
              waitingEng: '',
              included: '',
              includedEng: ''
            })
          }}>{t('addBtn')}</button>
        </div>
        <h2 style={{ fontWeight: '500', color: '#636363', paddingRight: '1rem' }}>{t('menu_tours')}</h2>
      </div>}
      {count == 'all' ? (
        <div>
          <div className={styles.cardHeader}>
            <p style={{ width: '20px' }}>ID</p>
            <p style={{ width: '200px' }}>{t('tours_name')}</p>
            <p style={{ width: '70px' }}>{t('tours_price')}</p>
            <p style={{ width: '100px' }}>{t('tours_date')}</p>
            <p style={{ width: '100px' }}>{t('tours_description')}</p>
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
                      <p style={{ width: '200px' }}>{i18n.resolvedLanguage === 'ru' ? el.name : el.nameEng}</p>
                      <p style={{ width: '70px' }}>{el.price}</p>
                      <p style={{ width: '100px' }}>{el.date}</p>
                      <p style={{ width: '500px', textAlign: 'justify' }}>
                        {(i18n.resolvedLanguage === 'ru' ? el.description : el.descEng).slice(0, 200)}
                      </p>
                      <button
                        onClick={() =>
                        {
                          dispatch(changeLoader(true));
                          deleteItem(el.id);
                        }}>
                        {t('delete_btn')}
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
            <p>{t('tours_name')} (RU):</p>
            <input type="text" className={styles.inputUpdate} style={{ width: '40%' }} value={product.name}
              onChange={(e) =>
              {
                setproduct((s) =>
                {
                  return {
                    ...s, name: e.target.value
                  }
                })
              }}
            />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t('tours_name')} (ENG):</p>
            <input type="text" className={styles.inputUpdate} style={{ width: '40%' }} value={product.nameEng}
              onChange={(e) =>
              {
                setproduct((s) =>
                {
                  return {
                    ...s, nameEng: e.target.value
                  }
                })
              }}
            />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t('tours_price')}:</p>
            <input type="text" className={styles.inputUpdate} style={{ width: '140px' }} value={product.price}
              onChange={(e) =>
              {
                setproduct((s) =>
                {
                  return {
                    ...s, price: e.target.value
                  }
                })
              }}
            />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t('photos_links')}:</p>
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
                    ...s, img: e.target.value
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
                    ...s, img1: e.target.value
                  }
                })
              }}
            />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t('date_go')}:</p>
            <input type="date" className={styles.inputUpdate} value={product.date.split('.').reverse().join('-')} onChange={(e) => setproduct((s) =>
            {
              return {
                ...s, date: e.target.value
              }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t("tour_desc")} (RU):</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.description} onChange={(e) => setproduct((s) =>
            {
              return { ...s, description: e.target.value }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t("tour_desc")} (ENG):</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.descEng} onChange={(e) => setproduct((s) =>
            {
              return { ...s, descEng: e.target.value }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t("tour_waiting")} (RU):</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.waiting} onChange={(e) => setproduct((s) =>
            {
              return {
                ...s, waiting: e.target.value
              }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t("tour_waiting")} (ENG):</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.waitingEng} onChange={(e) => setproduct((s) =>
            {
              return {
                ...s, waitingEng: e.target.value
              }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t("tour_include")} (RU):</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.included} onChange={(e) => setproduct((s) =>
            {
              return {
                ...s, included: e.target.value
              }
            })} />
          </div>
          <div className={styles.cardUpdate}>
            <p>{t("tour_include")} (ENG):</p>
            <textarea type="text" style={{ width: '100%', height: '100px' }} value={product.includedEng} onChange={(e) => setproduct((s) =>
            {
              return {
                ...s, includedEng: e.target.value
              }
            })} />
          </div>
          <div className={styles.blockButton}>
            {count == 0 ? <button className={styles.update}
              onClick={() =>
              {
                if (product.date && product.description && product.img && product.img1 && product.included && product.name && product.price && product.waiting && product.nameEng && product.descEng && product.waitingEng && product.includedEng) {
                  dispatch(changeLoader(true))
                  createTravel(product)
                } else {
                  alert(t('home_form_required'))
                }
              }}
            >{t("createBtn")}</button>
              : <button className={styles.update}
                onClick={() =>
                {
                  if (product.date && product.description && product.img && product.img1
                    && product.included && product.name && product.price && product.waiting && product.nameEng && product.descEng && product.waitingEng && product.includedEng) {
                    dispatch(changeLoader(true))
                    updateTravel(product)
                  } else {
                    alert(t('home_form_required'))
                  }
                }}
              >{t("resolveBtn")}</button>}
            <button className={styles.update} onClick={() => setcount('all')}>{t("goBack")}</button>
          </div>
        </div>
      )}
    </div>
  );
}
