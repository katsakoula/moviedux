import { GenreEnum, RatingEnum } from "./Enums";

const getRatingClass = (rating) => {
  if (rating >= 8) return "rating-good";
  if (rating >= 5 && rating < 8) return "rating-ok";
  return "rating-bad";
};

const imageTagErrorHandler = (e) => {
  e.target.src = "images.defailt.jpg";
};

const matchesGenre = (movie, genre) => {
  return (
    genre === GenreEnum.All_Genres ||
    movie.genre.toLowerCase() === genre.toLowerCase()
  );
};
const matchesSearchTerm = (movie, searchTerm) =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase());

const matchesRating = (movie, rating) => {
  switch (rating) {
    case RatingEnum.All:
      return true;
    case RatingEnum.Good:
      return movie.rating >= 8;
    case RatingEnum.Ok:
      return movie.rating >= 5 && movie.rating < 8;
    case RatingEnum.Bad:
      return movie.rating < 5;
    default:
      return false;
  }
};
export {
  getRatingClass,
  imageTagErrorHandler,
  matchesGenre,
  matchesSearchTerm,
  matchesRating,
};
