import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const ItemTitle = ({ title }) => {
  return (
    <Typography variant="h5" component="div" sx={{fontWeight: 'bold'}}>
      {title}
    </Typography>
  )
}

ItemTitle.propTypes = {
  title: PropTypes.string.isRequired
}


export default ItemTitle