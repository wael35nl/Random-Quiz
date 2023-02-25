import React from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import styles from '../modular-css/footer.module.css'

const Footer = () => {
    return <footer className={styles.page_footer}>
        <section>
            <h2>Created with <span style={{ color: 'red' }}>&hearts;</span> by: Estella | Samir | Wael</h2>
            <div className={styles.footer_images}><img src={require('../images/Wael-AbuRayya.jpg')} alt="Estella" /><img src={require('../images/Wael-AbuRayya.jpg')} alt="Samir" /><img src={require('../images/Wael-AbuRayya.jpg')} alt="Wael" /></div>
        </section>
        <section className={styles.contact}>
            <h2>Contact</h2>
            <div>
                <ul>
                    <li>Email: Alex@gmail.com</li>
                    <li>Phone: 003100320033</li>
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
                <div className={styles.social_media_icon2}>
                    <FaGithub />
                    <FaLinkedin />
                </div>
            </div>
        </section>
    </footer>
}

export default Footer;