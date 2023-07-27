import React from "react"
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () => {
    const [userName, setUserName] = useState()

    useEffect(() => {
        const data = {
            name: "Prithvi"
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentMenu />
            }
        ],
        errorElement: <Error />
    },
    // {
    //     path: "/about",
    //     element: <About />
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />
    // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />)