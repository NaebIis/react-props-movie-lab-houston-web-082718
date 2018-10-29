import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((movie, idx) => <MovieCard key={idx} {...movie} />);

    // map over your movieData array and return the correct
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
