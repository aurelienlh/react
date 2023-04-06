import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT, Header} from './container';
import { Cta, Brand, Navbar} from './components'
import './app.css';
import './index.css'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />

        </div>
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
        
    </div>
  )
}

export default App