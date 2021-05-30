import classes from './videoPlayer.module.css'

const VideoPlayer = props => {
  let videoPlayer = null

  if (props.activeVideo) {
    videoPlayer = (
      <video
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