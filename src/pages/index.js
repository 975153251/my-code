// 默认页面
import styles from './index.module.scss';
import { useNavigate } from 'react-router';

const DefaultPage = () => {
  const navigate = useNavigate();
  // 跳转首页
  const goHome = () => {
    navigate('/home');
  };

  return (
    <div className={styles.defaultContainer}>
      <div className={styles.defaultBtn} onClick={goHome}>去首页</div>
    </div>
  );
};

export default DefaultPage;
