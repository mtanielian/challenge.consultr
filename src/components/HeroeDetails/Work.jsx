import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Work = ({ title, work }) => {
  const { occupation, base } = work
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography aria-label='occupation'><b>Occupation:</b> {occupation} </Typography>
      <Typography aria-label='base'><b>Base:</b> {base}</Typography>
    </Box>  
  )
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  work: PropTypes.object.isRequired
}

export default Work