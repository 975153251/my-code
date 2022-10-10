// Home页面
import { useNavigate } from 'react-router';
import { pageList } from '../config';
import styles from './index.module.scss';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      {pageList.map(item => {
        return (
          <div
            className={styles.demoBtn}
            onClick={() => {
              // 跳转对应demo路由
              navigate(item.route);
            }}
          >
            {item.pageName}
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
