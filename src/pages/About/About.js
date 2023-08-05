import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoader } from '../../redux/action/loader';
import address from '../../assets/habibaddress.jpg';
import styles from './About.module.css';
import inst from './../../components/assets/icons/inst.svg';
import mail from './../../components/assets/icons/mail.svg';
import { API_GET_SIGN } from '../../redux/config';
import { CHECK_REQ } from '../../redux/reducer/type';
import { getSign } from '../../redux/action/getSign';
import { currentDate } from '../../components/Script';

export default function About()
{
    const dispatch = useDispatch();
    const dataReviews = useSelector((s) =>
    {
        const arr = s.sign.filter((el) => el.type == 1);
        return arr;
    });
    const [name, setname] = useState('');
    const [review, setReview] = useState('');
    const date = currentDate();
    const sendReview = async (name, review, date) =>
    {
        const response = await fetch(API_GET_SIGN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                description: review,
                date: date,
                type: 1,
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
    };
    const handleSend = () =>
    {
        dispatch(changeLoader(true));
        if (review && name) {
            sendReview(name, review, date);
            setReview('');
            setname('');
        } else {
            alert('not good');
            dispatch(changeLoader(false));
        }
    };
    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>Бишкек проспект Чуй 155</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img src={inst} />
                        <p>kairat_nobels</p>
                    </div>
                    <p>+996 708‒11‒15‒77</p>
                    <p>+996 507‒20‒07‒07</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8429638771795!2d74.61189947593944!3d42.8761585711496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cdbbae15%3A0xa6b565413fa531df!2z0KbQo9CcINCQ0LnRh9Kv0YDTqdC6!5e0!3m2!1sru!2skg!4v1691144114962!5m2!1sru!2skg" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h2>Наши отзывы:</h2>
            <div className={styles.containerReview}>
                {dataReviews.map((el, index) =>
                {
                    return (
                        <div key={el.id}>
                            <div className={styles.reviewCard}>
                                <p className={styles.reviewName}>{el.name}</p>
                                <p className={styles.reviewDes}>{el.description}</p>
                                <p className={styles.reviewDate}>{el.date}</p>
                            </div>
                            {index != dataReviews.length - 1 && (
                                <div style={{ height: '5px', backgroundColor: 'gray' }}></div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className={styles.blockInput}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Имя"
                />
                <input
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Напишите комментарий..."
                />
                <button onClick={handleSend}>Оставить отзыв</button>
            </div>
        </div>
    );
}
