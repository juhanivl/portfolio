import React, { Component } from 'react';

export default class Home extends Component {
  /*Show current date and time at the bottom*/

  constructor(props){
    super(props);

    this.state = {
      titleInput: "",
      errorMessage: "",
      movieData: {},
      date: "" + new Date()
    }

    this.handleQuery = this.handleQuery.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBuildMovieInfo = this.handleBuildMovieInfo.bind(this);
    this.calcTimeSinceRelease = this.calcTimeSinceRelease.bind(this);
  }

  //when title changes update the state
  handleChange(event){
    this.setState({
      titleInput: event.target.value
    })
  }

  //when movie is queried based on the title use OMDB to get the movie data
  handleQuery(){
    //http://www.omdbapi.com/?t=Wire

    if(this.state.titleInput){
      var title = this.state.titleInput
      var url = 'http://www.omdbapi.com/?t='+title

      fetch(url,{
        method: 'get',
        mode: 'cors'
      })
      .then((response) => {
        // Convert to JSON
        return response.json();
      })
      .then((data) => {
        if(data.response == false){
          this.setState({errorMessage: data.Error})
        }else{
          this.setState({movieData: data})
        }
      })
      .catch((err) => {
      });
    }
  }

  //Calculate time since since release and return it
  calcTimeSinceRelease(releaseDate){

    var releaseDate = releaseDate.split(" ")
    var month;
    switch (releaseDate[1]) {
      case "Jan":
          month = 1;
          break;
      case "Feb":
          month = 2;
          break;
      case "Mar":
          month = 3;
          break;
      case "Apr":
          month = 4;
          break;
      case "May":
          month = 5;
          break;
      case "Jun":
          month = 6;
          break;
      case "Jul":
          month = 7;
      case "Aug":
          month = 8;
          break;
      case "Sep":
          month = 9;
          break;
      case "Oct":
          month = 10;
      case "Nov":
          month = 11;
          break;
      case "Dec":
          month = 12;
          break;
      default:
          month = "Couldn't find mathing month";
    }
    var daysSinceRelease = Number(releaseDate[0]) + month*30 + Number(releaseDate[2]*365)

    var currentDate = new Date();
    var days = currentDate.getDay();
    var months = currentDate.getMonth()*30;
    var years = currentDate.getFullYear()*365;
    var currentDateInDays = days + months + years

    var diffInDays = currentDateInDays - daysSinceRelease;

    var timeSince = {
      yearsSince: (diffInDays/365),
    }
    return timeSince;
  }

  //build a nice JSX component based on the movieData and time since it was released
  handleBuildMovieInfo(){
    let timeSinceRelease = this.calcTimeSinceRelease(this.state.movieData.Released)
    let builtMovieInfo = <div>
      <p>{this.state.movieData.Title}</p>
      <p>{this.state.movieData.Released}</p>
      <p>{this.state.movieData.Genre}</p>
      <p>{this.state.movieData.Year}</p>
      <p>{this.state.movieData.imdbRating}</p>
      <p>{this.state.movieData.Awards}</p>
      <h4>{this.state.movieData.Title} came out<p>{timeSinceRelease.yearsSince}</p>  years ago</h4>
      </div>
    return builtMovieInfo;
  }

  render(){
    let movieInfo = <div>Loading...</div>
    if(this.state.movieData.hasOwnProperty("Title") &&
        this.state.movieData.hasOwnProperty("Released") &&
        this.state.movieData.hasOwnProperty("Genre") &&
        this.state.movieData.hasOwnProperty("Year") &&
        this.state.movieData.hasOwnProperty("imdbRating") &&
        this.state.movieData.hasOwnProperty("Awards")){
       movieInfo = this.handleBuildMovieInfo()
    }else{
      movieInfo = <div>No movie info</div>
    }

    return(
      <div>
        <h1>Well hello there!</h1>
        <p>Type in the movie name and I'll show you all you need to know about the movie and time since it came out.</p>
        <input type="text" value={this.state.titleInput} id="titleInput"  onChange={this.handleChange} placeholder="Movie title"></input>
        <button onClick={this.handleQuery}>Search</button>
        {movieInfo}
        <p>Today is {this.state.date}</p>
      </div>

    );
  }
}
