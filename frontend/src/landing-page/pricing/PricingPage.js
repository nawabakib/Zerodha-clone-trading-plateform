import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero'; 
import Navbar from '../Navbar';
import Footer from '../Footer';
import AccountOpeningCharges from './AccountOpeningCharges';



function PricingPage() {
    return (
        <>
            <Hero />
            <Brokerage />
            <AccountOpeningCharges />
            

            
        </>
    );
}

export default PricingPage;