import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import Home from './components/HomePage.jsx'
import About from './components/AboutMe.jsx'
import PeonComponent from './components/PeonComponent.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import Resume from './components/Resume.jsx';
import ResumeView from './components/ResumeView.jsx';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/peon',
        element: <PeonComponent />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/ResumeView',
        element: <ResumeView />,
      },
    ],
  },
]);ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
