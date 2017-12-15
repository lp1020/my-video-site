console.log('main.js is connected');
function fetchAllVideos(e) {
  console.log('attempt');
  e.preventDefault();
  fetch('https://api.sproutvideo.com/v1/videos', {
     method: 'GET',
     headers: {
   //    'origin': 'request.com',
   //    'access-control-allow-headers': 'Authorization',
      'Content-Type': 'application/json',
      'Authorization': 'Basic SproutVideo-Api-Key:6a6a8b87afb9552fd1473e22ab5cfc70',
   },
    })
.then((response) => {
  return response.json()
}).then((responseJson) => {
  this.setState((prevState) => {
    return {
      videos: responseJson.data.videos,
    }
  })
})
}
