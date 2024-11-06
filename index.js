import ReactDOM from "react-dom/client";
import React from "react";
// import { createRoot } from 'react-dom/client';
import App from './Component/App';
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Amthal from "./Component/Amthal";
import Header from "./Component/Header";
import Gallary from "./Component/Gallary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path = "/Amthal" element ={<Amthal/>}/>
          <Route path = "/Gallary" element ={<Gallary/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );


