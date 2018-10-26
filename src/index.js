import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../lib/styles.css';

const Icon = ({icon, ariaHidden, title, flex}) =>
  <span
    className={
      classnames(styles.icon, styles[icon], {[`${styles.flex}`]: flex})
    }
    aria-hidden
    title={title}
  />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  flex: PropTypes.bool
};

export { Icon };
