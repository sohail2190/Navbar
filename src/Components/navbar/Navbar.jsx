import React, {useRef} from 'react'
import './Navbar.css'

const Navbar = () =>{
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle('show')
    }

    return(
        <>
            <nav>
                <div className='container'>
                    <a href='#' className='brand'>Sohail webKit</a>

                    <ul className='nav-menu' ref={navRef}>
                        <li> <a href='/add'>Home</a></li>
                        <li> <a href='/add'>Features</a></li>
                        <li> <a href='/add'>Terms</a></li>
                        <li> <a href='/add'>Contact</a></li>
                        <li> <a href='/add'>About Us</a></li>
                        
                        <li className='login'>  <a href='/add'>Login</a></li>
                        <li className='signup'> <a href='/add'>Sign Up</a></li>

                        <div className='close-btn' onClick={showNavbar}>
                            <span className="material-symbols-outlined"> cancel</span>
                        </div>
                    </ul>
                </div>
                    <div className='btn-toggle' onClick={showNavbar}>
                    <span className="material-symbols-outlined"> sort</span>
                    </div>
            </nav>
        </>
    )
}

export default Navbar;