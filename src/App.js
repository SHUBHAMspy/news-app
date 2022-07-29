import './App.css';
import MobileNavbar from './components/mobile/mobileNavbar/MobileNavbar';
import Navbar from './components/navbar/Navbar';
import { GlobalProvider } from './context/GlobalState.jsx';
import NewsSection from './section/newsSection/NewsSection';

function App() {
  
  return (
    <GlobalProvider >
      <Navbar/>
      {/* <h1> Hi Zap! Welcome to Vite + React</h1> */}
      <NewsSection/>
      <MobileNavbar visibility={true}/>
    </GlobalProvider>
  )
}

export default App