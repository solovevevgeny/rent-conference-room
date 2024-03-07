import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {CalendarPage} from "./pages/CalendarPage";
import {CreateEventPage} from "./pages/CreateEventPage";

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import {Provider, useSelector} from "react-redux";
import store from "./store/store";
import { UseSelector } from 'react-redux';



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
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
