import { useContext } from 'react';
import './App.css';
import Display from './Component/Display';
import Player from './Component/Player';
import SideBar from './Component/SideBar';
import { PlayerContext } from './Context/PlayerContext';

function App() {
  const {audioRef,track}=useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef}src={track.file}  preload='auto'></audio>
    </div>
  );
}

export default App;
