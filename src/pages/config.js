// import DefaultPage from './index';
// import HomePage from './Home';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';
import Demo6 from './Demo6';
import Demo7 from './Demo7';

const pageList = [
  //   { pageName: 'Demo2', route: '/demo2' },
  { pageName: 'Demo1', route: '/demo1', component: <Demo1 /> },
  { pageName: 'Demo2', route: '/demo2', component: <Demo2 /> },
  { pageName: 'Demo3', route: '/demo3', component: <Demo3 /> },
  { pageName: 'Demo4', route: '/demo4', component: <Demo4 /> },
  { pageName: '法线和顶点索引复用', route: '/demo5', component: <Demo5 /> },
  { pageName: '几何体旋转、缩放、平移变换', route: '/demo6', component: <Demo6 /> },
  { pageName: '材质', route: '/demo7', component: <Demo7 /> },
  //   { pageName: 'HomePage', route: '/home', component: <HomePage /> },
  //   { pageName: 'DefaultPage', route: '*', component: <DefaultPage /> },
];

export { pageList };
