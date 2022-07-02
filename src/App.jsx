import React from 'react'
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Writeups from './components/writeups/Writeups';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';


export const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Writeups />
            <Contact />
            <Footer />
        </>
    );
}

export default App;