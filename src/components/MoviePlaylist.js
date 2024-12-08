import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../store";
import { Button } from "@mui/material";


function MoviePlaylist() {
    // const moviePlaylist = [];
    const moviePlaylist = useSelector((state)=> state.movies) 
    const dispatch = useDispatch()
    const handleMovieAdd = (movie) => {
        // To Do:
        // Add movie to list of movies
        dispatch(addMovie(movie))
        console.log(movie);

      };
      const handleMovieRemove = (movie) => {
        // To Do:
        // Remove movie from list of movies
        dispatch(removeMovie(movie))
      };
    
      const renderedMovies = moviePlaylist.map((movie) => {
        return (
          <li key={movie}>
            {movie}
            <Button variant="outlined"
              onClick={() => handleMovieRemove(movie)}
            >
              X
            </Button>
          </li>
        );
      });

    return (
        <div>
             <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <Button
            onClick={() => handleMovieAdd(createRandomMovie())}
            variant="outlined"
          >
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
        </div>
    )
}
export default MoviePlaylist