import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import weddingInfo from "../assests/inviteInfo2.png";
import DownloadIcon from "@mui/icons-material/Download";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" style={{ backgroundColor: "black" }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "serif", fontSize: "27px" }}
          >
            Heidi & Reed
          </Typography>
          <a href={weddingInfo} download={weddingInfo}>
            <Button className="give" color="warning">
              <Typography
                style={{
                  fontFamily: "serif",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginLeft: "1px",
                }}
              >
                More Info
              </Typography>
              <DownloadIcon style={{ marginRight: "5px" }} />
            </Button>
          </a>

          <p>|</p>
          <Button
            style={{ fontSize: "18px" }}
            className="direct"
            color="warning"
            href="https://www.google.com/maps/place/101+Kennedy+Memorial+Dr,+Hoyt+Lakes,+MN+55750/@47.5203144,-92.1517386,17z/data=!3m1!4b1!4m6!3m5!1s0x52a57b69aff0ae05:0x47a1787c383c706f!8m2!3d47.5203144!4d-92.1491637!16s%2Fg%2F11cpn1rq17?entry=ttu"
            target="_blank"
            rel="nonrefferer"
          >
            <Typography
              style={{
                fontFamily: "serif",
                fontSize: "20px",
                fontWeight: "500",
                marginRight: "5px",
              }}
            >
              Directions
            </Typography>
          </Button>
          <p>|</p>
          <Button
            className="give"
            color="warning"
            href="https://buy.stripe.com/3csbIR2S89s03oA002"
          >
            <Typography
              style={{
                fontFamily: "serif",
                fontSize: "20px",
                fontWeight: "500",
                marginLeft: "5px",
              }}
            >
              Give a Gift
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
