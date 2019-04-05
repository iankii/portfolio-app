import React from 'react';
import classes from './MiniCards.css';
import MiniCard from './MiniCard/MiniCard';

const miniCards = () => {
  return (
    <div className={classes.MiniCards}>
      <header className={classes.MiniCardsHeader}>
        <h2>Popular Articles</h2>
      </header>
      <div className={classes.MiniCardsContainer}>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
    </div>
  );
}

export default miniCards;