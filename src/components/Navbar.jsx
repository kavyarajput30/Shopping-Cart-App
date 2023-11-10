import './Navbar.css'

import { Link } from 'react-router-dom';

import {PiShoppingCartBold} from 'react-icons/pi'
function Navbar (){
    return(
        <div id="navbar">
            <Link to="/">Shop</Link>
            <Link to="/cart"> <PiShoppingCartBold/></Link>
           
        </div>
        
        
        
        
    )
}

export default Navbar;