import React from "react";
import Loader from "../Components/Loader";
import Movies from "../Components/Movies";
import Search from "../Components/Search";
export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f2113389&s=arcane")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type='all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f2113389&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    return (
      <div className="container content">
        <Search searchMovie={this.searchMovies} />
        {this.state.loading ? <Loader/>  : (<Movies movie={this.state.movies} />) }
      </div>
    );
  }
}
