import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './List.scss';

const List = ({
  data,
  className,
  children,
  direction,
  itemClassName,
  ordered,
}) => {
  const classes = classNames(styles.list, className, { [styles[direction]]: direction });
  const Root = ordered ? 'ol' : 'ul';

  return (
    <Root className={classes}>
      {data.map((elem, index) => {
        const { id } = elem;

        return (
          <li
            key={id || index}
            className={itemClassName}
          >
            {children(elem)}
          </li>
        );
      })}
    </Root>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf([
    PropTypes.shape({}),
    PropTypes.number,
    PropTypes.string,
  ]),
  itemClassName: PropTypes.string,
  children: PropTypes.func,
  direction: PropTypes.arrayOf(['vertical', 'horizontal']),
  className: PropTypes.string,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  direction: 'vertical',
  ordered: false,
};

export default List;
