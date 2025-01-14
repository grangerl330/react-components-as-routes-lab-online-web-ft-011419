import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          {actor.name}
          <p>Movies:</p>{actor.movies.map((movie, index) => (
            <ul key={index}>
              {movie}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
