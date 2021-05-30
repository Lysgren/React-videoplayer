import Spinner from '../spinner/spinner'
import VideoCard from '../videoCard/videoCard'

import classes from './movieList.module.css'

const MovieList = props => {
  
  let videos = props.videos.map(video => {
    return (
      <VideoCard
        key={video.id}
        title={video.name}
        description={video.description}
        image={video.image}
        video={video.video}
        setActiveVideo={() => props.setActiveVideo(video.video)}
      />
    )
  })

  if (videos.length === 0 ) {
    videos = <Spinner />
  }

  return (
    <ul className={classes.movieList}>
      { videos }
    </ul>
  )
}

export default MovieList