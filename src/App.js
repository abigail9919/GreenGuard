import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import ManageShows from "./pages/ManageShows/ManageShows";
import ManageVideos from "./pages/ManageVideos/ManageVideos";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-shows" element={<ManageShows />} />
          <Route path="/manage-videos" element={<ManageVideos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
