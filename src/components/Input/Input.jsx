import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Input.scss';

const Input = ({
  type,
  className,
  handleChange,
  ...props
}) => {
  const classes = classNames(styles.input, className, type);

  return (
    <input
      type={type}
      className={classes}
      onChange={handleChange}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio', 'submit', 'text']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
