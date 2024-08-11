import React from 'react'
import Header from '../components/Header.js'
import AboutMe from '../components/AboutMe.js';
import Skills from '../components/Skills.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contant.js';
import Footer from '../components/Fotter.js';
import BlogIntroduction from '../components/BlogIntroduction';

const  Layout =()=> {
  return (
    <>
       <div className="App">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <BlogIntroduction />
        <Contact />
        <Footer />
      </div>   
    </>
   
  )
}
export default Layout;
