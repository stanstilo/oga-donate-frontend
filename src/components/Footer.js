import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {ImFacebook} from 'react-icons/im'
import {IoLogoInstagram} from 'react-icons/io'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-row'>
                <div className='about-col'>
                  <h4>About</h4>
                  <p>Terms</p>
                  <p>Privacy</p>
                  <p>About us</p>
                  <p>Support</p>
                  <p>How it works</p>
                </div>
                <div className='Categories-col'>
                  <h4 >Categories</h4>
                  <p>Business</p>
                  <p>Charity</p>
                  <p>Community</p>
                  <p>Competitions</p>
                </div>
                
               
                <div className='social-icons-col'>
                  <h4>Social Links</h4>
                <span className='twitter-icon'>
                 <FiTwitter />
                 </span>
                 <span className='facebook-icon'>
                  <ImFacebook/>
                  </span>
                  <span className='instagram-icon'>
                  <IoLogoInstagram/>
                  </span>
                </div>
              
            </div>
        </footer>
    )
}

export default Footer
