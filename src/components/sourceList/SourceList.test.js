import { render, screen, waitFor } from "@testing-library/react"
import { getSources } from "../../services/newsServices"
import SourceList from "./SourceList"

jest.mock("../../services/newsServices")

test('displays various news sources',() => {
  const sources = [{ id: 1, name: "BBC", },{id:2, name: "WSJ"}];
  getSources.mockResolvedValueOnce(sources);
  console.log(getSources.mockResolvedValueOnce(sources));
  render(<SourceList/>)
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  expect(getSources).toHaveBeenCalledTimes(1);
  expect(getSources).toHaveBeenCalledWith('us'); 
 
  // await waitFor(() => expect(screen.getByText("BBC")).toBeInTheDocument());
  waitFor(() => {
    sources.forEach((source) =>{
      console.log(source.name);
      expect(screen.getByText(source.name)).toBeInTheDocument()
    }
    );

  })
})