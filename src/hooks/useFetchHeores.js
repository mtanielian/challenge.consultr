import { useContext, useEffect } from 'react'
import { HeroContext } from '../contexts/HeroeContext'
import { getHeroes } from "../services/heroe.services"

const useFetchHeores = () => {
  const {loading, error, setHeroes, setError, setLoading} = useContext(HeroContext)

  const laodHeroes = async () => {
    try {
      const dataload = await getHeroes()
      setHeroes(dataload.splice(0, 60))
      setLoading(false)
      setError(false)
    } catch (error) {
      console.log('Error laodHeroes:', error)
      setError(true)
    }
  }

  useEffect(() => {
    console.log('entro:::: useEffect')
    laodHeroes()
  }, [])


  return {
    loading, error
  }
}

export default useFetchHeores