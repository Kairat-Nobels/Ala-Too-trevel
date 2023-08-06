import React from 'react'
import styles from './CardItem.module.css'
import { useTranslation } from 'react-i18next';

export default function CardItem({ id, data })
{
    const { t, i18n } = useTranslation()

    return (
        <div key={id} className={styles.card}>
            <img src={data.img} alt="" height={150} />
            <h3>{i18n.resolvedLanguage === 'ru' ? data.name : data.nameEng}</h3>
            <p>{t('date_go')}: {data.date}</p>
            <p className={styles.price}>{data.price} {t('som')}</p>
            <p>{(i18n.resolvedLanguage === 'ru' ? data.description : data.descEng).slice(0, 180)}...</p>
        </div>
    )
}
