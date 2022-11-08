import React from "react";
// import FullscreenIcon from '@mui/icons-material/FullscreenIcon';
// import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const Work = () => {
    const data = [
        {
            id: 1,
            title:"Web Design",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/about_home_2.jpg",
        },
        {
            id:2,
            title:"Web Development",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/team-4.jpg"
        },
        {
            id: 3,
            title:"Photography",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/about_home_2.jpg",
        },
        {
            id: 4,
            title:"Web Design",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/ter-1.jpg",
        },
        {
            id:5,
            title:"Web Development",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/team-4.jpg"
        },
        {
            id: 6,
            title:"Photography",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/about_home_2.jpg",
        },
    ]
    return(
        <>
            <section className="work">
                <div className="heading">
                    <h3>MY WORKS</h3>
                    <h1>Some Of My Competed Projects</h1>
                </div>
                <div className="content">
                    {data.map((val) => {
                        return(
                            <>
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                            <div className="overlay">
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                                {/* <div className="icon">
                                    <FullscreenIcon  className="iconWork"/>
                                    <IosShareIcon  className="iconWork"/>
                                </div> */}
                            </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Work