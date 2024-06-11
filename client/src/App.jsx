import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Profile from "./page/Profile"
import SignUp from "./page/Signup"
import SignIn from "./page/Signin"
import About from "./page/About"
import Header from './Component/Header'
import React from "react"
export default function App() {
  return (
    <BrowserRouter>
    {/* {header} */}
    <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/profile" element ={<Profile/>}/>
        <Route path="/sign-up" element ={<SignUp/>}/>
        <Route path="/sign-in" element ={<SignIn/>}/>
        <Route path="/about" element ={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}
