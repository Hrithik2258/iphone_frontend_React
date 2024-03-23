import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights';
import Model from './components/Model'
import Features from './components/Features';
import HowItWorks from './components/HowITWorks';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
     <main className='bg-black'>
<Navbar/>
<Hero/>
<Highlights/>
<Model/>
<Features/>
<HowItWorks/>
<Footer/>
     </main>
    </div>
  )
}

export default App