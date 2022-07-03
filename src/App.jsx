import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Writeups from './components/writeups/Writeups';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Writeup from './components/writeups/Writeup';

const homeContainer = <><Header /><About /><Experience /><Writeups limit={6} /><Contact /><Footer /></>

export const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={homeContainer} />
                <Route path="/writeups" element={<><Writeups /></>} />
                <Route path="/writeups/:title" element={<><Writeup /></>} />
            </Routes>
        </Router >
    );
}
export default App;