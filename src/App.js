import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
