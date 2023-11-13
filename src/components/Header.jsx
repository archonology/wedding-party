import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import weddingInfo from "../assests/inviteInfo2.png";
import DownloadIcon from "@mui/icons-material/Download";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" style={{  }}>
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            className="title"
            sx={{
              flexGrow: 1,
              flexShrink: 3,
              fontFamily: "'Londrina Solid', sans-serif;, sans-serif;",
              fontSize: "47px",
              color: "white",
              padding: '.3em'
            }}
          >
            Heidi & Reed
          </Typography>
          <Box>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    color="secondary"
                    {...bindTrigger(popupState)}
                    style={{ fontSize: "28px", fontFamily: "barriecito" }}
                  >
                    More
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    {/* <MenuItem onClick={popupState.close}>
                      <a href={weddingInfo} download={weddingInfo}>
                        <Typography
                          color="secondary"
                          style={{
                            fontFamily: "barriecito",
                            fontSize: "40px",
                            fontWeight: "700",
                            marginLeft: "1px",
                          }}
                        >
                          <span>
                            <DownloadIcon style={{ marginRight: "5px" }} />
                          </span>
                          Info{" "}
                        </Typography>
                      </a>
                    </MenuItem> */}
                    <MenuItem onClick={popupState.close}>
                      <a
                        href="https://www.google.com/maps/place/101+Kennedy+Memorial+Dr,+Hoyt+Lakes,+MN+55750/@47.5203144,-92.1517386,17z/data=!3m1!4b1!4m6!3m5!1s0x52a57b69aff0ae05:0x47a1787c383c706f!8m2!3d47.5203144!4d-92.1491637!16s%2Fg%2F11cpn1rq17?entry=ttu"
                        target="_blank"
                        rel="nonrefferer"
                      >
                        <Typography
                          color="secondary"
                          style={{
                            fontFamily: "barriecito",
                            fontSize: "40px",
                            fontWeight: "700",
                            marginRight: "5px",
                          }}
                        >
                          Directions
                        </Typography>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <a href="https://buy.stripe.com/3csbIR2S89s03oA002">
                        <Typography
                          color="secondary"
                          style={{
                            fontFamily: "barriecito",
                            fontSize: "40px",
                            fontWeight: "700",
                            marginLeft: "5px",
                          }}
                        >
                          Give a Gift
                        </Typography>
                      </a>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>

            {/* 
            <p>|</p> */}

            {/* <p>|</p> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
