import { Grid, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material'
import ItemSubtitle from './ItemSubtitle'
import ItemTitle from './ItemTitle'

const ListItem = ({ heroe, handleDetailHeroe }) => {
  const { id, images, name, appearance } = heroe
  return (
    <Grid item sd={4} md={2} xs={6} sx={{display:'flex', justifyContent:'center', mb:2}}>
      <ImageListItem sx={{width: '90%', cursor: 'pointer'}}  onClick={() => handleDetailHeroe(id)}>
        <img src={images.sm} alt={name} loading="lazy" style={{borderRadius: '10px'}} />
        <ImageListItemBar
          style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}
          title={<ItemTitle title={name} />}
          subtitle={<ItemSubtitle appearance={appearance} />}
        />
      </ImageListItem>        
    </Grid>
  )
}

export default ListItem





