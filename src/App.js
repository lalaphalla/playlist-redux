import { Button } from "@mui/material";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useDispatch } from "react-redux";
import { reset } from "./store";


function App() {
  const dispatch = useDispatch()
  const handleResetClick = () =>{
    console.log(reset());
    dispatch(reset())
  } 

  return (
    <div className="App">
      <Button variant="contained" onClick={handleResetClick}>Reset Both Playlist</Button>
      <MoviePlaylist />
      <SongPlaylist />
    </div>
  );
}

export default App;
