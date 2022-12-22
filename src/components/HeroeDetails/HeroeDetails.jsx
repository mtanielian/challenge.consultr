import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { HeroContext } from '../../contexts/HeroeContext'
import Appearance from "./Appearance"
import Biography from "./Biography"
import Connections from "./Connections"
import Image from "./Image"
import Powerstats from "./Powerstats"
import Work from "./Work"
import { Box, Button, CardContent, Grid, Typography } from "@mui/material"

const HeroeDetails = () => {
  const { heroe } = useContext(HeroContext)
  const { appearance, biography, connections, images, name, powerstats, work } = heroe
  
  const navigate = useNavigate()
  const handlerGoBack = () => {
    navigate( -1 )
  }

  return (
    <>
      <Typography variant="h3" component='h3'>{name}</Typography>
      <hr />
      <Grid container >
        <Grid item sd={6} md={6} xs={12} >
          <Image name={name} image={images.lg} />
        </Grid>
        <Grid item sd={6} md={6} xs={12} >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Biography title="Biography" biography={biography} />
            <Appearance title="Appearance" appearance={appearance} />
            <Powerstats title="Power Stats" powerstats={powerstats} />
            <Work title="Work" work={work} />
            <Connections title="Connections" connections={connections} />
            <Button sx={{mt:2}} variant='outlined' onClick={ handlerGoBack }>Go back</Button>
          </CardContent>
        </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default HeroeDetails