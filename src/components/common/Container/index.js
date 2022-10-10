// Container

import styles from './index.module.scss';

const Container = props => {
  return <div id={'viewBox'} className={styles.bodyContainer}>{props.children}</div>;
};

export default Container;
