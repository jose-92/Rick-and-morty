import React from "react";
import "./CSS/episodios.css";
import Loader from "./Loader";

class Series extends React.Component {
  state = {
    loading: true,
    error: null,
    next: 1,
    data: {
      results: [],
    },
  };
  componentDidMount() {
    this.episodios();
  }

  episodios = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        ` https://rickandmortyapi.com/api/episode?page=${this.state.next}`
      );
      const data = await response.json();
      console.log("series", data);
      this.setState({
        loading: false,
        data: data,
        next: this.state.next + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          <a href="/home">HOME</a>
          <div className="series">
            {this.state.data.results.map((er) => {
              return (
                <div key={er.id}>
                  <div className="contenedor-episodios" key={er.id}>
                    <h4>
                      {er.id}. {er.episode}
                      <p className="episodios">{er.name}</p>
                    </h4>
                    <a className="btn btn-success bot" href="/app">
                      ver personajes
                    </a>
                  </div>
                </div>
              );
            })}
            <a className="mas-pisodios" onClick={() => this.episodios()}>
              MAS SERIES
            </a>
          </div>
        </div>
        {this.state.loading && (
          <div>
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default Series;
