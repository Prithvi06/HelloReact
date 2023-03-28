import React from "react"
import ReactDOM from 'react-dom/client';
import header_logo from "./header_logo.png"

const Header = () => {
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);