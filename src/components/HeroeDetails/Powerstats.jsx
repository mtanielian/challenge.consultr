import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Powerstats = ({ title, powerstats }) => {
  const { intelligence, strength, speed, durability, power, combat } = powerstats
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography aria-label='intelligence'><b>Intelligence:</b> {intelligence} </Typography>
      <Typography aria-label='strength'><b>Strength:</b> {strength} </Typography>
      <Typography aria-label='speed'><b>Speed:</b> {speed} </Typography>
      <Typography aria-label='durability'><b>Durability:</b> {durability} </Typography>
      <Typography aria-label='power'><b>Power:</b> {power} </Typography>
      <Typography aria-label='combat'><b>Combat:</b> {combat}</Typography>
    </Box>  
  )
}

Powerstats.propTypes = {
  title: PropTypes.string.isRequired,
  powerstats: PropTypes.object.isRequired
}

export default Powerstats