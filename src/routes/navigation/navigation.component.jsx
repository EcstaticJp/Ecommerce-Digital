import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { ReactComponent as CartIcon } from '../../assets/cart.svg'

const Navigation = () => {
  return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                <Link className="nav-link" to='/shop'>
                    Contact
                </Link>
                <Link className="nav-link" to='/sign-in'>
                    Sign in
                </Link>
                <Link className="nav-link" to='/shop'>
                    <CartIcon className="cart-logo"/>
                </Link>
            </div>
        </div>

        <Outlet />
      
    </Fragment>
  );
};

export default Navigation;
