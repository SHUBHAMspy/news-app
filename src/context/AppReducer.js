export default (state, action) => {
  
  console.log(action.payload);
  switch (action.type) {
    case "ADD_HEADLINES":
      return {
        ...state,
        headlines: action.payload,
      };
    case "ADD_SOURCES":
      return {
        ...state,
        sources: action.payload
        
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites,action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(
          (favourite) => favourite.title !== action.payload.title
        ),
        
      };
    case "ADD_NEWS_TO_READ":
      return {
        ...state,
        newsToRead: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};