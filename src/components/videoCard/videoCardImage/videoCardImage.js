import classes from './videoCardImage.module.css'

const videoCardImage = props => {
  return (
    <div className={classes.imgWrap}>
      <img className={classes.image} src={props.image} alt={props.imageAlt} ></img>
      <p className={classes.description}>{props.description}</p>
    </div>
  )
}

export default videoCardImage