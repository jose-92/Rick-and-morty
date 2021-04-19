import React from "react";
import rick from "./images/rick.jpg";
import rick2 from "./images/rick2.jpg";
import rick3 from "./images/rick3.jpg";
import rick4 from "./images/rick4.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./CSS/home.css";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={rick}></img>
        </div>
        <div className="contenedor-hero">
          <img className="hero" src={rick2}></img>
          <img className="hero" src={rick3}></img>
          <img className="hero" src={rick4}></img>
        </div>
        <div>
          <ul className="container-btn">
            <li>
              <Link to="/app" className="btn btn-success">
                Obtener personaje
              </Link>
            </li>

            <li>
              <a href="/series" className="btn btn-success">
                Obtener Series
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
