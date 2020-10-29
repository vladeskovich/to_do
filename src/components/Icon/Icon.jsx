import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Cross from '../../assets/icons/cross.svg';

import styles from './Icon.scss';

const icons = {
  cross: Cross,
};

const Icon = ({
  name,
  className,
  onClick,
}) => {
  const classes = classNames(styles.icon, className);
  const Component = icons[name.toLowerCase()];

  return (
    <Component
      onClick={onClick}
      className={classes}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

Icon.defaultProps = {};

export default Icon;
