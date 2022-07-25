// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import Descsection from './components/Descsection';
import Trainers from './components/Trainers';
import Classes from './components/Classes';
import Timing from './components/Timing';
import Contactsection from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }
  , []);
  return (
    <>
      <Navbar />
      <Herosection />
      <Descsection />
      <Trainers />
      <Classes />
      <Timing />
      <Contactsection />
      <Footer />
    </>
  );
}

export default App;
