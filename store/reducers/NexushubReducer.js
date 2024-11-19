const movieState = {
  movies: [],
};

const NexushubReducer = (state = movieState, action) => {
  switch (action.type) {
    case "INSERT_MOVIE":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default NexushubReducer;
