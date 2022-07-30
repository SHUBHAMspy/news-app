import { render } from "@testing-library/react"
import News from "./News"

test('display news message',() => {
  const {container} = render(<News />)
  expect(container.firstChild).toHaveClass('message')

})

