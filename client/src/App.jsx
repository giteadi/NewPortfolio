import { Routes,Route } from 'react-router-dom';
import Page from './components/Page'
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
function App() {


  return (
    <div>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About />} />
   
        </Routes>
    </div>
  );
}

export default App
