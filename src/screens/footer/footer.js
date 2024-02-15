import React from 'react';
import './footer.css';
import { ReactComponent as FacebookIcon } from '../../assets/social/facebook-white.svg';
import { ReactComponent as InstagramIcon } from '../../assets/social/instagram-white.svg';
import { ReactComponent as TwitterIcon } from '../../assets/social/twitter-white.svg';
import { ReactComponent as AppStore } from '../../assets/store/app-store.svg';
import { ReactComponent as PlayStore } from '../../assets/store/play-store.svg';
import { ReactComponent as WindowsStore } from '../../assets/store/windows-store.svg';

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <span>Home</span> |
                <span>Terms and Conditions</span> |
                <span>Privacy Policy</span> |
                <span>Collection Statement</span> |
                <span>Help</span> |
                <span>Manage Account</span>
            </div>
            <div>
                <div className='copyright'>Copyrigth © 2016 DEMO Streaming. All Rights Reserved. </div>
            </div>
            <div className='icons-section'>
                <div className='social-icons'>
                    <FacebookIcon className='icon' />
                    <TwitterIcon className='icon' />
                    <InstagramIcon className='icon' />
                </div>
                <div className='store-icons'>
                    <AppStore className='icon-store' />
                    <PlayStore className='icon-store' />
                    <WindowsStore className='icon-store' />
                </div>
            </div>

        </footer>
    );
};

export default footer;