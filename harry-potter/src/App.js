import imageHarryPotter from './img/harry-potter.png';
import './App.css';

function App() {
  const reqApi = async() => {
    const api = await fetch ("https://potterhead-api.vercel.app/api/movies")
    const filmApi = await api.json();
    console.log(filmApi);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Harry Potter</h1>
        <img src={imageHarryPotter} alt="Harry Potter" className="img-home" />
        <button onClick={reqApi} className="btn-search">Buscar Peliculas</button>
      </header>
    </div>
  );
}

export default App;
