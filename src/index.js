import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../lib/styles.css';

const Icon = ({icon, flex}) =>
  <span className={
    classnames(styles.icon, styles[icon], {[`${styles.flex}`]: flex})
  } />;


Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  flex: PropTypes.bool
};

export { Icon };
