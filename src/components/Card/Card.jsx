import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Card.scss';

const Card = ({
  className,
  children,
}) => {
  const classes = classNames(styles.card, className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.func,
};

Card.defaultProps = {};

export default Card;
