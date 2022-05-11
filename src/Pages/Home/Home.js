import React from 'react';
import Banner from './Banner';
import Info from './Info';

import Services from './Services';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div className=''>
            <Banner> </Banner>
            <Info > </Info>
            <Services> </Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials> </Testimonials>
            <Contact> </Contact>
            <Footer> </Footer>
        </div>
    );
};

export default Home; <h2>This is home</h2>