import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'
function NotFoundPage()
{
    return (
        <div className={styles.page}>
            <Link to={'/'}>На Главную</Link>
        </div>
    )
}

export default NotFoundPage