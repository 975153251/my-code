// import DefaultPage from './index';
// import HomePage from './Home';
import Demo1 from './Demo1';
import Demo2 from './Demo2';

const pageList = [
  //   { pageName: 'Demo2', route: '/demo2' },
  { pageName: 'Demo1', route: '/demo1', component: <Demo1 /> },
  { pageName: 'Demo2', route: '/demo2', component: <Demo2 /> },
//   { pageName: 'HomePage', route: '/home', component: <HomePage /> },
//   { pageName: 'DefaultPage', route: '*', component: <DefaultPage /> },
];

export { pageList };