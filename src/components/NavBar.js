import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
} from "react-router-dom";
import ToDoApp from "../pages/ToDoApp";
import CalculatorApp from "../pages/CalculatorApp";
import WeatherApp from "../pages/WeatherApp";
import CryptoApp from "../pages/CryptoApp";
import SocialApp from "../pages/SocialApp";
import DasboardApp from "../pages/DasboardApp";
import ChatApp from "../pages/ChatApp";
import BlogApp from "../pages/BlogApp";
import EshopApp from "../pages/EshopApp";
import SpotifyApp from "../pages/SpotifyApp";
import HomePage from "../pages/HomePage";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CalculatorApp">Calculator</Link>
            </li>
            <li>
              <Link to="/ToDoApp">To do</Link>
            </li>
            <li>
              <Link to="/WeatherApp">Actual weather</Link>
            </li>
            <li>
              <Link to="/CryptoApp">Cryptocurrency rates</Link>
            </li>
            <li>
              <Link to="/SpotifyApp">Spotify</Link>
            </li>
            <li>
              <Link to="/SocialApp">Social Network</Link>
            </li>
            <li>
              <Link to="/EshopApp">Eshop</Link>
            </li>
            <li>
              <Link to="/DasboardApp">Dashboard</Link>
            </li>
            <li>
              <Link to="/ChatApp">Chat</Link>
            </li>
            <li>
              <Link to="/BlogApp">Blog</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/ToDoApp">
            <ToDoApp />
          </Route>
          <Route path="/CalculatorApp">
            <CalculatorApp />
          </Route>
          <Route path="/WeatherApp">
            <WeatherApp />
          </Route>
          <Route path="/CryptoApp">
            <CryptoApp />
          </Route>
          <Route path="/SpotifyApp">
            <SpotifyApp />
          </Route>
          <Route path="/SocialApp">
            <SocialApp />
          </Route>
          <Route path="/EshopApp">
            <EshopApp />
          </Route>
          <Route path="/DasboardApp">
            <DasboardApp />
          </Route>
          <Route path="/ChatApp">
            <ChatApp />
          </Route>
          <Route path="/BlogApp">
            <BlogApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
