import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import Awards from './Awards';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Login from '../pages/Login';
import Signup from '../pages/SignUp';



function HomePage() {
    return ( 
        
        <> 
   <Signup/>

         <Hero />
        <Awards />
        <Stats/>
        <Pricing />
        <Education/>
        <OpenAccount />
        
        </>
     );
}

export default HomePage;