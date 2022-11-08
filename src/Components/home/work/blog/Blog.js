import React from "react";
// import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const Blog = () => {
    const data = [
        {
            id: 1,
            date:"26 FEB, 2019",
            title:"The Most Popular New top Business Apps",
            cover: "./assests/team-4.jpg",
            category:"Technology",
        },
        {
            id: 2,
            date:"27 FEB, 2019",
            title:"The Best Marketing top Management Tools",
            cover: "./assests/team-4.jpg",
            category:"Agency",
        },
        {
            id: 3,
            date:"28 FEB, 2019",
            title:"3 WooCommerce Plugins to Boost Sales",
            cover: "./assests/team-4.jpg",
            category:"IT",
        }
    ]
    return (
        <>
            <section className="blog services">
                <div className="container topMargin">
                    <div className="heading">
                        <h3>LATEST BLOG</h3>
                        <h1>Read Inspirational Story Every Week</h1>
                    </div>
                    <div className="contain grid topMargin">
                        {data.map((val) => {
                            return (
                                <div className="box">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>{val.date}</span>
                                        <h2>{val.title}</h2>
                                        <a href="/" >Read More
                                        {/* <KeyboardDoubleArrowRightOutlinedIcon className="icon" /> */}
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog