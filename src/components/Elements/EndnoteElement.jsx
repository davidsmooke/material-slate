import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer'
  }
}))

const EndnoteElement = ({ element, onClick, attributes, children }) => {
  const classes = useStyles()
  return (
    <Tooltip title={`${element.data.body}`} >
      <sup className={classes.root} {...attributes} onClick={(event) => onClick && onClick({ event, element })}>{attributes.number || 'x'} {children}</sup>
    </Tooltip>
  )
}

export default EndnoteElement