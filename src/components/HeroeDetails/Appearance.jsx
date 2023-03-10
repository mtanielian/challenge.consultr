import PropTypes from 'prop-types'
import { Box, Typography } from "@mui/material"

const Appearance = ({ title, appearance }) => {
  const { race, gender, height, weight } = appearance
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography aria-label='race'><b>Race:</b> {race} </Typography>
      <Typography aria-label='gender'><b>Gender:</b> {gender} </Typography>
      <Typography aria-label='heightWeight'><b>Height:</b> {height[1]} <b>Weight:</b> {weight[1]}</Typography>
    </Box>
  )
}

Appearance.propTypes = {
  title: PropTypes.string.isRequired,
  appearance: PropTypes.object.isRequired
}

export default Appearance