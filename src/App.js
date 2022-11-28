import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import LandingPage from './components/pages/landing-page';
import SignIn from './components/pages/signin-page';
import SignUp from './components/pages/signup-page';
import Footer from './components/layout/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
