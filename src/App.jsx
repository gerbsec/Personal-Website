import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Writeups from './components/writeups/Writeups';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Markdown2HTML from './components/writeups/markdown/Markdown2HTML';

const homeContainer = <><Header/><Nav/><About/><Experience/><Writeups/><Contact/><Footer/></>

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={homeContainer} />
                <Route path="/writeups" element={<><Writeups/></>}/>
                <Route path="/writeups/:title" element={<><Markdown2HTML /></>}/>
        </Routes>
        </Router >
    );
}
export default App;