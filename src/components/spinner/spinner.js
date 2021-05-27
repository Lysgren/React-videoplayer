import React from 'react'

import SpinnerSvg from '../../assets/circle-notch-solid.svg'
import classes from './spinner.module.css'

const functionalComponent = props => {
  return (
      <img className={classes.spinner} src={SpinnerSvg} alt='Spinner' />
  )
}

export default functionalComponent