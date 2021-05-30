import classes from './videoCardImage.module.css'

const videoCardImage = props => {
  return (
    <div className={classes.imgWrap}>
      <img className={classes.image} src={props.image} alt={props.imageAlt} ></img>
      <button onClick={props.onClick} className={classes.description}>{props.description}</button>
    </div>
  )
}

export default videoCardImage