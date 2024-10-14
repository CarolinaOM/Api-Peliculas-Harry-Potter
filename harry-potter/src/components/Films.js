import React from 'react';

export default function Films(props) {
  const { films, goBackHome } = props; // Recibir la función goBackHome

  return (
    <div className="characters">
      <h1>Films</h1>
      <span className="back-home" onClick={goBackHome}>Back to Home</span> {/* Añadir onClick */}
      <div className="container-characters">
        {films.map((film, index) => (
          <div className="character-container" key={index}>
            <div>
              <h2>{film.title}</h2>
              <p className="summary-text">{film.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}