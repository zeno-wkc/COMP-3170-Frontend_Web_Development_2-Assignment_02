export default function Artist(props){
  const { artistName, artistURL, artistCountry, artistYears } = props;

  return (
    <div className="artist__container">
      <div className="artist-image__container">
        <img src={artistURL} alt={artistName} />
      </div>
      <div className="artist-content__container">
        <h2 className="artist-name">{artistName}</h2>
        <p className="artist-country">Country: {artistCountry}</p>
        <p className="artist-year-active">Years Active: {artistYears}</p>
      </div>
    </div>
  );
}