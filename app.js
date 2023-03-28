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

const RestaurentCard = (props) => {
    console.log(props);
    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo" 
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g5txnz35wlrgbskk3r8y" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurentCard resName="Meghana Food" cuisine="Biryani, North Indian" />
                <RestaurentCard resName="KFC Food" cuisine="Biryani, North Indian" />
                <RestaurentCard resName="GuruKripa Food" cuisine="Biryani, North Indian" />
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);