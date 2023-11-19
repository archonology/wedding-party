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
      <AppBar
        position="fixed"
        style={{ width: "100%", backgroundColor: "black" }}
      >
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            className="title"
            sx={{
              flexGrow: 1,
              flexShrink: 3,
              fontSize: "27px",
              color: "white",
              padding: ".3em",
            }}
          >
            Heidi & Reed | 2024
          </Typography>
          <Box>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    // color="warning"
                    {...bindTrigger(popupState)}
                    style={{ fontSize: "18px", color: "white" }}
                  >
                    Info
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
                          color="white"
                          style={{
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                        >
                          🗺️ Directions
                        </Typography>
                      </a>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <a href="https://buy.stripe.com/3csbIR2S89s03oA002">
                        <Typography
                          color="white"
                          style={{
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                        >
                          💸 Gift Now
                        </Typography>
                      </a>
                    </MenuItem>
                    <hr />
                    <MenuItem>
                      <Typography
                        color="white"
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      >
                        ☎️ Call{" "}
                        <span style={{ color: "#eebdf9" }}>218-225-3555</span>
                        <br />
                        to reserve a room
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <a
                        href="https://www.google.com/maps/place/Country+Inn+of+Hoyt+Lakes/@47.5190366,-92.1557368,17z/data=!3m1!4b1!4m9!3m8!1s0x52a57b68161e2467:0x39cdfe26c671c54!5m2!4m1!1i2!8m2!3d47.5190367!4d-92.1508659!16s%2Fg%2F1thmkmzv?entry=ttu"
                        target="_blank"
                        rel="nonrefferer"
                      >
                        <Typography
                          color="white"
                          style={{
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                        >
                          @ The Country Inn 🗺️ 🏨
                        </Typography>
                      </a>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
