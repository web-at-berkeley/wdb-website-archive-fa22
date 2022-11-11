import { Link } from 'react-router-dom';

import Button from '../Button';

import Container from 'react-bootstrap/Container';

import styles from './style.module.scss';

import Fade from 'react-reveal/Fade';

interface Header_Props {
	subheader?: string;
	title?: string;
	subtitle?: string;
	description?: string;
	linkTo?: any;
	buttonText?: string;
	linkHeader?: string;
	className?: string;
}

const Header = ({
	subheader,
	title,
	subtitle,
	description,
	linkTo,
	buttonText,
	linkHeader,
	className,
}: Header_Props) => {
	if (subheader) {
		return (
			<Container className={styles['sub-header']}>
				<Fade bottom>
					<>
						<h3 className={styles['title']}>{title}</h3>
						{description && (
							<p className={styles['description']}>{description}</p>
						)}
						{buttonText && (
							<Link to={linkTo}>
								<Button text={buttonText} />
							</Link>
						)}
					</>
				</Fade>
			</Container>
		);
	}
	if (linkHeader) {
		return (
			<Container className={styles['sub-header']}>
				<Fade up>
					<h3 className={styles['title']}>{className}</h3>
				</Fade>
				<h3 className={styles['title']}>{title}</h3>
				{description && <p className={styles['description']}>{description}</p>}
				{buttonText && (
					<a href={linkTo}>
						<Button text={buttonText} style={{ fontSize: '10px' }} />
					</a>
				)}
			</Container>
		);
	}

	return (
		<Container className={styles['header']}>
			<h1 className={styles['title']}>{title}</h1>
			<h5 className={styles['subtitle']}>{subtitle}</h5>
			{description && <p className={styles['description']}>{description}</p>}
		</Container>
	);
};

export default Header;
