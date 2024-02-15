import React, { useState } from 'react';
import './header.css';

function Header({ handleHomeClick }) {
    const [selectedCategory, setSelectCategory] = useState('popularTitles');

    const categoryChange = (category) => {
        setSelectCategory(category);
    };

    return (
        <div>
            <div className='header'>
                <div className='demo-streaming' onClick={handleHomeClick}>DEMO Streaming</div>
                <div className='buttons'>
                    <div className='login' onClick={() => alert('Login click')}>
                        Login
                    </div>
                    <button className='free-trial' onClick={() => alert('Start clicked')}>
                        Start your free trial
                    </button>
                </div>
            </div>
            <div className='header-2'>
                <div className='popular'>Popular Titles</div>
            </div>
        </div>
    );

}
export default Header;