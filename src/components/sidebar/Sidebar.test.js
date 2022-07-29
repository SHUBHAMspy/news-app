import { act, render, screen } from "@testing-library/react"
import SourceList from "../sourceList/SourceList"
import Sidebar from "./Sidebar"

test('displays source list ,All Sources & Favourites Button',async() => {
  render(<Sidebar/>)
  await act(async() =>{
    render(<SourceList/>)
  })

  expect(screen.getByRole('button', {name: 'ALL SOURCES &gt;'}))
})