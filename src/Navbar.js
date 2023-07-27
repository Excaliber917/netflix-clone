import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';


function Navbar() {
   
    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 100) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);


    const [scrolled, setScrolled ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return function() {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <nav className={`nav${scrolled ? " nav--scrolled" : ''}`}>
            <div className="nav--left">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix logo" />
                <ul className="nav__list">
                    {/* without valid hrefs on anchor tags, react wants buttons. That's why these links had to be buttons */}
                    <li className="nav__item"><button className="nav__link nav__link--selected">Home</button></li>
                    <li className="nav__item"><button className="nav__link">TV Shows</button></li>
                    <li className="nav__item"><button className="nav__link">Movies</button></li>
                    <li className="nav__item"><button className="nav__link">New & Popular</button></li>
                    <li className="nav__item"><button className="nav__link">My List</button></li>
                </ul>
                <span className="nav__browse">
                    <button className="nav__link--browse nav__link--selected">Browse</button>
                    <i className="fas fa-sort-down icon--down"></i>
                    <ul className="nav__list--hamburger">
                        <i className="fas fa-sort-up icon--up"></i>
                        <li className="nav__item--hamburger"><button className="nav__link--hamburger nav__link--selected">Home</button></li>
                        <li className="nav__item--hamburger"><button className="nav__link--hamburger">TV Shows</button></li>
                        <li className="nav__item--hamburger"><button className="nav__link--hamburger">Movies</button></li>
                        <li className="nav__item--hamburger"><button className="nav__link--hamburger">New & Popular</button></li>
                        <li className="nav__item--hamburger"><button className="nav__link--hamburger">My List</button></li>
                    </ul>
                </span>
            </div>
            <div className="nav--right">
                <ul className="nav__list--right">
                    <li className="nav__item"><i className="fas fa-search"></i></li>
                    <li className="nav__item"><span>KIDS</span></li>
                    <li className="nav__item"><i className="fas fa-gift"></i></li>
                    <li className="nav__item"><i className="fas fa-bell"></i></li>
                    <li className="nav__item">
                        <div className="user">
                            <img className="user__profile" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="user icon" />
                            <i className="fas fa-sort-down"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar
