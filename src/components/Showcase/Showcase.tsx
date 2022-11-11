import styles from './Showcase.module.scss';

import breakpoints from '../../breakpoints.module.scss';

interface Showcase_Props {
	title: string;
	subtitle?: string;
	image?: any;
	imageMobile?: any;
}

const Showcase = ({ title, subtitle, image, imageMobile }: Showcase_Props) => {
	return (
		<div className={styles['container']}>
			<h5 style={subtitle ? { marginBottom: '.5rem' } : {}}>{title}</h5>
			<h6>{subtitle}</h6>
			{imageMobile ? (
				<>
					<img src={image} alt={title} className={breakpoints['desktop']} />
					<img
						src={imageMobile}
						alt={title}
						className={breakpoints['mobile']}
					/>
				</>
			) : (
				<img src={image} alt={title} />
			)}
		</div>
	);
};

export default Showcase;
