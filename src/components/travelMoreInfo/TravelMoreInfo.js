import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './TravelMoreInfo.module.css';
import { postRecord } from '../../redux/action/postRecord';
import { changeLoader } from '../../redux/action/loader';

export default function Travel()
{
  const dispatch = useDispatch();
  const { id } = useParams();
  const travel = useSelector((s) => s.travel);
  const [record, setRecord] = useState({
    name: '',
    phone: '',
    travelId: id,
  });
  const obj = travel.find((item) => item.id === id);
  return (
    <>
      {obj && (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <img src={obj.img} className={styles.img} alt="img" />
            <h1>{obj.name}</h1>
            <p>{obj.description}</p>
            <section>
              <div className={styles.services}>
                <ul className={styles.service}>
                  <li>
                    <h2>Что вас ожидает:</h2>
                    <ul style={{ marginLeft: '20px' }}>
                      {obj.waiting.split('.').map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <ul className={styles.service}>
                  <li>
                    <h2>Что входит:</h2>
                    <ul style={{ marginLeft: '20px' }}>
                      {obj.included.split('.').map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <span>Цена: {obj.price}</span>
              </div>
              <div>
                <img src={obj.img1} alt="img" />
              </div>
            </section>
            <form className={styles.form}>
              <input
                type="text"
                className={styles.recordInput}
                value={record.name}
                onChange={(e) =>
                {
                  setRecord((s) =>
                  {
                    return {
                      name: e.target.value,
                      phone: s.phone,
                      travelId: s.travelId,
                    };
                  });
                }}
                required
                placeholder="Имя"
              />
              <input
                type="text"
                className={styles.recordInput}
                maxLength={10}
                value={record.phone}
                onChange={(e) =>
                {
                  setRecord((s) =>
                  {
                    return {
                      name: s.name,
                      phone: e.target.value,
                      travelId: s.travelId,
                    };
                  });
                }}
                required
                placeholder="0555778899"
                aria-placeholder="white"
              />
              <button
                type="button"
                className={styles.recordButton}
                onClick={() =>
                {
                  if (record.name && record.phone && record.travelId) {
                    dispatch(changeLoader(true));
                    dispatch(postRecord(record));
                    setRecord({
                      name: '',
                      phone: '',
                      travelId: '',
                    });
                  } else alert('заполните все данные');
                }}>
                Записаться на тур
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
