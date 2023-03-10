import React from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from '../modular-css/footer.module.css';

let firstClick = false;

const MySwal = withReactContent(Swal);

const Footer = () => {
    const handleClick = () => {
        if (!firstClick) {
            MySwal.fire({
                iconHtml: <span className={styles.heart}>&hearts;</span>,
                title: <h1 style={{ fontSize: '3rem' }}>Easter Egg No.2 Found!</h1>,
                confirmButtonText: <h2>Good job</h2>,
            });
            firstClick = true;
        };
    }

    return <footer className={styles.page_footer}>
        <section className={styles.createdBy}>
            <h2>Created with <span className={styles.heart} onClick={handleClick}>&hearts;</span> by: Estella | Samir | Wael</h2>
            <div className={styles.footer_images}><img src={require('../images/Estella.jpg')} alt="Estella" /><img src={require('../images/Samir.avif')} alt="Samir" /><img src={require('../images/Wael-AbuRayya.jpg')} alt="Wael" /></div>
        </section>
        <section className={styles.contact}>
            <h2>Contact:</h2>
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
                    <a href="https://www.facebook.com/" aria-label='Facebook'><FaFacebook /></a>
                    <a href="https://www.youtube.com/" aria-label='YouTube'><FaYoutube /></a>
                    <a href="https://twitter.com/" aria-label='Twitter'><FaTwitter /></a>
                </div>
            </div>
            <div>
                <h2>Find Us</h2>
                <div className={styles.social_media_icon2}>
                    <a href="https://github.com/" aria-label='GitHub'><FaGithub /></a>
                    <a href="https://www.linkedin.com/" aria-label='LinkedIn'> <FaLinkedin /></a>
                </div>
            </div>
        </section>
    </footer>
}

export default Footer;