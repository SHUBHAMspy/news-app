import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import * as newsServices from "../../services/newsServices";
import SourceList from '../sourceList/SourceList';
import './style.css';

const Sidebar = ({openSidebar,closeSidebar,sidebarVisible}) => {
  const { sources,favourites ,addSources,addHeadlines } = useContext(GlobalContext);

  const [open, setOpen] = useState(openSidebar);
  const sidebar = useRef(null);
  // const dispatch = useDispatch();

  useEffect(() => {
    setOpen(openSidebar);

    open && sidebarVisible 
      ? sidebar.current.classList.add('active') 
      : sidebar.current.classList.remove('active') 

  
  },[openSidebar,open,sidebarVisible])

  const handleAllSources = async() => {
    const {articles:allHeadlines} = await newsServices.getHeadlines('us');
    console.log(allHeadlines);
    addHeadlines(allHeadlines);
  }

  return (
    <>
    <div className='sidebar-wrapper'></div>
      <div ref={sidebar}  className='sidebar '>
        <div className="sidebar-category">
          <div className="sidebar-top">
            <button className="sidebar-title" onClick={handleAllSources}>All Sources &gt;</button>
          </div>
          <SourceList/>
        </div>
        <div className="side-menu-footer">
          <button className="user-info" onClick={() => addHeadlines(favourites)}>
            <h5>Favourites &gt;</h5>
            <p>{favourites.length}</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar