import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import InfoBox from "../components/InfoBox";

const useAudio = () => {
  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing]);

  return [playing, toggle];
};

const Home = () => {
  const theme = useTheme();
  const [playing, toggle] = useAudio();

  return (
    <>
      <InfoBox />

      <div className="playBox">
        <button
          className="play-button"
          // onClick={() => {
          //   // e.preventDefault();
          //   // window.scrollTo(0, 0);
          // }}
        >
          <PlayArrowIcon sx={{ height: 30, width: 30 }} />
        </button>
      </div>
    </>
  );
};

export default Home;
