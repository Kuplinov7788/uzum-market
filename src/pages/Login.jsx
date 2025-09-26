import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [getadmin , setgetadmin] =  useState([])
  const [username , setusername] =  useState("")
  const [password , setpassword] =  useState("")
  const getADMIN =  async () => {
    const res = await fetch("http://localhost:3002/admin");
    const data = await res.json();
    setgetadmin(data);
    console.log(getadmin);

  }
 useEffect(() => {
   getADMIN()
 },[])
  const lyuboy = getadmin.find(e => e.username === username && e.password === password)
  if (lyuboy) {
    useNavigate("/admin")
  } else {
    alert("Login yoki parol xato")
  }
  console.log(lyuboy);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" onChange={(e) => setusername(e.target.value)} className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
