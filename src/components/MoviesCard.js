import "../styles.css";
import { getRatingClass, imageTagErrorHandler } from "./Utils";

export default function MoviesCard({ movie, isWatchlisted, toggleWatchlist }) {
  const { id, title, image, rating, genre } = movie;

  return (
    <div key={id} className="movie-card">
      <img src={`images/${image}`} alt={title} onError={imageTagErrorHandler} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{title}</h3>

        <div>
          <span className="movie-card-genre">{genre}</span>
          <span className={`movie-card-rating ${getRatingClass(rating)}`}>
            {rating}
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
