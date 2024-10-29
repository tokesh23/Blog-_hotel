import React from 'react';
import "./Login.css";
import Footer from './layout/Footer';

const Login = () => {
  return (
    <div>
      <div id="main">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 mt-5" id="white">
              <div className="row text-center">
                <div className="col-md-6 pt-2" id="login">
                  <h4><b>Login</b></h4>
                  <p className="dont">Doesn't have an account yet? <span><a href="">Sign up</a></span></p>

                  <form>
                    <label htmlFor="email"><b>Email Address</b></label><br />
                    <input type="email" id="email" placeholder="Email Address" required /><br />
                    <label htmlFor="password" className="mt-4"><b>Password</b></label><br />
                    <input type="password" id="password" placeholder="Password" required />
                    <button type="submit" className="btn" id="btn">Login</button>
                  </form>

                  <button type="button" className="btn btn-primary btn-lg" id="socil-btn" style={{ color: 'brown', borderColor: 'brown' }}>
                    <i className="fa-brands fa-google"></i> Google
                  </button>
                  <button type="button" className="btn btn-primary btn-lg" id="socil-btn" style={{ color: 'blue' }}>
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </button>
                </div>
                <div className="col-md-6 mt-1">
                  <img src="https://thumbs.dreamstime.com/b/technology-class-using-smart-whiteboard-flat-design-side-view-tech-savvy-classroom-theme-animation-monochromatic-color-scheme-320055947.jpg" alt="Person reading" width="80%"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Login;
