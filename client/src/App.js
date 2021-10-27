import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header.com";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/contact' exact component={Contact} />
    </BrowserRouter>
  );
}
