import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Powerstats = ({ title, powerstats }) => {
  const { intelligence, strength, speed, durability, power, combat } = powerstats
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography><b>Intelligence:</b> {intelligence} </Typography>
      <Typography><b>Strength:</b> {strength} </Typography>
      <Typography><b>Speed:</b> {speed} </Typography>
      <Typography><b>Durability:</b> {durability} </Typography>
      <Typography><b>Power:</b> {power} </Typography>
      <Typography><b>Combat:</b> {combat}</Typography>
    </Box>  
  )
}

Powerstats.propTypes = {
  title: PropTypes.string.isRequired,
  powerstats: PropTypes.object.isRequired
}

export default Powerstats