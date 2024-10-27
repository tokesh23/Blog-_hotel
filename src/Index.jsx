import React from 'react';
import "./ind.css"

const Index = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video autoPlay muted controls>
              <source src="video/second.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video autoPlay muted controls>
              <source src="video/Hotel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video autoPlay muted controls>
              <source src="video/third.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 

      <div className="container">
        <div className="row text-center mt-2">
          <div className="col-md-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis 
              sapiente corporis asperiores repellendus aspernatur cum atque quibusdam officia, fugit officiis?
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col-md-2"></div>
          <div className="col-md-3 position-relative">
            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="100%" height="300px" />
            <div className="overlay-text"><h4>Hotel</h4></div>
          </div>
          <div className="col-md-3 position-relative">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="100%" height="300px" />
            <div className="overlay-text"><h4>Food</h4></div>
          </div>
          <div className="col-md-3 position-relative">
            <img src="https://images.pexels.com/photos/426893/pexels-photo-426893.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="100%" height="300px" />
            <div className="overlay-text"><h4>Mood</h4></div>
          </div>
        </div>
      </div>

      <div className="row pt-5" id="blo">
        <div className="col-md-2"></div>
        <div className="col-md-2 d-flex">
          <h4>As featured in</h4>
          <h4 className="line">|</h4>
        </div>
        <div className="col-md-8" id="blog">
          <div>
            <h4><b>travel</b></h4>
            <h5 className="travel">blog</h5>
          </div>
          <div className="text-center">
            <i className="fas fa-plane" style={{ fontSize: '1.20em' }}></i>
            <h4>PLANE <span><b>TOUR</b></span></h4>
          </div>
          <div className="text-center">
            <h5><b>WORLD</b></h5>
            <h5><b>TRAVEL</b></h5>
          </div>
          <div className="text-center">
            <i className="fa-brands fa-cloudflare" style={{ fontSize: '2.90em' }}></i>
            <h4><b>SKYCLOUD</b></h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="card mb-3" id="img-div" style={{ width: '80%' }}>
              <img src="https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="" style={{ width: '100%' }} height="550" />
              <div className="card-body text-start">
                <h5 className="card-title text-primary">𝚃𝚑𝚎 𝙶𝚒𝚛𝚕 𝙸𝚙𝚊𝚗𝚎𝚖𝚊</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                <hr />
                <i className="fa-solid fa-eye"></i> 0 
                <i className="fa-regular fa-message"></i> 0
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Section */}
      <div className="row text-center bg-primary pt-2 text-light d-flex justify-content-center" id="social">
        <div className="col-md-2" id="soci-icon">
          <i className="fa-brands fa-facebook" style={{ fontSize: '1.40em' }}></i> Facebook
        </div>
        <div className="col-md-2">
          <i className="fa-brands fa-instagram" style={{ fontSize: '1.40em' }}></i> Instagram
        </div>
        <div className="col-md-2">
          <i className="fa-brands fa-pinterest" style={{ fontSize: '1.40em' }}></i> Pinterest
        </div>
        <div className="col-md-2">
          <i className="fa-brands fa-twitter" style={{ fontSize: '1.40em' }}></i> Twitter
        </div>   
      </div>

      <div className="row mt-2">
        <div className="col-md-3 g-0">
          <img src="https://images.pexels.com/photos/12507496/pexels-photo-12507496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%" height="310" />
        </div>
        {/* Additional Images */}
      </div>
    </div>
  );
};

export default Index;
