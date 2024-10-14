import imageHarryPotter from './img/harry-potter.png';
import './App.css';
import { useState } from "react";
import Films from './components/Films';

function App() {
  const [films, setFilms] = useState(null);

  // Función para volver a la pantalla principal (reiniciar el estado de las películas)
  const goBackHome = () => {
    setFilms(null); // Reinicia el estado, vuelve a la pantalla de inicio
  };

  const reqApi = async () => {
    const api = await fetch("https://potterhead-api.vercel.app/api/movies");
    const filmApi = await api.json();
    console.log(filmApi); // Verifica que llegan los datos de la API
    setFilms(filmApi); // Almacena las películas obtenidas de la API
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Harry Potter</h1>
        {films ? (
          // Pasar la función goBackHome al componente Films
          <Films films={films} goBackHome={goBackHome}></Films>
        ) : (
          <>
            <img src={imageHarryPotter} alt="Harry Potter" className="img-home" />
            <button onClick={reqApi} className="btn-search">Search Movies</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;