import data from './data';
import socials from './constants/Socials';

import styles from './style.module.scss';

const Instagram = () => {
	return (
		<div className={styles['socials']}>
			<div className={styles['header']}>
				<h2 className={styles['title']}>Keep up with the club</h2>
				<div className={styles['icons']}>
					{socials.map(({ name, link, image }) => (
						<a href={link} target="_blank" rel="noreferrer">
							<img src={image} alt={name} />
						</a>
					))}
				</div>
			</div>

			<div className={styles['instagram']}>
				{data.map(({ name, link, image }) => (
					<a href={link} target="_blank" rel="noreferrer">
						<img src={image} alt={name} />
					</a>
				))}
			</div>
		</div>
	);
};

export default Instagram;
