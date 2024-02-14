import {
   Box,
   Drawer,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   useMediaQuery,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import DataSaverOnRoundedIcon from "@mui/icons-material/DataSaverOnRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import { useNavigate } from "react-router-dom";

function Sidebar({ openSidebar, toggleDrawer }) {
   const matches = useMediaQuery("(min-width:900px)");
   const navigate = useNavigate();

   const handleLogout = () => {
      localStorage.setItem("user", null);
      navigate("/login");
   };

   return (
      <>
         {matches ? (
            <Box
               sx={{
                  width: "20%",
                  // height: "100vh",
                  border: "1px sold grey",
                  bgcolor: "black",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
               }}
            >
               <List>
                  <img
                     src="https://gingertechnologies.in/images/footer_logo.svg"
                     alt="logo"
                  />
                  <ListItemButton sx={{ marginTop: "5px" }}>
                     <ListItemText
                        sx={{
                           color: "#fff",
                           "& .MuiTypography-root": { fontSize: "12px" },
                        }}
                        primary="Main"
                     />
                  </ListItemButton>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <HomeIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#fff" }} primary="Inbox" />
                     </ListItemButton>
                  </ListItem>
                  <ListItemButton>
                     <ListItemText
                        sx={{
                           color: "#fff",
                           "& .MuiTypography-root": { fontSize: "12px" },
                        }}
                        primary="Manage"
                     />
                  </ListItemButton>
                  {[
                     { name: "Inbox", icon: <SmsOutlinedIcon /> },
                     { name: "Channels", icon: <DashboardOutlinedIcon /> },
                     { name: "Business Profile", icon: <PersonRoundedIcon /> },
                     { name: "Insights", icon: <LeaderboardRoundedIcon /> },
                  ].map((item) => (
                     <ListItemButton key={item.name}>
                        <ListItemIcon sx={{ color: "#fff" }}>
                           {item.icon}
                        </ListItemIcon>
                        <ListItemText
                           sx={{ color: "#fff" }}
                           primary={item.name}
                        />
                     </ListItemButton>
                  ))}

                  <ListItemButton>
                     <ListItemText
                        sx={{
                           color: "#fff",
                           "& .MuiTypography-root": { fontSize: "12px" },
                        }}
                        primary="Settings"
                     />
                  </ListItemButton>
                  {[
                     { name: "Create Role ", icon: <DataSaverOnRoundedIcon /> },
                     {
                        name: "Create Users",
                        icon: <PersonAddAlt1RoundedIcon />,
                     },
                     { name: "Settings", icon: <SettingsRoundedIcon /> },
                  ].map((item) => (
                     <ListItemButton key={item.name}>
                        <ListItemIcon sx={{ color: "#fff" }}>
                           {item.icon}
                        </ListItemIcon>
                        <ListItemText
                           sx={{ color: "#fff" }}
                           primary={item.name}
                        />
                     </ListItemButton>
                  ))}
               </List>
               <List>
               <ListItemButton>
                        <ListItemIcon sx={{ color: "#fff" }}>
                           <DataSaverOnRoundedIcon />
                        </ListItemIcon>
                        <ListItemText
                           sx={{ color: "#fff" }}
                           primary="Profile"
                        />
                     </ListItemButton>
                     <ListItemButton onClick={() => handleLogout()}>
                        <ListItemIcon sx={{ color: "#fff" }}>
                           <PersonAddAlt1RoundedIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#fff" }} primary="Logout" />
                     </ListItemButton>
               </List>
            </Box>
         ) : (
            <Drawer anchor="left" open={openSidebar} onClose={toggleDrawer}>
               <Box
                  sx={{
                     // height: "100%",
                     border: "1px sold grey",
                     bgcolor: "black",
                     color: "#fff",
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "space-between",
                  }}
               >
                  <img
                     src="https://gingertechnologies.in/images/footer_logo.svg"
                     alt="logo"
                  />

                  <List>
                     <ListItemButton>
                        <ListItemText
                           sx={{
                              color: "#fff",
                              "& .MuiTypography-root": { fontSize: "12px" },
                           }}
                           primary="Main"
                        />
                     </ListItemButton>
                     <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                              <HomeIcon sx={{ color: "#fff" }} />
                           </ListItemIcon>
                           <ListItemText
                              sx={{ color: "#fff" }}
                              primary="Inbox"
                           />
                        </ListItemButton>
                     </ListItem>
                     <ListItemButton>
                        <ListItemText
                           sx={{
                              color: "#fff",
                              "& .MuiTypography-root": { fontSize: "12px" },
                           }}
                           primary="Manage"
                        />
                     </ListItemButton>
                     {[
                        { name: "Inbox", icon: <SmsOutlinedIcon /> },
                        { name: "Channels", icon: <DashboardOutlinedIcon /> },
                        {
                           name: "Business Profile",
                           icon: <PersonRoundedIcon />,
                        },
                        { name: "Insights", icon: <LeaderboardRoundedIcon /> },
                     ].map((item) => (
                        <ListItemButton key={item.name}>
                           <ListItemIcon sx={{ color: "#fff" }}>
                              {item.icon}
                           </ListItemIcon>
                           <ListItemText
                              sx={{ color: "#fff" }}
                              primary={item.name}
                           />
                        </ListItemButton>
                     ))}

                     <ListItemButton>
                        <ListItemText
                           sx={{
                              color: "#fff",
                              "& .MuiTypography-root": { fontSize: "12px" },
                           }}
                           primary="Settings"
                        />
                     </ListItemButton>
                     {[
                        {
                           name: "Create Role ",
                           icon: <DataSaverOnRoundedIcon />,
                        },
                        {
                           name: "Create Users",
                           icon: <PersonAddAlt1RoundedIcon />,
                        },
                        { name: "Settings", icon: <SettingsRoundedIcon /> },
                     ].map((item) => (
                        <ListItemButton key={item.name}>
                           <ListItemIcon sx={{ color: "#fff" }}>
                              {item.icon}
                           </ListItemIcon>
                           <ListItemText
                              sx={{ color: "#fff" }}
                              primary={item.name}
                           />
                        </ListItemButton>
                     ))}
                  </List>
                  <List>
                     <ListItemButton>
                        <ListItemIcon sx={{ color: "#fff" }}>
                           <DataSaverOnRoundedIcon />
                        </ListItemIcon>
                        <ListItemText
                           sx={{ color: "#fff" }}
                           primary="Profile"
                        />
                     </ListItemButton>
                     <ListItemButton onClick={() => handleLogout()}>
                        <ListItemIcon sx={{ color: "#fff" }}>
                           <PersonAddAlt1RoundedIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#fff" }} primary="Logout" />
                     </ListItemButton>
                  </List>
               </Box>
            </Drawer>
         )}
      </>
   );
}

export default Sidebar;
