
import Headlines from '../../components/headLines/Headlines'
import News from '../../components/news/News'
import Sidebar from '../../components/sidebar/Sidebar'
import './style.css'

const NewsSection = () => {
  return (
    <div className='news-container'>
      <div className='container'>  
        <Sidebar/>
        <div className='news-box'>
          <Headlines/>
          <News/>
        </div>
      </div>

    </div>
  )
}

export default NewsSection