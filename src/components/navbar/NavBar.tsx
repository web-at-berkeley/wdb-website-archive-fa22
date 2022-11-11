import DesktopNavbar from './components/Desktop';
import MobileNavbar from './components/Mobile';

import styles from './styles/breakpoints.module.scss';

interface NavBar_Props {
	landing?: any;
}

const Navbar = ({ landing }: NavBar_Props) => {
	return (
		<>
			<div className={styles['desktop']}>
				<DesktopNavbar landing={landing} />
			</div>
			<div className={styles['mobile']}>
				<MobileNavbar landing={landing} />
			</div>
		</>
	);
};

export default Navbar;
