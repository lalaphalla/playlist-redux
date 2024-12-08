import { createRandomSong } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store";
import { Button } from "@mui/material";

function SongPlaylist() {
  // To Do:
  // Get list of songs
  const songPlaylist = useSelector((state) =>{
	console.log(state);
	return state.songs;
    })
  const dispatch = useDispatch();

  const handleSongAdd = (song) => {
    // To Do:
    // Add song to list of songs

    dispatch(addSong(song))
    console.log(addSong(song));
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    console.log(removeSong(song));
    dispatch(removeSong(song))
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <Button
          onClick={() => handleSongRemove(song)}
          variant="outlined"
        >
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <Button
            onClick={() => handleSongAdd(createRandomSong())}
            variant="outlined"
          >
            + Add Song to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
