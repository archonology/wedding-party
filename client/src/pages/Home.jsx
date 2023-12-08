import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import weddingTheme from "../assests/weddingTheme.mp3";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import InfoBox from "../components/InfoBox";

const useAudio = () => {
  const [audio] = useState(new Audio(weddingTheme));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing]);

  return [playing, toggle];
};

const Home = ({ boxStyle }) => {
  const theme = useTheme();
  const [playing, toggle] = useAudio(weddingTheme);

  return (
    <>
      <InfoBox boxStyle={boxStyle} />
      <div className="playBox">
        <button className="play-button" onClick={toggle}>
          {playing ? (
            <>
              <PauseIcon sx={{ height: 30, width: 30 }} />
            </>
          ) : (
            <>
              <PlayArrowIcon sx={{ height: 30, width: 30 }} />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default Home;
