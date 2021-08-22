import React from 'react';

import styles from './style.module.scss';

const Event = (image, title, location, time, month, day, url) => {
	return (
		<div className={styles['container']}>
			<div className={styles["photo"]}></div>
		</div>
	);
};

export default Event;
