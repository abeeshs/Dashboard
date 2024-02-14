import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Box, styled } from "@mui/material";
import ContentContailner from "../components/ContentContailner";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)({
   display: "flex",
});

function Dashboard() {
   const navigate = useNavigate();
   const [user, setUser] = useState({});
    //State for handling sidebar
    const [openSidebar, setOpenSidebar] = useState(false);

   //Function to fetch user data
   const getUserData = async () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      const token = userData;
      if (!token) return navigate("/login");
      try {
         const response = await axios.get("http://localhost:5000", {
            headers: { Authorization: `Bearer ${token}` },
         });
         const user = response.data.user;
         if (!response.data.status) return navigate("/login");
         setUser(user);
      } catch (err) {
         console.log(err);
         toast.error("Something went wrong");
      }
   };
   //useEffect for fetching the user details
   useEffect(() => {
      getUserData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

  
   const toggleDrawer = (event) => {
      setOpenSidebar(!openSidebar);
   };

   return (
      <MainBox>
         <Sidebar openSidebar={openSidebar} toggleDrawer={toggleDrawer} />
         <ContentContailner toggleDrawer={toggleDrawer} user={user} />
      </MainBox>
   );
}

export default Dashboard;
