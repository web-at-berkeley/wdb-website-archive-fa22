import React from 'react';

import styles from './style.module.scss';

const Button = ({ text, onClick, variant, style }) => {
	if (variant !== 'light') {
		variant = 'dark';
	}

	return (
		<button className={styles[`${variant}-button`]} onClick={onClick} style={style}>
			<p className={styles['text']}>{text}</p>
		</button>
	);
};

export default Button;
