import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeroContext } from '../contexts/HeroeContext';
import { getHeroeBy } from '../services/heroe.services';

const useFetchHeroeById = () => {
  const { id } = useParams();
  const {loading, error, setError, setLoading, setHeroe, heroe } = useContext(HeroContext)

  const laodHeroeById = async () => {
    setLoading(true)
    setError(false)
    try {
      const dataload = await getHeroeBy(id)
      setHeroe(dataload)
      setLoading(false)
    } catch (error) {
      console.log('Error laodHeroeById:', error)
      setError(true)
    }
  }


  useEffect(() => {
    laodHeroeById()
  }, [id])


  return {
    loading, error, heroe
  }
}

export default useFetchHeroeById