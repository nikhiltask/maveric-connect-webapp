import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/LoginPage';
import Navbar from './Components/Header';
import Header from './Components/Header';

import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <LoginPage/>
        <Header/>
        <LoginPage/>
      <Footer/>
    </div>
  );
}

export default App;
