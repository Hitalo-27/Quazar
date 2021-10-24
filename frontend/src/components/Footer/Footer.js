import React from 'react'

import { Button } from '../Button/Button'
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Junte-se ao boletim informativo Quazar para receber nossas melhores novidades
                </p>
                <p className="footer-subscription-text">
                    Você pode cancelar sua inscrição a qualquer momento.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Se inscrever</Button>
                    </form>
                </div>
            </section>
            
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="#" className="social-logo">
                            <img src="../../images/BrancoQuazar.png" alt="Logo" />
                            {/* Quazar */}
                            {/* <i className="fab fa-typo3"></i> */}
                        </Link>
                    </div>
                    <small className="website-rights">© 2021 Quazar</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="#" target='_blank' arial-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="#" target='_blank' arial-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="#" target='_blank' arial-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="#" target='_blank' arial-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to="#" target='_blank' arial-label="Linkedin">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
