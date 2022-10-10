import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultPage from './pages';
import HomePage from './pages/Home';

import { pageList } from './pages/config';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/demo1" element={<Demo1 />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<DefaultPage />} /> */}
          {pageList.map(item => {
            return <Route path={item.route} element={item.component} />;
          })}
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </Router>
      {/* <div>123</div> */}

      {/* <canvas id="webgl" width={500} height={500} style={{ backgroundColor: 'blue' }}></canvas> */}
    </div>
  );
}

export default App;
