import React from 'react'
import { SpinnerCircular, SpinnerDotted } from 'spinners-react'
import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles.window}>
            <div className={styles.modal}>
                <SpinnerCircular color='red' size={'200px'}/>
            </div>
        </div>
    )
}
