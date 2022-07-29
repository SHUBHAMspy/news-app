import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/GlobalState';

import Sidebar from "../../sidebar/Sidebar";
import './style.css';

const MobileNavbar = ({visibility}) => {
  const [open, setOpen] = useState(false);
  const [openSidebar,setOpenSidebar] = useState(false);
  const { favourites,addHeadlines,addToFavourites,removeFromFavourites} = useContext(GlobalContext);

  
  
  const closeSidebar = (close) => {
    setOpenSidebar(close);
  }

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setOpen(open) : setOpen(false)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);
  
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setOpenSidebar(openSidebar) : setOpenSidebar(false)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openSidebar])
  
  return (
    <>
      <div className="mobile-bottom-navigation">

        {/* <button className="action-btn"  onClick={() => setOpen(!open)}>
          <ion-icon name="menu-outline"></ion-icon>
        </button> */}

        {/* <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <span className="count">{0}</span>
        </button> */}
        <button className="action-btn" onClick={() => addHeadlines(favourites)}>
          <ion-icon name="star-outline"></ion-icon>

          <span className="count">{favourites.length}</span>
        </button>
      
        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>


        <button className="action-btn" data-mobile-menu-open-btn
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </button>

      </div>
      {openSidebar && <Sidebar openSidebar={openSidebar} sidebarVisible={visibility} closeSidebar={closeSidebar}/>} 
    </>
  )
}

export default MobileNavbar