import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeContext';
import Home from './components/Home';
import Meanderings from './components/Meanderings';
import './App.css';

function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/meanderings"><button>Meanderings</button></Link>
            <button>Twitter</button>
            <button>Games</button>
            <button onClick={toggleTheme}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meanderings" element={<Meanderings />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
