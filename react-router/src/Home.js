import React, { Component } from 'react';
import Calculator from './Calculator';
import { Link } from 'react-router-dom';

class home extends React.Component {
  constructor(props) {
    super()

    this.state = {
      movies: props.movies
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map ((movie, idx) => {
            return <li key={idx}><Link to={"/viewMovie/" + idx}>{movie.name} {movie.director} ({movie.year})</Link></li>
          })}
        </ul>
        
        
        
        {/* <h3>Home</h3> */}

        {/* <Calculator></Calculator> */}
      </div>
    )
  }
}

export default home;