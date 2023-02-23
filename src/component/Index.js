import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BasicDetails from "./BasicDetails";
import Register from "./Register";

import "./style.css";
import { useState } from "react";


const Index = () => {

   const[data, setData]=useState(<BasicDetails/>)
    console.log(data);

    // let navigate = useNavigate()


   const [copydata, setCopydata] =useState([]);

   

    const search = (e) =>{
        // console.log(e);

        let getData= e.toLowerCase();
      //  console.log(getData);
      if(getData =="basicdetails"){
       // navigate('/basicDetails')
       window.open("/basicDetails" ,'_self');

      }
    }
  return (
    <div className="container-fluid">
      <header>
        <img
          style={{ width: "80px", marginTop: "10px" }}
          src="https://eventplanet.in/assets/home/logo_main.png"
          alt=""
        />
        <span>
          <select name="" id="">
            <option value=""></option>
            <option value="">my account</option>
          </select>
        </span>
        <span>Blog</span>
        <span>Login/signup</span>
      </header>
      <div className="d-flex">
        <section className="mt-2 row">
          <BrowserRouter>
            <nav
              className="col-3"
              style={{ backgroundColor: "lightcyan", width: 200 }}
            >
              <div className="mb-2">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/register"
                >
                  Create Account
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  className="text-decoration-none text-dark  w-100"
                  to="/register"
                >
                  Post My Work
                </Link>
              </div>
              <div className="mb-2">
                <input style={{ width: 180 }} 
                onChange={(e)=>search(e.target.value)} type="text" />
              </div>
              <div className="mb-3">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/my-pic"
                >
                  My Profile Picture
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/contact"
                >
                  contact
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/discribe"
                >
                  Describe your bussiness and services{" "}
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/my-services"
                >
                  My Services & Pricing
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/update"
                >
                  Update Your Calendar
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/ select-multiple"
                >
                  Select Multiple Category
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className="text-decoration-none text-dark w-100"
                  to="/basicDetails"
                >
                  BasicDetails
                </Link>
              </div>
            </nav>
            <main className="col-9">
              <Routes>
                <Route path="basicDetails" element={<BasicDetails />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </main>
          </BrowserRouter>
        </section>
      </div>
    </div>
  );
};

export default Index;
