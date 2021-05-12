import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppCotext from "../context/AppContext";
import '../style/Header.css'
const Header = () => {
  const { state } = useContext(AppCotext)
  const{ cart } = state
  return (
    
    <div className="Header">
      <div className="Header-title">
          <Link to='/'>
          <img src="https://static.basketrevolution.es/media/wysiwyg/players/header/Michael-Jordan-Header.jpg" alt="" /> 
          </Link>
          
          <nav className="navegacion continer">
      <ul className="tabs">
        <li><Link to="#tab1">Inicio</Link></li>
        <li><Link to="#tab2">nuestas metas</Link></li>
        <li><Link to="#tab3">nosotros</Link></li>
        <li>
          <Link to="#tLinkb4">servicios</Link>
          <ul className="submenu">
            <li><Link to="#tab5">contactanos</Link></li>
            <li><Link to="#tab6">sevicio</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
      </div>
      <div className="Header-checkout">
        <Link to="/checkout">
        <i className="fas fa-shopping-cart" title='Checkout'></i>
        </Link>
        {cart.length > 0 &&  <div className='Header-alert'>{cart.length }</div> }
      </div>
    </div>
  );
};
export default Header;
