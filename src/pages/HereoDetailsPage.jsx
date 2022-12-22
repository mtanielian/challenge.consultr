import { Container } from "@mui/material"
import HeroeDetails from "../components/HeroeDetails/HeroeDetails"
import useFetchHeroeById from "../hooks/useFetchHeroeById"

const HereoDetailsPage = () => {
  const { loading, error, heroe } = useFetchHeroeById()

  if (error) return <h1>Error...</h1>
  if (loading || Object.keys(heroe).length === 0) return <h1>Loading...</h1>

  
  return (
    <Container>
      <HeroeDetails />
    </Container>
  )
}

export default HereoDetailsPage