import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const CardBox = styled(Grid)({
   width: "100%",
   marginLeft: "-24px",
});

const CustomCard = styled(Box)({
   width: "100%",
   minHeight: "140px",
   borderRadius: "15px",
   background: "linear-gradient(to right, #faf9f8a1, #f2eded14)",
   display: "flex",
   flexDirection: "column",
   justifyContent: "space-between",
   padding: "5px",
   color: "#fff",
});

function CardContainer() {
   return (
      <Box mt={2} sx={{ borderBottom: "1px solid #ffffff30", pb: "45px" }}>
         <Typography mt={2} sx={{ color: "#fff" }}>
            Dashboard
         </Typography>
         <CardBox container ml="2px" mt={1} spacing={3}>
            {[2, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
               <Grid item xs={12} sm={12} md={6} lg={4} key={item}>
                  <CustomCard>
                     <Box
                        sx={{
                           height: "50%",
                           display: "flex",
                           justifyContent: "end",
                           alignItems: "center",
                        }}
                     >
                        <QuestionAnswerOutlinedIcon
                           sx={{ color: "#fff", fontSize: "52px" }}
                        />
                     </Box>
                     <Box height="50%">
                        <Typography sx={{ fontWeight: "600" }}>
                           Components
                        </Typography>
                        <Typography
                           sx={{ fontWeight: "400", fontSize: "13px" }}
                        >
                           This is randomly generated component for the design
                           purpose original contend will be replaced
                        </Typography>
                     </Box>
                  </CustomCard>
               </Grid>
            ))}
         </CardBox>
      </Box>
   );
}

export default CardContainer;
