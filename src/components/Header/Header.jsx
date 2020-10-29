import React from 'react';

import Typography from '../Typography';

import styles from './Header.scss';

const Header = () => (
  <header>
    <Typography className={styles.header}>todos</Typography>
  </header>
);

export default Header;
