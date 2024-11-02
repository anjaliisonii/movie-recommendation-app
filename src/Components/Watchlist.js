import React from 'react';
import MovieList from './MovieList';

function Watchlist({ watchlist }) {
  return (
    <div>
      <MovieList movies={watchlist} />
    </div>
  );
}

export default Watchlist;
