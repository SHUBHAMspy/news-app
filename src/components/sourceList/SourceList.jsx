import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/globalState";
import * as newsServices from "../../services/newsServices";

//import { addSources } from '../../store/actions/newsActions';
import "./style.css";

const SourceList = () => {

  const [sources, setSources] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const {sources:sourcesData,addSources,addHeadlines } = useContext(GlobalContext);
  const [active, setActive] = useState(false);
  // const dispatch = useDispatch();
  // const sourcesData = useSelector((state) => state.sources.sources);
  console.log(sourcesData);

  useEffect(() => {
    getNewsSource();
  }, [])


  const getNewsSource = async() => {
    setIsFetching(true);
    try {
      let {sources:newsSources} = await newsServices.getSources('us');
      console.log(newsSources);
      addSources(newsSources);
      
      setIsFetching(false);

    } catch (error) {
      setError(error.message);
    }
  }
  const getSourceHeadlines = async(source) => {
    try {
      let {articles:headlines} = await newsServices.getHeadlinesBySource(source)
      console.log(headlines);
      addHeadlines(headlines);

    } catch (error) {
      setError(error.message);
    }
  }
  if (isFetching) return <h5 style={{padding: "15px",marginBottom: "300px",fontSize: "18px"}}>Loading...</h5>;
  if (error){
    return (
      <div style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <p style={{fontSize: "16px"}}>
          {`${error.message}`}
        </p>
        <p style={{color: "blue", fontSize: 16, padding: 8}} onPress={getNewsSource}>Tap to retry</p>
      </div>
    );
  }


  return (
    <ul className="sidebar-menu-category-list has-scrollbar">
      {
        sourcesData.map((source,index) => (
          <li className='sidebar-menu-category' key={source.id}>
            
            <p className={`menu-title ${active ? 'active': ''}`} onClick={() => {
              getSourceHeadlines(source.name);
              setActive(true);
            }}>
              {source.name}
            </p>
          </li>
        ))
      }
      
    </ul>
  )
}

export default SourceList