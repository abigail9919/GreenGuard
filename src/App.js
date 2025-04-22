import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitlePage from "./pages/TitlePage/TitlePage";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Home from "./pages/Home/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
