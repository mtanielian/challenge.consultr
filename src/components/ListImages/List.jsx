import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeroContext } from "../../contexts/HeroeContext";
import ListItem from "./ListItem"

const List = () => {
  const {heroes} = useContext(HeroContext)

  const navigate = useNavigate()
  const handleDetailHeroe = (id) => {
    if (id)
      navigate(`/heroe/${id}`)
  }

  return (
    heroes.map((heroe) => (
      <ListItem key={heroe.id} heroe={heroe} handleDetailHeroe={handleDetailHeroe} />
    ))
  )
}

export default List