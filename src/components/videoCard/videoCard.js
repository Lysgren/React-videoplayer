import VideoCardImage from './videoCardImage/videoCardImage'
import Button from '../button/button'

import classes from './videoCard.module.css'

const Videocard = props => {
  return (
      <li className={classes.videoCard}>
        <VideoCardImage 
          image={props.image}
          imageAlt={'Poster för ' + props.title}
          description={props.description}
          onClick={props.setActiveVideo}
          />
        <h2 className={classes.title}>{props.title}</h2>
        <Button onClick={props.setActiveVideo}>Spela video</Button>
      </li>
  )
}

export default Videocard