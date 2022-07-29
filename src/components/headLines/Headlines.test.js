import { render, screen, waitFor } from "@testing-library/react";
import Headlines from "./Headlines";

test('loads and displays news',async() => {
  const mockNews = [
    {
      author: 'xyz',
      source: {name: 'BBC NEWS'},
      title: 'NO recession good going.',
      publishedAt: "2022-07-28T09:23:00Z",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220727135434-02-iraq-protest-072722-restricted-super-tease.jpg"
    },
    {
      author: 'xyz',
      source: {name: 'BBC NEWS'},
      title: 'NO recession good going.',
      publishedAt: "2022-07-27T09:23:00Z",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220727135434-02-iraq-protest-072722-restricted-super-tease.jpg"
    },

  ]
  render(<Headlines/>);
  await waitFor(() => {

    mockNews.forEach((post) =>
      expect(screen.getByText(post.title)).toBeInTheDocument()
    );
    //expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})