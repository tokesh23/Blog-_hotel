import React from 'react';
import "./Contact.css"
import Footer from './layout/Footer';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h1>
                <CiLocationOn />
                </h1>
                <p><strong>Our Main Office</strong></p>
                <p>SoHo 94 Broadway St New</p>
                <p>York, NY 1001</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h2><FaPhoneAlt /></h2>
                <p><strong>Phone Number</strong></p>
                <p>+1 (123) 456-7890</p>
                <p>Support 24/7</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h1> <FaRocketchat />
                </h1>
                <p><strong>WhatsApp</strong></p>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-light shadow-sm">
              <div className="card-body">
                <h1><MdOutlineMailOutline /></h1>
                <p><strong>Email Us</strong></p>
                <p>info@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-12">
          <h1>Contact Us</h1>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12" id="box">
              <div className="row mt-3">
                <div className="col-md-5 gy-5">
                  <form>
                    <div className="form-group">
                      <label htmlFor="username" style={{ color: 'white' }}><b>Username</b></label>
                      <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                    </div>

                    <div className="form-group mt-5">
                      <label htmlFor="mobile" style={{ color: 'white' }}><b>Mobile Number</b></label>
                      <input type="text" className="form-control" id="mobile" placeholder="Enter your mobile number" required />
                    </div>

                    <div className="form-group mt-5" style={{ color: 'white' }}>
                      <label htmlFor="address"><b>Address</b></label>
                      <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
                    </div>
                  </form>
                </div>

                <div className="col-md-5 gy-5">
                  <form>
                    <div className="form-group" style={{ color: 'white' }}>
                      <label htmlFor="fatherName"><b>Father's Name</b></label>
                      <input type="text" className="form-control" id="fatherName" placeholder="Enter your father's name" required />
                    </div>

                    <div className="form-group mt-5">
                      <label htmlFor="whatsapp" style={{ color: 'white' }}><b>WhatsApp Number</b></label>
                      <input type="text" className="form-control" id="whatsapp" placeholder="Enter your WhatsApp number" required />
                    </div>

                    <div className="form-group mt-5" style={{ color: 'white' }}>
                      <label htmlFor="email"><b>Email</b></label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <div className="form-group">
                  <label htmlFor="message" id="msg">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <button id="btn" className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
