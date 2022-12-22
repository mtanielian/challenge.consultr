import ListImages from '../components/ListImages/List'
import { Grid } from '@mui/material'
import useFetchHeores from '../hooks/useFetchHeores'

const HomePage = () => {
  const {loading, error} = useFetchHeores()

  if (error) return <h1>Error...</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <Grid container className='animate__animated animate__fadeIn'>
      <ListImages />
    </Grid>
  )
}

export default HomePage