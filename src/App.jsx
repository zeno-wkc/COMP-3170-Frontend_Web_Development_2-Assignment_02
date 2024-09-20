import { artists } from './best-selling-music-artists';
import Header from './components/Header';
import Artist from './components/Artist';

function App() {
  const artistsList = artists.map(artist => <Artist key={artist.name} artistName={artist.name} artistURL={artist.photo_url} artistCountry={artist.country} artistYears={artist.years_active}/>);

  return (
    <div className="app">
      <Header className="header_container" />
      <div className="artistList__container">{artistsList}</div>
    </div>
  );
}

export default App;
