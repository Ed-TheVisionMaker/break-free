import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import './global.css';

// const router = createBrowserRouter([
//   {
//     path: '/break-free',
//     element: <App />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
