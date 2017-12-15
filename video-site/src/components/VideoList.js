import React, { Component } from 'react';
import Video from './Video.js';

class VideoList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((video, i) => {
          return <Video singleVideo={video} key={video.id}/>
        })}
      </div>
      )
  }
}

export default VideoList;
