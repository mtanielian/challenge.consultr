import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"

const Connections = ({ title, connections }) => {
  const { groupAffiliation, relatives } = connections
  return (
    <Box mb={2}>
      <Typography color='primary' variant="h6" component="h6" gutterBottom>{title}</Typography>
      <Typography aria-label='group'><b>Group </b>Affiliation: {groupAffiliation} </Typography>
      <Typography aria-label='relatives'><b>Relatives:</b> {relatives}</Typography>          
    </Box>  
  )
}

Connections.propTypes = {
  title: PropTypes.string.isRequired,
  connections: PropTypes.object.isRequired
}

export default Connections