import React from 'react'
import styles from './CardItem.module.css'

export default function CardItem({ id, data }) {
    return (
        <div key={id} className={styles.card}>
            <img src={data.img} alt="" height={150}/>
            <h3>{data.name}</h3>
            <p>Дата выезда:{data.date}</p>
            <p className={styles.price}>{data.price} сом</p>
            <p>{data.description.slice(0,180)}...</p>
        </div>
    )
}
