import React from "react";

import './index.css'
import {  RouterProvider, createHashRouter } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
function App() {

  let router = createHashRouter([
        { path: '/', element: <Home />  },
        { path: 'home', element:<Home />  },
        { path: 'about', element: <About />  },
        { path: 'project', element: <Project /> },
        { path: 'contact', element: <Contact />  },
      
    
  ])



  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
