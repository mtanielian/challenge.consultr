import api from "./api"

export const getHeroes = async () => {
  const { data } = await api.get("/all.json")
  return data
}

export const getHeroeBy = async (id) => {
  const { data } = await api.get(`/id/${id}.json`)
  return data
}