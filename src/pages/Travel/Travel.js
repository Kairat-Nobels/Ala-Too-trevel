import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Travel.module.css';
import { Link } from 'react-router-dom';

import CardItem from '../../components/CardTravel/CardItem';

export default function Travel()
{
  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, [])
  const travel = useSelector((s) => s.travel);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {travel?.map((item) => (
          <Link key={item.id} to={`/travel/${item.id}`}>
            <CardItem data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
