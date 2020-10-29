import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Typography.scss';

const VARIANTS = {
  body: 'p',
  header1: 'h1',
};

const Typography = ({
  variant,
  className,
  children,
  onClick,
}) => {
  const classes = classNames(styles.typography, className);
  const Component = VARIANTS[variant];

  return (
    <Component
      onClick={onClick}
      className={classes}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.arrayOf(Object.keys(VARIANTS)),
  children: PropTypes.node.func,
  className: PropTypes.string,
  onClick: PropTypes.node.func,
};

Typography.defaultProps = {
  variant: 'body',
};

export default Typography;
