import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from '../lib/styles.css';

const Icon = ({icon}) =>
  <span className={
    classnames(styles.icon, styles[icon])
  } />;


Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export { Icon };
