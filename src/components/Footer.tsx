import React from "react";
import "../stylesheets/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join us with new events</p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Game Changer © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

// import React from "react";
// import "./footer.css";
// function Footer() {
//     return (
//         <footer>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <h3>About Us</h3>
//                         <p>We are a web development company that specializes in building React applications.</p>
//                     </div>
//                     <div className="col-md-4">
//                         <h3>Contact Us</h3>
//                         <p>
//                             <a href="mailto:hello@example.com">hello@example.com</a>
//                         </p>
//                     </div>
//                     <div className="col-md-4">
//                         <h3>Social Media</h3>
//                         <ul className="social-media-links">
//                             <li>
//                                 <a href="https://www.facebook.com/example">
//                                     <i className="fab fa-facebook-f"></i>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://www.twitter.com/example">
//                                     <i className="fab fa-twitter"></i>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://www.instagram.com/example">
//                                     <i className="fab fa-instagram"></i>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <p className="copyright">Copyright &copy; 2023 Example Company</p>
//         </footer>
//     );
// }

// export default Footer;
