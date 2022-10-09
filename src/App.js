import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultPage from './pages';
import HomePage from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<DefaultPage />} />
          {/* <Route
            path="/home"
            render={() => {
              return <HomePage />;
            }}
          ></Route> */}
        </Routes>
      </Router>
      {/* <div>123</div> */}

      {/* <canvas id="webgl" width={500} height={500} style={{ backgroundColor: 'blue' }}></canvas> */}
    </div>
  );
}

export default App;
