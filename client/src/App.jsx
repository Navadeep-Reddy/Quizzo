import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Attend from './pages/Attend';
import Login from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} /> {/* Redirects root to /login */}
        <Route path="/login" element={<Login />} />
        <Route path="/attend/:user_id/:quizz_id" element={<Attend />} />
        <Route path="/home/:user_id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
