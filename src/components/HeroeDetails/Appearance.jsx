import PropTypes from 'prop-types'
import { Box, Typography } from "@mui/material"

const Appearance = ({ title, appearance }) => {
  const { race, gender, height, weight } = appearance
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography><b>Race:</b> {race} </Typography>
      <Typography><b>Gender:</b> {gender} </Typography>
      <Typography><b>Height:</b> {height[1]} <b>Weight:</b> {weight[1]}</Typography>
    </Box>
  )
}

Appearance.propTypes = {
  title: PropTypes.string.isRequired,
  appearance: PropTypes.object.isRequired
}

export default Appearance