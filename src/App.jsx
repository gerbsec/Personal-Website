import React from 'react'
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';


export const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;