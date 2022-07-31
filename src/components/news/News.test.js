import { render, waitFor } from "@testing-library/react"
import News from "./News"

test('display news message',() => {
  const {container} = render(<News />)
  expect(container.firstChild).toHaveClass('message')

})

test('adds news to favourites',() => {
  const favourites =[];

  const {container} = render(<News/>)
  waitFor(() =>  {
    const element = container.querySelector('.star')
    console.log(element);
    fireEvent.click(element,favourites.push({title:'good one'}))
    expect(element).toBeTruthy()
    expect(favourites.length).toBe(1)
    expect(favourites[0]).toBe({title:'good one'})
  })

  //const element = container.querySelector('.star')
  //fireEvent.click(element,favourite.push[{title:'good one'}])
})

