import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBolt } from "react-icons/fa";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer } from "./components";

import { Login, Mypage, Sell } from "./pages";

const App = () => {
  const active = true;
  return (
    <div>
      <BrowserRouter>
        {active ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div>
          <FaBolt />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
