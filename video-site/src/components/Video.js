import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div>
      <iframe src={this.props.singleVideo.assets.videos["480p"]} width="200" height="200"/>
      </div>
      )
  }
}

export default Video;
