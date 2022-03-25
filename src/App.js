import logo from './logo.svg';
import './App.css';
import SignupPage from './Component/Signup';
import LoginPage from './Component/LoginPage';
import Navbar from './Components/Header';
import Header from './Components/Header';

import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <SignupPage/>
        <Header/>
        <LoginPage/>
      <Footer/>
    </div>
  );
}

export default App;
