import React from 'react';
import Watchlist from '../Components/Watchlist';
import './WatchlistPage.css';

function WatchlistPage() {
  return (
    <div className="watchlist-page">
      <h1>Your Watchlist</h1>
      <Watchlist />
    </div>
  );
}

export default WatchlistPage;
