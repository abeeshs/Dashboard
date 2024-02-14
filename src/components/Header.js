import {
   Avatar,
   Badge,
   Box,
   IconButton,
   Typography,
   useMediaQuery,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";

function Header({ user }) {
   const matches = useMediaQuery("(min-width:900px)");

   return (
      <Box
         py={2}
         sx={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",

            borderBottom: "1px solid #ffffff30",
         }}
      >
         <Box sx={{ display: "flex" }}>
            <Avatar
               sx={{ border: "1px solid red", backgroundColor: "black" }}
            />
            <Box mx={1}>
               <Typography sx={{ color: "#fff", textTransform: "capitalize" }}>
                  Welcome Back {user?.name}
               </Typography>
               <Typography
                  sx={{ color: "#fff", fontWeight: "400", fontSize: "13px" }}
               >
                  {user?.email}
               </Typography>
            </Box>
         </Box>

         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               width: "200px",
               justifyContent: "center",
               gap: 1,
               marginTop: matches ? "10px" : "10px",
            }}
         >
            <IconButton sx={{ backgroundColor: "black" }}>
               <SearchIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton sx={{ backgroundColor: "black" }}>
               <SmsOutlinedIcon sx={{ color: "#fff" }} />
            </IconButton>
            <Badge
               badgeContent={4}
               sx={{
                  "& .MuiBadge-badge": {
                     backgroundColor: "red",
                     color: "#fff",
                  },
               }}
            >
               <IconButton sx={{ backgroundColor: "black" }}>
                  <AlbumOutlinedIcon sx={{ color: "#fff" }} />
               </IconButton>
            </Badge>
            <Badge
               badgeContent={4}
               sx={{
                  "& .MuiBadge-badge": {
                     backgroundColor: "red",
                     color: "#fff",
                  },
               }}
            >
               <IconButton sx={{ backgroundColor: "black" }}>
                  <NotificationsNoneOutlinedIcon sx={{ color: "#fff" }} />
               </IconButton>
            </Badge>
         </Box>
      </Box>
   );
}

export default Header;
