import React from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import styles from '../modular-css/footer.module.css'

const Footer = () => {
    return <footer className={styles.page_footer}>
        <section>
            <h2>Created with <span style={{ color: 'red' }}>&hearts;</span> by: Estella | Samir | Wael</h2>
            <div><img src={require('../images/Wael-AbuRayya.jpg')} alt="Estella" /><img src={require('../images/Wael-AbuRayya.jpg')} alt="Samir" /><img src={require('../images/Wael-AbuRayya.jpg')} alt="Wael" /></div>
        </section>
        <section>
            <h2>Contact Info</h2>
            <div>
                <ul>
                    <li>Email</li>
                    <li>Phone:</li>
                    <li>Address:</li>
                </ul>
            </div>
        </section>
        <section className={styles.social_media}>
            <div>
                <h2>Follow Us</h2>
                <div className={styles.social_media_icon}>
                    <FaFacebook />
                    <FaYoutube />
                    <FaTwitter />
                </div>
            </div>
            <div>
                <h2>Find Us</h2>
                <div className={styles.social_media_icon}>
                    <FaGithub />
                    <FaLinkedin />
                    <FaTwitter />
                </div>
            </div>
        </section>
    </footer>
}

export default Footer;