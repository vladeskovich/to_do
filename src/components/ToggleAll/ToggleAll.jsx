import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

import styles from './ToggleAll.scss';

const ToggleAll = ({
  toggleIsComplete,
  itemsLeft,
}) => (
  <label>
    <Input
      type="checkbox"
      onChange={toggleIsComplete}
      className={styles.toggleButton}
    />
    <span className={!itemsLeft
      ? styles.fakeArrowChecked
      : styles.fakeArrow}>
      ❯
    </span>
  </label>

);

ToggleAll.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ToggleAll.defaultProps = {};

export default ToggleAll;
