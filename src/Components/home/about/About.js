import React from "react";

const About = () => {

    const data = [
        {
            title: "Who I Am And What I Do",
            desc1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            desc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            desc3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            cover:"./assests/team-4.jpg",
        }
    ]
    return(
        <>
            <section className="about topMargin">
                <div className="container flex">
                    {data.map((val)=>{
                        return(
                            <>
                            <div className="left mtop">
                                <div className="heading">
                                    <h3>About Me</h3>
                                    <h1>{val.title}</h1>
                                </div>
                                <p>{val.desc1}</p>
                                <p>{val.desc2}</p>
                                <p>{val.desc3}</p>
                                <button className="primary-btn">Download CV</button>
                            </div>
                            <div className="right">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                            </div>
                            </>
                        )
                        })
                    }
                </div>
            </section>
        </>

    )
}

export default About