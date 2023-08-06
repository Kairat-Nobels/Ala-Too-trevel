import React from 'react'
import correct from '../../assets/correctLogo.png'
import error from '../../assets/errorLogo.png'
import styles from './ModalAction.module.css'
import { useDispatch } from 'react-redux'
import { checkReq } from '../../redux/action/checkRequests'
import { useTranslation } from 'react-i18next';

export default function ModalAction({ typeAction })
{
    const { t } = useTranslation()

    const dispatch = useDispatch();
    return (
        <div className={styles.window}>
            <div className={styles.modal}>
                <img src={typeAction ? correct : error} alt='logo' className={styles.modalImg} />
                <p className={styles.modalText}>{typeAction ? t('modal_success') : t('modal_error')}</p>
                <button type='button' onClick={() => dispatch(checkReq(""))} className={styles.modalButton}>{t('modal_close')}</button>
            </div>
        </div>
    )
}
