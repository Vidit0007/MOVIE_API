import React, { useState } from "react";
import Header from "./ASSETS/Header";
import "./Home.css";
import img1 from "./IMAGES/moie-removebg.png";
import img2 from "./IMAGES/movie2-removebg-preview.png";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const key = "3dbdef1dbc3e23fffefc17ca40135e5a";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchQuery}`;
  const handleSearch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <section className="home">
        <Header />
        <div className="con1">
        <div><img src={img1} alt="Q" className="img1"></img> 
            <img src={img2} alt="w" className="img2"></img>
            </div>
            <h1 className="h">MOVIES SEARCHING APP</h1>
        </div>
        <div>
          <div className="search-container">
            <input
              className="search-container input"
              type="text"
              placeholder="Search for a movie"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-container button " onClick={handleSearch}>
              Search
            </button>
            <br />
            <br />
          </div>
          <div className="movie-list">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <h2>{movie.title}</h2>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
                    alt="imdb"
                  />
                </div>
                <div>
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
