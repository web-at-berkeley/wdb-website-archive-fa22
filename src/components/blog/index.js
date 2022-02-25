import React from 'react';

import data from './data';

import styles from './style.module.scss';

const Blog = () => {
  const Posts = ({ data }) => (
    <a
      href={styles['link']}
      target="_blank"
      rel="noreferrer"
      className={styles['post']}
    >
      <img src={data.image} alt={data.title} />
      <h6>{data.title}</h6>
      <p className={styles['date']}>{data.date}</p>
      <p className={styles['author']}>By {data.author}</p>
    </a>
  );

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h3>latest from our blog</h3>
        <a href="/education" target="_blank" rel="noreferrer">
          <p>See All {'>>'}</p>
        </a>
      </div>
      <div className={styles['posts']}>
        {data.slice(0, 4).map((post) => (
          <Posts data={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
