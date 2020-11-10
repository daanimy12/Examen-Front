import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../Global/ProductsContext'

const Navbar = () => {
    const { products } = useContext(ProductsContext);
    var length = products.length;
    return (
        <nav>
            <ul className="left">
                <li><Link to="/">Home</Link></li>
            </ul>
            <ul className="right">
                <li>
                    <span className="CartCount">{length}</span>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;