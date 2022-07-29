import { render } from "@testing-library/react"
import News from "./News"

test('display news message and post',() => {
  const newsItem ={
    title:"xyz",
    description:"Good going"
  }
  const {container} = render(<News />)
  expect(container.firstChild).toHaveClass('message')

})

