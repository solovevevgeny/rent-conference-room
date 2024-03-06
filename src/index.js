import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {CalendarPage} from "./pages/CalendarPage";
import {CreateEventPage} from "./pages/CreateEventPage";

import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <CalendarPage />
  },
  {
    path: '/create',
    element: <CreateEventPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
