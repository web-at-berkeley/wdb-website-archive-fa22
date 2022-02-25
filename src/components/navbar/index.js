import React from 'react';

import DesktopNavbar from './Desktop';
import MobileNavbar from './Mobile';

import styles from './styles/breakpoints.module.scss';

const Navbar = ({ landing }) => {
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
