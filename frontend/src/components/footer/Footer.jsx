import './Footer.css'
import { assets } from '../../assets/assets';
const Footer = () => {
    return (
        <>
        <div className="footer-top"><a href="/">Back to Top</a></div>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1 className='footer-content-logo'>FreshyBite.</h1>
                    <p>At FreshyBite, we believe fresh food makes happy meals. From our kitchen to your doorstep, we ensure quality, taste, and freshness in every bite. Our mission is simple - bring wholesome, delicious  food to you, fast and hassle-free.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@FreshyBite.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 &copy; FreshyBite.com - All Right Reserved. </p>
        </div>
        </>
    )
}
export default Footer;