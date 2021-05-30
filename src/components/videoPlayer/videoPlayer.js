import classes from './videoPlayer.module.css'

const VideoPlayer = props => {
  let videoPlayer = null

  if (props.activeVideo) {
    videoPlayer = (
      <video
        className={classes.videoPlayer}
        controls
        autoPlay
        src={props.activeVideo}
      />
    )
  }

  return (
    <div className={classes.videoContainer}>
      { videoPlayer }
    </div>
  )
}

export default VideoPlayer