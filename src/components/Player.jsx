import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import album from "../assests/album.png";
import dju from "../assests/dju.mp3";

const useAudio = () => {
  const [audio] = useState(new Audio(dju));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing]);

  return [playing, toggle];
};

export default function Player() {
  const theme = useTheme();
  const [playing, toggle] = useAudio(dju);

  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "600px",
        marginTop: "1em",
      }}
      className="player"
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Dolphin Unicorn Jaguar
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Reed Meher
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={toggle}>
            {playing ? (
              <>
                {" "}
                <PauseIcon sx={{ height: 38, width: 38 }} />
              </>
            ) : (
              <>
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </>
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400 }}
        image={album}
        alt="Live from space album cover"
      />
    </Card>
  );
}
