import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import LandingPage from './components/pages/landing-page';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
