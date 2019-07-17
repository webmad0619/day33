import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Navigation from './Navigation'
import NotLoggedIn from './notLoggedin';
import NotFound404 from './notFound404';
import MovieDetail from './MovieDetail';

class App extends Component {
  loggedIn = false

  constructor() {
    super()

    this.state = {
      movies: [
        {
          name: "a",
          year: 1998,
          director: "d1"
        },
        {
          name: "Batman",
          year: 1998,
          director: "d2"
        },
        {
          name: "EL nombere de la rosa",
          year: 2000,
          director: "d3"
        },
        {
          name: "d",
          year: 2005,
          director: "d4"
        },
        {
          name: "e",
          year: 2010,
          director: "d5"
        }
      ]
    }
  }

  render = () => {
    var loggedIn = true
    return (
      <div className="App">
        <Navigation></Navigation>
        <header className="App-header">
          {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
          <Switch>
            <Route exact path='/home' render={() => {
              return <Home movies={this.state.movies}></Home>
            }}/>
            <Route exact path='/viewMovie/:chosenMovie' render={(props) => {
              var chosenMovie = props.match.params.chosenMovie
              return <MovieDetail movie={this.state.movies[chosenMovie]}></MovieDetail>
            }}/>
            {/* <Route path='/about/:id/:year' component={About} /> */}
            <Route path='/about/:stage' component={About} />

            <Route exact path="/" render={() => {
              return loggedIn ? <Redirect to="/home" /> : <NotLoggedIn />
            }} />
            <Route component={NotFound404} />
          </Switch>

        </header>
      </div>
    );
  }
}

export default App;
