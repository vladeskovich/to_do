import React from 'react';

import Typography from '../Typography';
import List from '../List';
import Button from '../Button';

import FILTERS from '../../constants/filters';
import upperFirst from '../../utils/string';

import styles from './Footer.scss';

const Footer = ({
  itemsLeft,
  changeFilter,
  deleteCompleted,
  activeFilter,
}) => (
  <footer className={styles.footer}>
    <Typography className={styles.numberTasks}>{itemsLeft} items left</Typography>
    <List
      data={FILTERS}
      direction="horizontal"
      className={styles.filterContainer}
      itemClassName={styles.containerButtonFilter}
    >{(filter) => (
      <Button
        onClick={() => changeFilter(filter)}
        className={filter === activeFilter
          ? styles.buttonFilterActive
          : styles.buttonFilter
        }
      >
        {upperFirst(filter)}
      </Button>
    )}
    </List>
    <Typography onClick={deleteCompleted}
                className={styles.clearButton}
    >Clear completed</Typography>
  </footer>
);

export default Footer;
