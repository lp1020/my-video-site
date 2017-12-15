import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import cors from 'cors';
import VideoList from './components/VideoList';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    videos: [],
    inputVideoValue:'',
    myHeaders: new Headers ({
  'Access-Control-Allow-Headers': 'SproutVideo-Api-Key',
  'Content-Type': 'application/json',
  'SproutVideo-Api-Key': '6a6a8b87afb9552fd1473e22ab5cfc70',
}),
  };
  // this.handleInputVideoChange = this.handleInputVideoChange.bind(this);
  // this.handleVideoSubmit = this.handleVideoSubmit.bind(this);
  // this.handleVideoEdit = this.handleVideoEdit.bind(this);
  // this.handleVideoDelete = this.handleVideoDelete.bind(this);
}

componentDidMount() {
  this.fetchAllVideos()
}



fetchAllVideos() {
  fetch('https://api.sproutvideo.com/v1/videos', {
     method: 'GET',
     headers: this.state.myHeaders,
    })
.then(response => {
  return response.json()
}).then(responseJson => {
  console.log(responseJson);
  this.setState((prevState) => {
    return {
      videos: responseJson.videos,
    }
  })
  console.log(responseJson);
})
}



render() {
  return(
    <div>
    <div>
    <h1>WELCOME TO THE VIDEO APP</h1>
    </div>
    <div>
    <VideoList
    data={this.state.videos} />
    </div>
    </div>
    )
}
}

export default App;
