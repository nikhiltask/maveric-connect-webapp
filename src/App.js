import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import Navbar from './Components/Header';
import Header from './Components/Header';

import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <SignupPage/>
//         <Header/>
//         <LoginPage/>
//         <SignupPage/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './Pages/HomePage/HomePage';
import Signup from './Components/signup/Signup';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/signup" element={ <Signup /> } />
        {/* <Route path="/signup">" element={ <Signu/> } /> */}
        {/* <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/product/:catId" element={ <ProductPage/> } /> */}
      </Routes>
    </Router>
  );
}

export default App;