import React from 'react';

import styles from './NotFoundBlock.module.scss';

console.log(styles);

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>Эх...</span>
        <br />
        Hичего не найдено ...
      </h1>
      <p className={styles.description}>Страница отсутствует</p>
    </div>
  );
};

export default NotFoundBlock;
