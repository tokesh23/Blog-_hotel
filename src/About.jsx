import React from 'react';
import "./About.css"
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-5 mt-5">
            <h2>𝙰𝚋𝚘𝚞𝚝 Us</h2>
            <p className="font_8 wixui-rich-text_text mt-5" style={{ lineHeight: '1.5em', fontSize: '15px' }}>
              <span className="color_15 wixui-rich-texttext">
                <span style={{ letterSpacing: 'normal' }} className="wixui-rich-text_text">
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                </span>
              </span>
            </p>

            <p>
              <span style={{ letterSpacing: 'normal' }} className="wixui-rich-text__text mt-5">
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
              </span>
            </p>

            <span style={{ letterSpacing: 'normal' }} className="wixui-rich-text__text mt-5">
              Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </span>

            <p className="mt-4">Contact Me: Info@mysite.com</p>
          </div>
          <div className="col-md-5 mt-5 mb-2">
            <img
              src="https://qodeinteractive.com/magazine/wp-content/uploads/2019/08/Featured-Stock-1240x623.jpg"
              className="img-fluid"
              alt="Featured"
              width="90%"
              id="img"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="row gy-3 text-center bg-primary text-light d-flex justify-content-center " id="social">
      
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
           
            <div className="row g-0">
              <div className="col-md-2">
                <img
                  src="https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Giraffe"
                  width="100%"
                />
              </div>
              <div className="col-md-2">
                <img
                  src="https://images.pexels.com/photos/12507496/pexels-photo-12507496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Beautiful Scenery"
                  width="100%"
                  height="310vh"
                />
              </div>
              <div className="col-md-2">
                <img
                  src="https://images.pexels.com/photos/27637391/pexels-photo-27637391/free-photo-of-vase-with-dried-twigs-and-a-candle-burning-in-an-old-fashioned-candlestick-holder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Decorative Vase"
                  width="100%"
                />
              </div>
              <div className="col-md-2">
                <img
                  src="https://images.pexels.com/photos/28985698/pexels-photo-28985698/free-photo-of-charming-yellow-door-in-naxos-greece.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Yellow Door"
                  width="100%"
                />
              </div>
              <div className="col-md-2">
                <img
                  src="https://images.pexels.com/photos/27220731/pexels-photo-27220731/free-photo-of-a-bee-is-on-a-sunflower-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Bee on Sunflower"
                  width="100%"
                />
              </div>
              <div className="col-md-2">
                <img
                  src="https://images.pexels.com/photos/11986432/pexels-photo-11986432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Flower"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
        
    </div>
  );
};

export default About;
