import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

import styles from './ToggleButton.scss';

const ToggleButton = ({
  setStatus,
  isCompleted,
}) => (
  <label>
    <Input
      checked={isCompleted}
      type="checkbox"
      onClick={setStatus}
      className={styles.toggleButton}
    />
    <span className={styles.fakeToggleButton}> </span>
  </label>

);

ToggleButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ToggleButton.defaultProps = {};

export default ToggleButton;
