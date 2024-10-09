import imageHarryPotter from './img/harry-potter.png';
import './App.css';
import {useState} from "react";
import Films from './components/Films';

function App() {
  const [fimls, setFilms] = useState(null);

  const reqApi = async() => {
    const api = await fetch ("https://potterhead-api.vercel.app/api/movies")
    const filmApi = await api.json();
    console.log(filmApi);
    setFilms(filmApi.results);
  };

  console.log(fimls);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Harry Potter</h1>
        <Films></Films>
        <img src={imageHarryPotter} alt="Harry Potter" className="img-home" />
        <button onClick={reqApi} className="btn-search">Buscar Peliculas</button>
      </header>
    </div>
  );
}

export default App;
