import React from "react";

const Branding = () => {

    const data = [
        {
            id: "01",
            heading: "Digital Branding",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: "02",
            heading: "Team Management",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            id: "03",
            heading: "Creative Mind",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ]
    return (
        <>
            <section className="branding">
                <div className="container grid">
                    {data.map((value) => {
                        return (
                            <div className="box flex">
                                <div className="text">
                                    <h1>{value.id}</h1>
                                </div>
                                <div className="para">
                                    <h2>{value.heading}</h2>
                                    <p>{value.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Branding