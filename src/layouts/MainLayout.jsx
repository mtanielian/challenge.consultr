import { Grid } from '@mui/material'
import React from 'react'
import AppBar from '../components/NavBar/AppBar'

const MainLayout = ({children}) => {
  return (
    <Grid container sx={{display:'flex'}}>
      <Grid item xs={12}>
        <AppBar />
      </Grid>
      <Grid item xs={12} sx={{mt:10}}>
        {children}
      </Grid>
    </Grid>
  )
}

export default MainLayout