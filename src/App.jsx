import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import axios from "axios";

const VITE_OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Fetch movies from the OMDb API
  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      const url = query
        ? `https://www.omdbapi.com/?s=${query}&apikey=${VITE_OMDB_API_KEY}`
        : `https://www.omdbapi.com/?s=movie&apikey=${VITE_OMDB_API_KEY}`;

      const response = await axios.get(url);

      if (response.data.Search) {
        dispatch({ type: "INSERT_MOVIE", payload: response.data.Search });
      } else {
        dispatch({ type: "INSERT_MOVIE", payload: [] });
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  if (loading) {
    return (
      <div className="bg-mainColor text-secondaryColor min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-mainColor to-thirdColor text-white min-h-screen">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 px-10 shadow-lg">
        <Header title="NexusHub." />
        <Search onSearch={handleSearch} />
      </div>

      {/* Movie Grid */}
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-7 p-10">
        {movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="text-center col-span-full">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
