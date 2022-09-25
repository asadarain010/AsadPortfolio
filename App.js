import './App.css';
import './index.css'
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Experience from './Component/Experience/Experience';
import Contact from './Component/Contact/Contact';
import Testimonial from './Component/Testimonial/Testimonial';
import Footer from './Component/Footer/Footer';
import Services from './Component/Services/Services';
import Portfolio from './Component/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
