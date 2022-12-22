import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Biography = ({ title, biography }) => {
  const { fullName, alterEgos, publisher, alignment } = biography
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography aria-label='fullName'><b>Full Name:</b> {fullName}</Typography>
      <Typography aria-label='alterEgos'><b>Alter Egos:</b> {alterEgos} </Typography>
      <Typography aria-label='publisher'><b>Publisher:</b> {publisher} </Typography>
      <Typography aria-label='alignment'><b>Alignment:</b> {alignment}</Typography>
    </Box>  
  )
}

Biography.propTypes = {
  title: PropTypes.string.isRequired,
  biography: PropTypes.object.isRequired
}

export default Biography