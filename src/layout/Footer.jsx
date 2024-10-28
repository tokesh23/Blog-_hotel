import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="row  pt-2" id="blue">
        <div className="col-md-4 text-center">
          <h3 style={{ color: '#bee9e8' }}>Stay informed</h3>
          <p className="text-light" style={{ fontSize: '0.82em' }}>Sign up for our newsletter.</p>
        </div>

        <div className="col-md-8 text-center mt-4">
          <input type="text" placeholder="Your Email Address" id="ipt" />
          <button type="button" className="btn btn-primary btn-lg" id="btn">
            Subscribe <i className="fas fa-arrow-right" />
          </button>
        </div>

        <hr />

        <div className="col-md-3 text-center">
          <h5><i className="fa-solid fa-trailer"></i> Mass General Brigham</h5>
          <p className="mt-4" style={{ fontSize: '0.80em' }}>
            Mass General Development Office <br />
            <span style={{ fontSize: '1.00em', color: 'gray' }}>125 Nashua Street Suite 540 <br /> Boston, MA 02114-1101</span>
          </p>
          <p>617.726.2200</p>
          <p style={{ fontSize: '0.90em' }}>mgdevelopment@partners.org</p>
          <h4 style={{ color: 'skyblue' }} id="social-icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </h4>
        </div>

        <div className="col-md-3 mt-3 text-center">
          <p><b>Stories</b><br /><span style={{ fontSize: '0.80em', color: 'gray' }}>Find out what makes Mass General input Get inspired</span></p>
          <hr />
          <p className="text-start mt-5"><b>Events</b><br /><span style={{ fontSize: '0.80em', color: 'gray' }}>Turn your empathy into action. Get involved.</span></p>
          <p className="text-start mt-5"><b>Where to Give</b><br /><span style={{ fontSize: '0.80em', color: 'gray' }}>Where can you make a difference? Get informed</span></p>
          <p className="text-start mt-5"><b>How to give</b><br /><span style={{ fontSize: '0.80em', color: 'gray' }}>Turn your empathy into action. Get involved.</span></p>
        </div>

        <div className="col-md-3 text-center">
          <h6 className="text-info">ABOUT</h6>
          <p className="mt-4 pt-4 text-light">Frequently Asked Questions</p>
          <p className="mt-4 pt-4 text-light">Massachusetts General Hospital</p>
          <p className="mt-4 pt-4 text-light">Massachusetts General Brigham</p>
          <p className="mt-4 pt-4 text-light">Store</p>
        </div>

        <div className="col-md-3 text-center">
          <h6 className="text-info">PRIVACY & SECURITY</h6>
          <p className="mt-5 text-light">Page Disclosures</p>
          <p className="mt-5 text-light">Privacy Policy</p>
          <p className="mt-5 text-light">Social Media Policy</p>
          <p className="mt-5 text-light">Copyright Notice</p>
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <hr />
              <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum odit eum quas facilis totam dignissimos, aspernatur nulla aliquam doloribus fugit beatae.</p>
              <p style={{ color: 'gray' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quasi.</p>
              <p style={{ color: 'gray' }}>Lorem ipsum &copy; 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
