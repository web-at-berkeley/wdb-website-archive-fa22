import Button from '../../../components/Button';
import styles from '../style.module.scss';

const TimelineItem = ({
	title,
	date,
	location,
	description,
	buttons,
	isLast,
}) => {
	return (
		<div>
			<p className={styles['title']}>
				{title}
				{date && <span className={styles['date-time']}>{date}</span>}
			</p>
			{location && <p className={styles['location']}>{location}</p>}
			<div
				className={`${styles['description']} ${
					isLast ? styles['description-last'] : ''
				}`}
			>
				{description &&
					(typeof description === 'string' ? (
						<p>{description}</p>
					) : (
						description
					))}
				{buttons && (
					<div className={`${styles['apply-buttons']}`}>
						{buttons.map((button, index) => (
							<Button key={index} text={button.text} onClick={button.onClick} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default TimelineItem;
