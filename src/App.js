import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CSS/css.css";
import { BrowserRouter, Link } from "react-router-dom";
import Loader from "./Loader";

class App extends React.Component {
  state = {
    loading: true,
    next: 1,
    data: {
      results: [],
    },
  };
  componentDidMount() {
    this.characters();
  }

  characters = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.next}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: data,
        next: this.state.next + 1,
      });
      console.log("personajes", data);
    } catch (error) {
      console.error("erro", error);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="contenedor">
          <h1>PERSONAJES</h1>
          <a href="/home" className="btn btn-success">
            Home
          </a>
          <ul className="row">
            {this.state.data.results.map((per) => {
              return (
                <div className="col-6 col-md-3 " key={per.id}>
                  <p>
                    {per.id}. {per.name}
                    <img src={per.image}></img>
                  </p>
                </div>
              );
            })}
          </ul>
          <button onClick={() => this.characters()} className="btn btn-success">
            SIGUIENTES PERSONAJES
          </button>
          {this.state.loading && (
            <div>
              <Loader />
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
