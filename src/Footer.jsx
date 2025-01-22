import "./Footer.css";
import logo from "./assets/RR-LOGO-PURPLE.png";

export default function Footersection(){
    return(
        <section className="footer" id="footer">
            <div className="footer-container">
                <div className="contact-info">
                <img
                    alt="Company logo"
                    height="100"
                    src={logo}
                    width="100"
                />
                <div className="contact-details">
                    <h2>Get in touch</h2>
                    <p>
                    <i className="fas fa-map-marker-alt"></i> Jl. Lintas Sumatera,
                    Panti, Kabupaten Pasaman, Sumatera Barat
                    </p>
                    <p>
                    <i className="fas fa-phone"></i> +6282386401813
                    </p>
                    <p>
                    <i className="fas fa-envelope"></i> rifkirrmdni@gmail.com
                    </p>
                </div>
                </div>
                <div className="social-media">
                <p>Reach me on social media :</p>
                <div className="social-icons">
                    <a href="#">
                    <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#">
                    <i className="bx bxl-github"></i>
                    </a>
                    <a href="#">
                    <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                    <i className="bx bxl-tiktok"></i>
                    </a>
                </div>
                </div>
                <div className="copyright">© Copyright 2024 Rifki</div>
            </div>
        </section>
    )
}