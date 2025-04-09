import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import AudioWord from './pages/AudioWord';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/LearnWithCuckoo" element={<Home />} />
                <Route path="/audio-word" element={<AudioWord />} />
                {/* Przekazujemy topic jako parametr w URL */}
                {/*<Route path="/lesson/:topic" element={<Lesson />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
