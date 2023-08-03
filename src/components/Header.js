import { useContext, useState } from "react"
import header_logo from "../../header_logo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext)

    const onlineStatus = useOnlineStatus();

    const cartItem = useSelector((store) => store.cart.items)

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="header-logo" 
                    src={header_logo} 
                    alt="header-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? loggedInUser : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to="/cart"> Cart ({cartItem ? cartItem.length : 0} items)</Link></li>
                    <button className="login-btn" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")} }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header