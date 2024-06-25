import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../features/LoginSlice/LoginSlice";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("This field is required"),
    password: Yup.string()
      .trim()
      .min(6, "Password must be at least 6 characters")
      .required("This field is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      let  data = {
        email : values.email,
        password : values.password,
       };
  
        try{
          let apiurl = `${process.env.REACT_APP_BASE_URL}/api/login`;
  
         const result = await axios.post(apiurl,data)
         .then((res)=>{
          if(res.status == 200){
            toast("Login Successfully");
            console.log(res.data.data)
            let user_data =res.data.data;
            dispatch(login({ status: true, data: user_data }));
            navigate("/");
            resetForm();
          }  else{
            toast(res.response.data.message);
          }
         })
         .catch((errors)=>{
            toast(errors.response.data.message);
          console.log(errors)
   
         })
  
        } catch(error){
          console.log(error)
        }
  
        }


      // const userList =
      //   localStorage.getItem("UserSignupInfoList") !== null &&
      //   localStorage.getItem("UserSignupInfoList") !== undefined &&
      //   localStorage.getItem("UserSignupInfoList") !== ""
      //     ? JSON.parse(localStorage.getItem("UserSignupInfoList"))
      //     : null;
      // if (userList !== null && Array.isArray(userList)) {
      //   let checkLogin = false;
      //   let loggedInUserInfo = {};
      //   userList?.map((item) => {
      //     if (
      //       item.email === values.email &&
      //       item.password === values.password
      //     ) {
      //       checkLogin = true;
      //       loggedInUserInfo = item;
      //     }
      //     return null;
      //   });
      //   if (checkLogin) {
      //     dispatch(login({ status: true, data: loggedInUserInfo }));
      //     toast.success("Login Successfully");
      //     resetForm();
      //     navigate("/");
      //   } else {
      //     toast.error("Invalid credentials!");
      //   }
      // } else {
      //   toast.error("Invalid credentials!");
      // }
    // },
  });

  const { errors, touched, getFieldProps, handleSubmit } = formik;

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-6">
          <h1 className="text-center my-5">Mini Social Network</h1>
          <div className="card shadow p-5 mb-5">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
                  {...getFieldProps("email")}
                />
                {touched?.email && errors?.email ? (
                  <p className="text-danger">{errors?.email}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                  {...getFieldProps("password")}
                />
                {touched?.password && errors?.password ? (
                  <p className="text-danger">{errors?.password}</p>
                ) : null}
              </div>
              <div>
                <button type="submit" className="btn btn-dark w-100 mb-4">
                  Login
                </button>
                <p className="text-center">OR</p>
                <Link to="/signup" className="btn btn-outline-dark w-100">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
