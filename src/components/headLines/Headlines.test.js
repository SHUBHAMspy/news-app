
import '@testing-library/jest-dom'
import { render, screen } from '../utils/test-utils'
// import { render } from "../../utils/test-utils"
import Headlines from "./Headlines"
describe('Headlines',() => {

  it('loads and displays news', () => { 
    render(<Headlines/>)
    
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})