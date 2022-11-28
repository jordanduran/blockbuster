import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout/index';
import {
  SignIn,
  SignUp,
  LandingPage,
  FlowersPage,
} from './components/pages/index';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/flower' element={<FlowersPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
