import styles from './Button.module.scss';

interface Button_Props {
	text: string;
	onClick?: () => void;
	variant?: string;
	style?: any;
}

const Button = ({ text, onClick, variant, style }: Button_Props) => {
	if (variant !== 'light') {
		variant = 'dark';
	}

	return (
		<button
			className={styles[`${variant}-button`]}
			onClick={onClick}
			style={style}
		>
			<p className={styles['text']}>{text}</p>
		</button>
	);
};

export default Button;
