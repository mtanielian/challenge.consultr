import { act, fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { MemoryRouter } from "react-router-dom"
import List from "../../../src/components/ListImages/List"
import { HeroContext } from "../../../src/contexts/HeroeContext"
import { mockHeroes } from "../../mocks/heroes"
import * as router from 'react-router'

describe('Tests component <List />', () => {
  test('should render component <List /> of images', () => {    
    render(
      <MemoryRouter>
        <HeroContext.Provider value={{heroes: mockHeroes}}>
          <List />
        </HeroContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getAllByRole('img').length).toBe(mockHeroes.length)
  })

  test('should go detail heroe when click image in <List /> of images', () => {    
    const navigate = jest.fn()
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    
    render(
      <MemoryRouter>
        <HeroContext.Provider value={{heroes: mockHeroes}}>
          <List />
        </HeroContext.Provider>
      </MemoryRouter>
      
    )
      
    act(() => {
      fireEvent.click(screen.getByRole('img', { name: mockHeroes[0].name}))
    });
    
    expect(navigate).toHaveBeenCalled();
  })
})


