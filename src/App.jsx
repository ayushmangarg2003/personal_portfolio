import React from 'react'
import './App.css'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Certificates from './sections/Certificates/Certificates'
import Projects from './sections/Projects/Projects'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div className='app'>
            <div className="section">
                <Home />
            </div>

            <div className="section">
                <About />
            </div>

            <div className="section">
                <Certificates />
            </div>

            <div className='ProjectSection'>
                <Projects />
            </div>
            <Footer/>
        </div>
    )
}

export default App