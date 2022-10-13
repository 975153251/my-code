// Header
import { useNavigate } from 'react-router';

import styles from './index.module.scss';

const Header = props => {
  const { title } = props;
  const navigate = useNavigate();

  // 跳转首页
  const goHome = () => {
    navigate('/home');
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.defaultBtn} onClick={goHome}>
        去首页
      </div>
      <span className={styles.title}>{title || 'title'}</span>
    </div>
  );
};

export default Header;
