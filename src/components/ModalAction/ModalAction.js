import React from 'react'
import correct from '../../assets/correctLogo.png'
import error from '../../assets/errorLogo.png'
import styles from './ModalAction.module.css'
import { useDispatch } from 'react-redux'
import { checkReq } from '../../redux/action/checkRequests'

export default function ModalAction({ typeAction }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.window}>
            <div className={styles.modal}>
                <img src={typeAction ? correct : error} alt='logo' className={styles.modalImg} />
                <p className={styles.modalText}>{typeAction ? "Успешно" : "Что-то пошло не так!"}</p>
                <button type='button' onClick={() => dispatch(checkReq(""))} className={styles.modalButton}>Закрыть</button>
            </div>
        </div>
    )
}
