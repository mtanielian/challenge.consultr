import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import HeroeDetails from "../../../src/components/HeroeDetails/HeroeDetails"
import { HeroContext } from "../../../src/contexts/HeroeContext"
import { mockHeroes } from "../../mocks/heroes"

describe("Tests component <HeroeDetail />", () => {

  test('should render component <HeroeDetail /> ', () => {    
    const heroe = mockHeroes[0]
    render(
      <MemoryRouter>
        <HeroContext.Provider value={{heroe: heroe}}>
          <HeroeDetails />
        </HeroContext.Provider>
      </MemoryRouter>
    )
    
    expect(screen.getByRole('img').src).toBe(heroe.images.lg)
    expect(screen.getByLabelText('fullName')).toBeTruthy()
    expect(screen.getByLabelText('alterEgos')).toBeTruthy()
    expect(screen.getByLabelText('publisher')).toBeTruthy()
    expect(screen.getByLabelText('alignment')).toBeTruthy()
    expect(screen.getByLabelText('race')).toBeTruthy()
    expect(screen.getByLabelText('gender')).toBeTruthy()
    expect(screen.getByLabelText('heightWeight')).toBeTruthy()
    expect(screen.getByLabelText('intelligence')).toBeTruthy()
    expect(screen.getByLabelText('strength')).toBeTruthy()
    expect(screen.getByLabelText('speed')).toBeTruthy()
    expect(screen.getByLabelText('durability')).toBeTruthy()
    expect(screen.getByLabelText('power')).toBeTruthy()
    expect(screen.getByLabelText('combat')).toBeTruthy()
    expect(screen.getByLabelText('occupation')).toBeTruthy()
    expect(screen.getByLabelText('base')).toBeTruthy()
    expect(screen.getByLabelText('group')).toBeTruthy()
    expect(screen.getByLabelText('relatives')).toBeTruthy()
    expect(screen.getByRole('button', {name: 'Go back'})).toBeTruthy()
  })
})