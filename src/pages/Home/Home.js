import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import styles from './Home.module.css';
import fc from '../../components/assets/icons/fc.svg';
import inst from '../../components/assets/icons/inst.svg';
import vk from '../../components/assets/icons/vk.svg';
import { useDispatch, useSelector } from 'react-redux';
import { postRecord } from '../../redux/action/postRecord';
import { changeLoader } from '../../redux/action/loader';
import CardItem from '../../components/CardTravel/CardItem';
import { Carousel } from 'react-carousel-minimal';

export default function Home()
{
  const dispatch = useDispatch();
  const travelData = useSelector((s) => s.travel);
  const revData = useSelector((s) => s.sign);
  const [record, setRecord] = useState({
    name: '',
    phone: '',
    travelId: '',
  });
  const [select, setSelect] = useState('');
  console.log(revData);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.banner_left}>
            <h1 style={{ fontSize: '62px', color: 'white' }}>ПУТЕШЕСТВУЙ С</h1>
            <h2 className={styles.text}>ALA-TOO TRAVEL</h2>
          </div>
          <div className={styles.banner_right}>
            <a href="https://www.instagram.com/kairat_nobels">
              <img src={fc} alt="" />
            </a>
            <a href="https://www.instagram.com/kairat_nobels">
              <img src={inst} alt="" />
            </a>
            <a href="https://www.instagram.com/kairat_nobels">
              <img src={vk} alt="" />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.headerText}>Наши экскурсии</p>
      <div className={styles.travel}>
        {travelData.slice(0, 4).map((el, index) =>

          <Link key={el.id} to={`/travel/${el.id}`}>
            <CardItem data={el} />
          </Link>

        )}
        <Link to="/travel">
          <p className={styles.seeAll}>Смотреть всё...</p>
        </Link>
      </div>
      <p className={styles.headerText}>Туристические маршруты</p>
      <Slider />
      <p className={styles.headerText}>Наши отзывы</p>
      <div className={styles.containerRev}>
        <div className={styles.rev}>
          {revData.map((el) =>
            <div key={el.id}>
              {el.type == 1 && (
                <div key={el.id} className={styles.revCard}>
                  {el.name}
                  <p>{el.description}</p>
                  <p style={{ textAlign: 'end', fontWeight: '600' }}>{el.date}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.record}>
        <div className={styles.recordCard}>
          <div className={styles.recordForm}>
            <p className={styles.recordTitle}>Хотите записаться на тур?</p>
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
            <div
              className={styles.select}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '18px',
                color: 'white',
              }}>
              Выберите тур
              <select
                value={select}
                onChange={(e) =>
                {
                  setSelect(e.target.value);
                  console.log(record);
                  const ed = e.target.value.split('.')[0];
                  setRecord((s) =>
                  {
                    return {
                      name: s.name,
                      phone: s.phone,
                      travelId: ed,
                    };
                  });
                }}>
                <option value={''}>Выберите тур</option>
                {travelData.map((el) =>
                {
                  return <option key={el.id}>{el.id + '.' + el.name}</option>;
                })}
              </select>
            </div>
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
                  setSelect('');
                } else alert('заполните все данные');
              }}>
              Записаться на тур
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
