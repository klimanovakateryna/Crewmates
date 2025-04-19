import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import GalleryPage from './pages/GalleryPage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/create">Create a Kitten</a></li>
            <li><a href="/gallery">Kitten Gallery</a></li>
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/crewmates/:id" element={<DetailPage />} />
            <Route path="/crewmates/:id/edit" element={<EditPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;