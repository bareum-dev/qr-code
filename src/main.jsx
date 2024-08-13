// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './layout';
import { QrCodeGenerator } from "./qrGenerator";
import { QrScanner } from "./qrScanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <doiv>Hello world!</doiv>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
