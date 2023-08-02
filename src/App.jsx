import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
import Home from './pages/Home/Home';

// routing
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
