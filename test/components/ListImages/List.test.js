import { act, fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import List from "../../../src/components/ListImages/List"
import { HeroContext } from "../../../src/contexts/HeroeContext"
import { mockHeroes } from "../../mocks/heroes"



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
})