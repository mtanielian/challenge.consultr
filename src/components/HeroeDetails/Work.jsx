import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Work = ({ title, work }) => {
  const { occupation, base } = work
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography><b>Occupation:</b> {occupation} </Typography>
      <Typography><b>Base:</b> {base}</Typography>
    </Box>  
  )
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  work: PropTypes.object.isRequired
}

export default Work