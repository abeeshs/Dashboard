import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
   const navigate = useNavigate();
   const schema = yup.object().shape({
      email: yup
         .string()
         .email("Enter valid email")
         .required("Email is required"),
      password: yup.string().min(3).required("Password is required"),
   });

   // setting schema
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   });
   // form on submit function
   const onSubmit = async (data) => {
      try {
         const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}/login`,
            data
         );
         console.log(response.data.token);
         console.log(response.data.status);
         if (response.data.status === "success") {
            localStorage.setItem("user", JSON.stringify(response.data.token));
            navigate("/");
         }
      } catch (error) {
         console.log(error.response?.data?.message);
         const errorMessage = error.response?.data?.message;
         toast.error(errorMessage);
      }
   };
   useEffect(() => {
      const token = JSON.parse(localStorage.getItem("user"));
      if (token) return navigate("/");
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <Box
         bgcolor="#fff"
         height="100vh"
         width="100%"
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
         <Toaster />
         <Box
            sx={{
               width: "500px",
               backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust opacity as needed
               backdropFilter: "blur(10px)", // Adjust blur radius as needed
               boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", // Adjust shadow as needed
               borderRadius: "10px",
               border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
         >
            <Box
               component="form"
               onSubmit={handleSubmit(onSubmit)}
               noValidate
               sx={{ p: 5 }}
            >
               <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="emaili"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  color="secondary"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  {...register("email")}
               />

               <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  color="secondary"
                  id="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                  {...register("password")}
               />

               <p style={{ color: "grey", float: "right" }}>Forgot password?</p>

               <Button
                  className="login-btn"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                     backgroundColor: "black",
                     mt: 1,
                     mb: 2,
                     textTransform: "capitalize",
                  }}
               >
                  Sign In
               </Button>
               <p style={{ fontSize: "12px", color: "black" }}>
                  Don't have an account?
                  <Link to="/signup"> Sign Up</Link>
               </p>
            </Box>
         </Box>
      </Box>
   );
}

export default Login;
