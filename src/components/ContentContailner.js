import React from "react";
import Header from "./Header";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import { Box, useMediaQuery } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";

function ContentContailner({ toggleDrawer, user }) {
   const matches = useMediaQuery("(min-width:900px)");
   return (
      <Box
         sx={{
            background:
               "linear-gradient(90deg, rgba(50,49,48,1) 19%, rgba(93,94,63,1) 52%, rgba(23,82,130,1) 100%)",
         }}
         width="100%"
         px={matches ? 10 : 5}
      >
         <Header toggleDrawer={toggleDrawer} user={user} />
         {!matches && (
            <Box width="100%">
               <DehazeIcon onClick={(e) => toggleDrawer(e)} />
            </Box>
         )}
         <CardContainer />
         <Footer />
      </Box>
   );
}

export default ContentContailner;
