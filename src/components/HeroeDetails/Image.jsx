import PropTypes from 'prop-types'
import { CardMedia } from "@mui/material"

const Image = ({ name, image }) => {
  return (
    <CardMedia
      component="img"
      image={image}
      alt={name}
      className='animate__animated animate__fadeInLeft'
      loading="lazy"
    />
  )
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Image