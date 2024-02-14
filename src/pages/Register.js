import React, { useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
   const navigate = useNavigate();
   const schema = yup.object().shape({
      username: yup.string().min(3),
      email: yup
         .string()
         .email("Enter valid email")
         .required("Email is required"),
      password: yup.string().min(3).required("Password is required"),
      confirmPassword: yup
         .string()
         .required("Password is required")
         .oneOf([yup.ref("password"), null], "Passwords must match"),
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
            `${process.env.BACKEND_API}/signup`,
            data
         );
         console.log(response.data);
         if (response.data.status === "success") {
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/");
         }

         console.log(response);
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
                  id="username"
                  label="Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  color="secondary"
                  error={!!errors.username}
                  helperText={errors.username ? errors.username.message : ""}
                  {...register("username")}
               />
               <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="emaili"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
               <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Password"
                  type="password"
                  color="secondary"
                  id="confirmPassword"
                  autoComplete="current-password"
                  error={!!errors.confirmPassword}
                  helperText={
                     errors.confirmPassword
                        ? errors.confirmPassword.message
                        : ""
                  }
                  {...register("confirmPassword")}
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
                  Sign Up
               </Button>
               <p style={{ fontSize: "12px", color: "black" }}>
                  Don't have an account?
                  <Link to="/login"> Sign In</Link>
               </p>
            </Box>
         </Box>
      </Box>
   );
}

export default Register;
