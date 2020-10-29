import React from 'react';
import Header from '../Header';
import AppMain from '../AppMain';

import styles from './App.scss';

const App = () => (
  <div className={styles.appWrapper}>
    <Header/>
    <AppMain/>
  </div>
);

export default App;
