
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalState';
import './style.css';

const Navbar = () => {
  const { favourites,addHeadlines,addToFavourites,removeFromFavourites} = useContext(GlobalContext);

  return (
    <div className="header-main">
      <div className="container">

        <a href='/' className="header-logo">
          <h1>newsWiz</h1>
        </a>

        <div className="header-search-container">
          <input  type="search" name="search" className="search-field" placeholder="Enter news headlines..."/>

          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          
          
        </div>

        <div className="header-user-actions">


          <button className="action-btn" onClick={() => addHeadlines(favourites)}>
            <ion-icon name="star-outline"></ion-icon>
            <span className="count">{favourites.length}</span>
          </button>

          
          
        
        </div>
      </div>
    </div>
  )
}

export default Navbar