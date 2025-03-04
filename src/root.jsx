import { Link, Outlet } from "react-router-dom";
import './styles.css';
import frog from './assets/frog.png';
import cart from './assets/cart.png'
import { useState } from "react";

export default function Root() {
    const [itemCount, setItemCount] = useState(0)

    return (
        <>
            <div className="navBar">
                <div className="navBarLeft">
                    <img src={frog} alt="logo" className="logo"/>
                    <p className="navBarCompany">buy everything</p>
                </div>
                <nav className="navBarRight">
                    <Link to={'homePage'}>home</Link>
                    <Link to={'shopPage'}>shop</Link>
                    <img src={cart} alt='shopping cart icon' className="cart"/>
                    <p className="itemCount">{itemCount}</p>
                </nav>
            </div>
            <div className="pageContent">
                <Outlet context={{ itemCount, setItemCount }} />
            </div>
        </>
    )
}