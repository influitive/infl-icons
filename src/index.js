import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './styles.css';

const Icon = ({icon, flex}) =>
  <span className={
    classnames(styles.icon, styles[icon], {[`${styles.flex}`]: flex})
  } />;


Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  flex: PropTypes.bool
};

export { Icon };
