import React, { useEffect, useState } from 'react'
import { FaAlignLeft, FaCartPlus } from 'react-icons/fa'
import './navbar.css'
function NavBar() {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        function code() {
            let width = document.documentElement.clientWidth;
            if (width > 768) {
                setToggle(false);
            }
        }
        window.addEventListener("resize", code)

        return (() => {
            console.log("removed");
            window.removeEventListener("resize", code);
        })
    }, [])
    return (
        <div className="main-nav">
            <div className="navBar">
                <FaAlignLeft style={{ color: "red" }} className="menu" onClick={() => setToggle(!toggle)} />

                <h2>Lorem Ipsum</h2>
                <ul className="links">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Cuisine</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                    <li>Book</li>
                </ul>

                <button className="cart">Cart</button>
                <FaCartPlus className="mobile-cart" />
            </div>

            {toggle?<div className="mobile-nav">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Cuisine</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                    <li>Book</li>
                </ul>
            </div>:<></>}
        </div>

    )
}

export default NavBar
