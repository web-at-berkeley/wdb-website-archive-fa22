import styles from './ApplyButton.module.scss';
import { Link } from 'react-router-dom';

const ApplyButton = () => {
	return <Link to="/join" className={styles['container']} data="APPLY NOW" />;
};

export default ApplyButton;
