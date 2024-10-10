export default function Films(props){
    const {films} = props;
   return (
    <div className = "characters">
        <h1>Peliculas</h1>
        <span className="back-home">Volver a pantalla principal</span>
        <div className="vontainer-characters">
            {films.map((film, index) => (
                <div className="character-containes" key={index}>
                    <p>{film.title}</p>
                </div>
            ))}
        </div>
    </div>
   ) 
}