import React from "react";

const Wrapper = () => {

    const data = [
        {
            title: "LOOKING FOR EXCLUSIVE SERVICES?",
            heading: "Get The Best For Your Business",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ]
    return (
        <>
            <section className="branding wrapper">
                <div className="container">
                    {data.map((val) => {
                        return (
                            <>
                                <div className="box">
                                    <h3>{val.title}</h3>
                                    <h2>{val.heading}</h2>
                                    <p>{val.desc}</p>
                                    <button className="primary-btn">Contact Us</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Wrapper