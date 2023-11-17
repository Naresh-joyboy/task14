//import logo from './logo.svg';
import './App.css';
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import cart from './components/cart';
import SignUp from './components/front/Header/Signup';
const App = () => {
  const { productItems } = data;

  return (
    <div>
    
    <Router>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
    </div>
  );
};

export default App;
