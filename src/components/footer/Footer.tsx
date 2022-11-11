import socials from './constants/socials';

import { Link } from 'react-router-dom';

import Bg from './img/bg.png';
import BgMobile from './img/bg-mobile.png';
import Logo from '../../assets/icons/logo-black.png';

import styles from './Footer.module.scss';
import classnames from 'classnames';
import breakpoints from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles['container']}>
			<img
				src={Bg}
				alt=""
				className={classnames(styles['background'], breakpoints['desktop'])}
			/>
			<img
				src={BgMobile}
				alt=""
				className={classnames(styles['background'], breakpoints['mobile'])}
			/>
			<div className={styles['footer']}>
				<div className={styles['left']}>
					<Link to="/" className={styles['logo']}>
						<img src={Logo} alt="White WDB Logo" />
					</Link>

					<div className={styles['socials']}>
						{socials.map(({ name, link, image }, ind) => (
							<a href={link} target="_blank" rel="noreferrer" key={ind}>
								<img src={image} alt={name} />
							</a>
						))}
					</div>
				</div>
				<div className={styles['right']}>
					<div className={styles['col']}>
						<Link to="/about" className={styles['link']}>
							About Us
						</Link>
						<Link to="/education" className={styles['link']}>
							Education
						</Link>
						<Link to="/bootcamp" className={styles['link']}>
							Bootcamp
						</Link>
						<Link to="/industry" className={styles['link']}>
							Industry
						</Link>
					</div>
					<div className={styles['col']}>
						<Link to="/about" className={styles['link']}>
							Our Work
						</Link>
						<Link to="/projects" className={styles['link']}>
							Projects
						</Link>
						<Link to="/decal" className={styles['link']}>
							DeCal
						</Link>
					</div>
					<div className={styles['col']}>
						<Link to="/join" className={styles['link']}>
							Get Involved
						</Link>
						<Link to="/work-with-us" className={styles['link']}>
							Work With Us
						</Link>
						<Link to="/join" className={styles['link']}>
							Join Us/Apply
						</Link>
					</div>
					<div className={styles['col']}>
						<Link to="/members" className={styles['link']}>
							Team
						</Link>
						<Link to="/members" className={styles['link']}>
							Members
						</Link>
						<Link to="/alumni" className={styles['link']}>
							Alumni
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
