// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import Descsection from './components/Descsection';
import Trainers from './components/Trainers';
import Classes from './components/Classes';
import Timing from './components/Timing';
import Contactsection from './components/Contact';
import Footer from './components/Footer';
function App() {
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
