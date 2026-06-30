import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ThemeProvider } from "./component/ThemeContext";
import Home from './routes/Home';

function App() {
  // Map all routes to our unified high-end storytelling homepage,
  // passing appropriate section targets.
  const router = createHashRouter([
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'about', element: <Home scrollTarget="about" /> },
    { path: 'project', element: <Home scrollTarget="projects" /> },
    { path: 'contact', element: <Home scrollTarget="contact" /> },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
