import React, { useState } from "react";
import FilterSlot from "../shared/components/FilterSlot";
import "../styles.css";
import { GenreEnum, RatingEnum } from "./Enums";
import MoviesCard from "./MoviesCard";
import { matchesGenre, matchesRating, matchesSearchTerm } from "./Utils";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState(GenreEnum.All_Genres);
  const [rating, setRating] = useState(RatingEnum.All);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fileredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <FilterSlot
          state={genre}
          setState={setGenre}
          filterTitle="Genre"
          optionsValues={Object.values(GenreEnum)}
        ></FilterSlot>
        <FilterSlot
          state={rating}
          setState={setRating}
          filterTitle="Rating"
          optionsValues={Object.values(RatingEnum)}
        ></FilterSlot>
      </div>

      <div className="movies-grid">
        {fileredMovies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            isWatchlisted={watchlist.includes(movie.id)}
            toggleWatchlist={toggleWatchlist}
          ></MoviesCard>
        ))}
      </div>
    </div>
  );
}
