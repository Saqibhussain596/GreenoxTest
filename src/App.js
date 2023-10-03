import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ExternalLink from './components/ExternalLink'; // Import the ExternalLink component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="content-container">
          <Routes>
            {/* Add a route for external links */}
            <Route path="/external/:url" element={<ExternalLinkPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Create a new component to handle external links
function ExternalLinkPage() {
  const { url } = useParams();
  
  return <ExternalLink url={decodeURIComponent(url)} />;
}

export default App;
