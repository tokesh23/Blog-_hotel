import React from 'react'
import "./Header.css";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Blog from "../assets/blog-removebg-preview.png"


const Header = () => {
  return (
    <div>
         <div className="row text-center mt-1 " id="light">
                    <div className="col-md-2 mt-2">
                        <img src={Blog} alt="" width="40%"/>
                    </div>
                    <div className="col-md-3 mt-3">
                        <input type="text" placeholder="Search" id="ipt"/>
                        <i className="fa-solid fa-magnifying-glass" id="search_icon"></i>
                        {/* <b><hr id="hr" className="text-center"></b> */}
                    </div>
                    <div className="col-md-4 mt-3" > 
                        <ul id="ul">
                            <a href="./index.php"><li>Home</li></a>
                            <li>About</li>
                            <li>Contact</li>
                          <a href="./login.php"><li>Login</li></a>
                        </ul>
                    </div>
                    <div className="col-md-2 mt-3" id="icon" > 
                    <FaFacebook />
                    <CiInstagram />
                    <FaPinterest />
                    <CiTwitter />
                    </div>



                   
                </div>
 
    </div>
  )
}

export default Header