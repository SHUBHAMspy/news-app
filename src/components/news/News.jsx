import { useContext } from 'react';
import { GlobalContext } from '../../context/globalState';
import { convertTime } from '../../utils/convertTime';
import './style.css';

const News = () => {
  
  // const [favouriteToggle, setfavouriteToggle] = useState(false)
  const {newsToRead:news} = useContext(GlobalContext)
  const { favourites,addToFavourites,removeFromFavourites} = useContext(GlobalContext);
  const titles = favourites.map(favourite => favourite.title);
  console.log(news);

  const addFavourite = () => {
    addToFavourites(news);
  }
  const removeFavourite = () => {
    removeFromFavourites(news);
  }

  return (
    <>
      {
        news.source ? (
        <div className='newsitem-container'>
          <div className='news-card'>
            <div className='news-header'>
              <div className='news-header-content'>
                <a href="/">{news?.source.name}</a>
                <h3 className='header-title'>{news.title}</h3>
                <p className='news-meta'>{convertTime(news.publishedAt)}</p>
              </div>
              <div className='star'>
                {
                  titles.includes(news.title)
                  ? <ion-icon name="star" onClick={removeFavourite} ></ion-icon >
                  : <ion-icon name="star-outline" onClick={addFavourite}></ion-icon>
                }
              </div>

            </div>
            <img className='news-banner' src={news.urlToImage} alt="news image" width='400px'/>
            <p>{news.content}</p>
            
          </div>
        </div>
        )
        : <div style={{ color:"var(--purple)", fontSize:"var(--fs-2)"}}> Click headlines to read the News</div>
      }
    </>
  )
}

export default News