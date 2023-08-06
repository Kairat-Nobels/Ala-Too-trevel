import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './TravelMoreInfo.module.css';
import { postRecord } from '../../redux/action/postRecord';
import { changeLoader } from '../../redux/action/loader';

export default function Travel()
{
  const { t, i18n } = useTranslation()

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
            <h1>{i18n.resolvedLanguage === 'ru' ? obj.name : obj.nameEng}</h1>
            <p>{i18n.resolvedLanguage === 'ru' ? obj.description : obj.descEng}</p>
            <section>
              <div className={styles.services}>
                <ul className={styles.service}>
                  <li>
                    <h2>{t('moreInfo_1')}</h2>
                    <ul style={{ marginLeft: '20px' }}>
                      {(i18n.resolvedLanguage === 'ru' ? obj.waiting : obj.waitingEng).split('.').map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <ul className={styles.service}>
                  <li>
                    <h2>{t('moreInfo_2')}</h2>
                    <ul style={{ marginLeft: '20px' }}>
                      {(i18n.resolvedLanguage === 'ru' ? obj.included : obj.includedEng).split('.').map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <span>{t('tours_price')}: {obj.price} {t('som')}</span>
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
                placeholder={t('home_form_name')}
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
                  } else alert(t('home_form_required'));
                }}>
                {t('submitBtn')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
