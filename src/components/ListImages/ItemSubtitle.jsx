import PropTypes from 'prop-types'
import { Stack, Typography } from '@mui/material'


const ItemSubtitle = ({ appearance }) => {
  return (
    <Stack>
      <Typography variant="body1" component="div" aria-label='height'>
        Height: {appearance.height[1]}
      </Typography>
      <Typography variant="body1" component="div" aria-label='weight'>
        Weight: {appearance.weight[1]}
      </Typography>
    </Stack>
  )
}

ItemSubtitle.propTypes = {
  appearance: PropTypes.object.isRequired
}

export default ItemSubtitle