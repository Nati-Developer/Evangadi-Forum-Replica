import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { UserProvider } from './context/UserContext';
// import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
  {/* <BrowserRouter> */}
    <UserProvider>
      <App />
    </UserProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { UserProvider } from "./context/UserContext";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <UserProvider>
//         <App />
//       </UserProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );