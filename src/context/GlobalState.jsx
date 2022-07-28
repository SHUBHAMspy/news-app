import { createContext, useEffect, useReducer } from "react";
import * as newsServices from "../services/newsServices";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  headlines:[],
  sources: [],
  newsToRead: {},
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],
  loading: false

};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);
  
  useEffect(() => {
    handleAllSources();
  }, []);

  const handleAllSources = async() => {
    setLoading(true);
    const {articles:allHeadlines} = await newsServices.getHeadlines('us');
    addHeadlines(allHeadlines);
    setLoading(false);
    // setNewsHeadlines(allHeadlines)

  }  
  // actions
  const addHeadlines = (headlines) => {
    dispatch({type: "ADD_HEADLINES",payload: headlines})
  };

  const addSources = (sources) => {
    dispatch({type: "ADD_SOURCES",payload: sources})
  };

  const addToFavourites = (favourite) => {
    dispatch({type: "ADD_TO_FAVOURITES",payload: favourite})
  };
  
  const removeFromFavourites = (favourite) => {
    dispatch({type: "REMOVE_FROM_FAVOURITES",payload: favourite})
  };

  const getFavourites = () => {
    dispatch({type: "GET_FAVOURITES",payload: state.favourites})
  };

  const addNewsToRead = (news) => {
    dispatch({type: "ADD_NEWS_TO_READ",payload: news})
  };
  const setLoading = (load) => {
    dispatch({type: "SET_LOADING",payload: load})
  };
  
  return (
    <GlobalContext.Provider value={{
      headlines: state.headlines,
      sources: state.sources,
      newsToRead: state.newsToRead,
      favourites: state.favourites,
      loading: state.loading,
      addHeadlines,
      addSources,
      addToFavourites,
      removeFromFavourites,
      addNewsToRead
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}
