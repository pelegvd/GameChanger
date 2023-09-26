import React from "react";
import "./footer.css";
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>About Us</h3>
                        <p>We are a web development company that specializes in building React applications.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <p>
                            <a href="mailto:hello@example.com">hello@example.com</a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Social Media</h3>
                        <ul className="social-media-links">
                            <li>
                                <a href="https://www.facebook.com/example">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/example">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/example">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright">Copyright &copy; 2023 Example Company</p>
        </footer>
    );
}

export default Footer;