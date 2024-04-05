import React from 'react'
import './Header.css'

const Header = () => {

    return (
        <>
            <header>
                <div className='container'>
                    <div className='left'>
                        <h1>Learn code <br /> <span>Increase Your</span><br />Knowledge</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem vitae nisi tristique consequat.</p>
                        <a href='#' className='btn'>Explore Course</a>
                    </div>
                    <div className='right'>
                        <img src='1.png' alt='picture'/>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;