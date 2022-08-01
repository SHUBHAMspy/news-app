import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { getHeadlines } from "../../services/newsServices"
import SourceList from "../sourceList/SourceList"
import Sidebar from "./Sidebar"

jest.mock("../../services/newsServices")
test('displays source list ,All Sources & Favourites Button',async() => {
  render(<Sidebar/>)
  await act(async() =>{
    render(<SourceList/>)
  })

  
  expect(screen.getAllByRole('button').length).toBe(3);
})

test('all sources button click gets data ', () => { 
  const mockNews = [
    {
      author: 'xyz',
      source: {name: 'BBC NEWS'},
      title: 'NO recession good going.',
      publishedAt: "2022-07-28T09:23:00Z",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220727135434-02-iraq-protest-072722-restricted-super-tease.jpg"
    },
    {
      author: 'abc',
      source: {name: 'Reuters'},
      title: 'CWG:India wins gold',
      publishedAt: "2022-07-27T09:23:00Z",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220727135434-02-iraq-protest-072722-restricted-super-tease.jpg"
    },
    
  ]
    
  getHeadlines.mockResolvedValueOnce(mockNews);
  const {container} = render(<Sidebar/>)
  const element = container.querySelector('.sidebar-title') 
  console.log(element)
  fireEvent.click(element)
  waitFor(() => {
    expect(getHeadlines).toBeCalled(1)
    mockNews.forEach((news) => {
      console.log(news);
      expect(screen.getByText(news.title)).toBeInTheDocument()
      
    })
  })

})