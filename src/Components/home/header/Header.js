import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import WorkIcon from '@mui/icons-material/Work';
// import GridViewIcon from '@mui/icons-material/GridView';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuIcon from '@mui/icons-material/Menu';





const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 200)
    })
    return (
        <>
            <header className="header">
                <div className="container flex">
                    <div className="logo">
                        <img src="assests/favicon.png" alt="logo" width="150" />
                    </div>
                    <div className="nav">
                        <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/pages">Pages</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li className="icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                                {/* <SearchOutlinedIcon className="HeaderIcon"/>
                                <WorkIcon className="HeaderIcon"/>
                                <GridViewIcon className="HeaderIcon" /> */}

                            </li>
                        </ul>
                    </div>
                    <button className="navbar-items-icon" onClick={() => setSidebar(!sidebar)}>
                        {/* {sidebar ? <CloseIcon/> : <MenuIcon/>} */}
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;