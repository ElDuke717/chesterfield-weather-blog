import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import WeatherPage from './WeatherPage';
import BlogPage from './BlogPage'; 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chesterfield Weather Blog</h1>
      </header>
      <Router>
        <div>
          {/* Your navigation links here */}
          <nav>
            <ul>
              <li><Link to="/weather">Weather</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* Default route */}
            <Route path="/" element={<WeatherPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
