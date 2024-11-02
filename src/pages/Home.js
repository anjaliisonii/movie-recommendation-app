import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
import tmdb from '../api/tmdb';
import './Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(''); // Search query state

  // Fetch top-rated movies when the component mounts
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await tmdb.get('/movie/top_rated');
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchTopRatedMovies();
  }, []);

  // Fetch movies based on search input
  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      try {
        const response = await tmdb.get('/search/movie', {
          params: { query: searchQuery },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      // If the search bar is empty, load top-rated movies again
      const response = await tmdb.get('/movie/top_rated');
      setMovies(response.data.results);
    }
  };

  return (
    <div className="home">
      <h1>Movie Recommendation System</h1>
      <SearchBar onSearch={handleSearch} />
      <h2>Top Rated Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
