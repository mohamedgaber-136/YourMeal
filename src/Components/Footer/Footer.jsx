import React from 'react'
import './Footer.css'
import logo from './1e9cf8c38ea64103aa002a5ecbb50d39__1_-removebg-preview.png'
export const Footer = () => {
  return (
    <footer className="footer-16371 overflow-hidden py-2">
      <div >
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="footer-site-logo mb-4">
              <img src={logo} alt="logo" width={'150px'} height={'150px'} />
            </div>
            <ul className="list-unstyled nav-links mb-5">
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <div className="social mb-4">
              <h3>Stay in touch</h3>
              <ul className="list-unstyled  justify-content-center d-flex">
                <li className="in"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="fb"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                <li className="tw"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li className="pin"><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                <li className="dr"><a href="#"><i className="fa-solid fa-basketball"></i></a></li>
              </ul>
            </div>

            <div className="copyright">
              <p className="mb-0"><small>&copy; YourMeal. All Rights Reserved.</small></p>
            </div>


          </div>
        </div>
      </div>
    </footer>
  )
}
