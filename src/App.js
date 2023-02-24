import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './components/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
