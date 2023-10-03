import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  AuthProvider  from './contexts/Auth/authprovider';
import reportWebVitals from './reportWebVitals';
import LoadingProvider from './contexts/loading/loadingcontext';
import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
      <LoadingProvider>
          <RouterProvider router={router}/>
      </LoadingProvider>
  </AuthProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
