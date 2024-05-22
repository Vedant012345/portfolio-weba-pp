import React from 'react'
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import About from './About';
import Myportfolio from './componants/Myportfolio';
import Experience from './componants/Experience';
import Contact from './componants/Contact';
import toast, { Toaster } from 'react-hot-toast';
import Cards from './Cards';
import Xcards from './componants/Xcards';



function App() {
  return (
    <>
    <div><Navbar />
    <Home/>
    <About/>
    <Myportfolio/>
    <Experience/>
    <Contact/>
    </div>
    <Toaster />
    </>
  )
}

export default App