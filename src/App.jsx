import { artists } from './best-selling-music-artists';
import Layout from './components/Layout';
import Artist from './components/Artist';

function App() {
  const artistsList = artists.map(artist => <Artist key={artist.name} artistName={artist.name} artistURL={artist.photo_url} artistCountry={artist.country} artistYears={artist.years_active}/>);

  return (
    <Layout>
      <div className="app">
        <div className="artistList__container">{artistsList}</div>
      </div>
    </Layout>
  );
}

export default App;
