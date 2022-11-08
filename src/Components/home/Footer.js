import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container grid1">
                    <div className="box">
                        <img src="./assests/favicon.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className="socialIcon">
                            <i className="fab fa-facebook-f "></i>
                            <i className="fab fa-instagram "></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-dribbble"></i>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>News</li>
                            <li>Contact</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Recent Post</h2>
                        <div className="text">
                            <p>3 WooCommerce Plugins to Boost Sales</p>
                            <span>28 Feb 2022</span>
                        </div>
                        <div className="text">
                            <p>3 WooCommerce Plugins to Boost Sales</p>
                            <span>28 Feb 2022</span>
                        </div>
                        <div className="text">
                            <p>3 WooCommerce Plugins to Boost Sales</p>
                            <span>28 Feb 2022</span>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Get In Touch</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="icon">
                            <i className="fa fa-location-dot"></i>
                            <label htmlFor="">Location: 27 Division St, New York0, NY 10002, USA</label>
                        </div>
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                            <label htmlFor="">Phone:+14578 5262 4789</label>
                        </div>
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                            <label htmlFor="/">Email:support@gmail.com</label>
                        </div>
                    </div>
                </div>
                <div className="legal container">
                    <p>Copyright @2022. All rights reserved.</p>
                    <label htmlFor="">
                        Design & Developed by <span>Palak Godhani</span>
                    </label>
                </div>
            </footer>
        </>
    )
}

export default Footer