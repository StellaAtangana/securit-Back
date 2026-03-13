import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Inscription from './pages/inscription';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <h1>📝 SecureNotes (Front-end)</h1>
        <Routes>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;