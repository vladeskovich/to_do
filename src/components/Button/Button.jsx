import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.scss';

const Button = ({
  type,
  className,
  children,
  ...props
}) => {
  const classes = classNames(styles.button, className, type);

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
