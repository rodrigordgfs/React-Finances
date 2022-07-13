import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/Home'
import './styles/reset.css'
import './styles/tailwind.css'
import './styles/global.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
)
