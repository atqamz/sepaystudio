import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header.com";
import Home from "./pages/Home/Home";
import Gamification from "./pages/products/Arvr/Arvr";
import Arvr from "./pages/products/Arvr/Arvr";
import Games from "./pages/products/Games/Games";
import BlogList from "./pages/BlogList/BlogList";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/products/gamification' exact component={Gamification} />
      <Route path='/products/arvr' exact component={Arvr} />
      <Route path='/products/games' exact component={Games} />
      <Route path='/blogs' component={BlogList} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>
  );
}
