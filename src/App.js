import React from 'react';
import './App.css';

import MobileNavbar from './components/mobile/mobileNavbar/MobileNavbar';
import Navbar from './components/navbar/Navbar';
import { GlobalProvider } from './context/GlobalState.jsx';
import NewsSection from './section/newsSection/NewsSection';

function App() {
  // const sidebar = useRef()
  // const [clicked, setClicked] = useState(false)

  // useEffect(() => {
  //   document.addEventListener("click",handleClickOutside,)
  // }, [handleClickOutside])
  
  // const handleClickOutside = (e) => {
  //   if(!sidebar.current.contains(e.target)) setClicked(!clicked)
  // }

  return (
    <GlobalProvider >
      <Navbar/>
      {/* <h1> Hi Zap! Welcome to Vite + React</h1> */}
      <NewsSection/>
      <MobileNavbar  visibility={true} />
    </GlobalProvider>
  )
}

export default App