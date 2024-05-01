import React from "react";
import "../css/header.css"
import Intro from "./Intro";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Header() {
    return (
      <header id="header" className="black-background">
        <div className="container-fluid">
          <div id="logo" className="pull-left">
            <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li ><a href="/">Home</a></li>
         
              <li><a href="about">About</a></li>
              <li><a href="committee.html">Advisory Committee</a></li>
              <li><a href="agenda">Agenda</a></li>
              <li><a href="uploadfile">Upload</a></li>
              <li><a href="login">Login</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  export default Header;