import React from "react";

const Service = () => {

    const data = [
        {
            id: 1,
            title:"Web Design",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/ter-1.jpg",
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
            cover:"./assests/ter-1.jpg",
        },
        {
            id:4,
            title:"Live Support",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            cover:"./assests/team-4.jpg"
        },
        {
            id: 5,
            title:"Content Writing",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            cover:"./assests/ter-1.jpg",
        },
        {
            id:6,
            title:"Timely Deliverables",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            cover:"./assests/team-4.jpg"
        }
    ]
    return (
        <>
            <section className="services topMargin">
                <div className="container">
                    <div className="heading">
                        <h3>MY SERVICES</h3>
                        <h1>Interactive Services Offered Me</h1>
                    </div>
                    <div className="contain grid topMargin">
                        {
                            data.map((val) => {
                                return (
                                    <>
                                        <div className="box">
                                            <div className="img">
                                                <img src={val.cover} alt="" />
                                            </div>
                                            <div className="text">
                                                <h2>{val.title}</h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service