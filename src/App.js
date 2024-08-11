import React from 'react'
import { Route ,RouterProvider,Routes} from 'react-router';
import {router } from './router/router.js'
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contant.js';
import Footer from './components/Fotter.js';
import BlogList from './components/BlogList.js';
import BlogIntroduction from './components/BlogIntroduction';
import './index.scss';

function App() {
  return (
     <>
      <RouterProvider router={router}/>
     </>
    
    
  );
}

export default App;
