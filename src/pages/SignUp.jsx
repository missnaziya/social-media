import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().trim().required("This field is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("This field is required"),
    password: Yup.string()
      .trim()
      .min(6, "Password must be at least 6 characters")
      .required("This field is required"),
    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("This field is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      let data = {
        name: values.fullName,
        fullName:values.fullName,
        email: values.email,
        password: values.password,
        confirm_password: values.confirmPassword,
      };
      try {
        let apiurl = `${process.env.REACT_APP_BASE_URL}/api/signUp`;
        axios
          .post(apiurl, data)
          .then((result) => {
            if (result.status === 201) {
              toast("Account Created Successfully");
              resetForm();
            } else {
              toast(result.status);
            }
          })
          .catch((error) => {
            toast(error?.response?.data?.message);
            console.log("Error", error);
          });
      } catch (error) {
        console.log("Error", error);
      }

      delete values.confirmPassword;
      // let userList =
      //   localStorage.getItem("UserSignupInfoList") !== null &&
      //   localStorage.getItem("UserSignupInfoList") !== undefined &&
      //   localStorage.getItem("UserSignupInfoList") !== ""
      //     ? JSON.parse(localStorage.getItem("UserSignupInfoList"))
      //     : null;
      // if (userList !== null && Array.isArray(userList)) {
      //   alert("true")
      //   let checkIsEmailExists = false;
      //   userList.map((item) => {
      //     if (item.email === values.email) {
      //       checkIsEmailExists = true;
      //     }
      //     return null;
      //   });
      //   if (checkIsEmailExists) {
      //     toast.error("This Email is already exists");
      //   } else {
      //     userList = [...userList, values];
      //     localStorage.setItem("UserSignupInfoList", JSON.stringify(userList));
      //     toast.success("Account Created Successfully");
      //     resetForm();
      //     navigate("/login");
      //   }
      // } else {
      //   alert("false")

      //   localStorage.setItem("UserSignupInfoList", JSON.stringify([values]));
      //   toast.success("Account Created Successfully");
      //   resetForm();
      //   navigate("/login");
      // }
    },
  });

  const { errors, touched, getFieldProps, handleSubmit } = formik;

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-6">
          <h1 className="text-center my-5">Mini Social Network</h1>
          <div className="card shadow p-5 mb-5">
            <h2 className="text-center mb-4">Sign up</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-4">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="form-control"
                  {...getFieldProps("fullName")}
                />
                {touched?.fullName && errors?.fullName ? (
                  <p className="text-danger">{errors?.fullName}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  className="form-control"
                  {...getFieldProps("password")}
                />
                {touched?.password && errors?.password ? (
                  <p className="text-danger">{errors?.password}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-control"
                  {...getFieldProps("confirmPassword")}
                />
                {touched?.confirmPassword && errors?.confirmPassword ? (
                  <p className="text-danger">{errors?.confirmPassword}</p>
                ) : null}
              </div>
              <div>
                <button type="submit" className="btn btn-dark w-100 mb-4">
                  Sign up
                </button>
                <p className="text-center">OR</p>
                <Link to="/login" className="btn btn-outline-dark w-100">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
