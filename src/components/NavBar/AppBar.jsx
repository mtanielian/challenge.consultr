import {AppBar, Toolbar, Typography} from '@mui/material'

const AppBarHero = () => {
  return (
      <AppBar position="fixed" sx={{alignItems:'center', backgroundColor:'rgba(255, 255, 255, .5)', color:'black'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Superhero App
          </Typography>          
        </Toolbar>
      </AppBar>
    
  );
}

export default AppBarHero