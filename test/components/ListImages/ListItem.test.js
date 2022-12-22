import { fireEvent, getByText, render, screen } from "@testing-library/react";
import ListItem from "../../../src/components/ListImages/ListItem";
import { mockHeroes } from "../../mocks/heroes";

describe("Tests component <ListItem />", () => {
  test("should render component <ListItem />", () => {
    const heroe = mockHeroes[0]
    
    render(<ListItem heroe={heroe} handleDetailHeroe={() => {}}/>);
    expect(screen.getByRole("img")).toBeTruthy()
    expect(screen.getByRole("img").getAttribute("alt")).toBe(heroe.name);
    expect(screen.getByText(heroe.name)).toBeTruthy()
    expect(screen.getByLabelText('height').textContent).toBe(`Height: ${heroe.appearance.height[1]}`)
    expect(screen.getByLabelText('weight').textContent).toBe(`Weight: ${heroe.appearance.weight[1]}`)
  })

  test("test click call <ListItem />", () => {
    const heroe = mockHeroes[0]
    const handleDetailHeroe = jest.fn()
    render(<ListItem heroe={heroe} handleDetailHeroe={handleDetailHeroe} />);
    expect(screen.getByLabelText('areaClick')).toBeTruthy()
    fireEvent.click(screen.getByLabelText('areaClick'))
    expect(handleDetailHeroe).toHaveBeenCalled()    
  })



})