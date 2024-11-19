import React, { useState } from "react";

const Movie = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer h-[380px] "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className={`transition-transform duration-300 ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 text-center">
          <h2 className="text-lg font-bold mb-2">{movie.Title}</h2>
          <p className="text-sm">Year: {movie.Year}</p>
        </div>
      )}
    </div>
  );
};

export default Movie;
