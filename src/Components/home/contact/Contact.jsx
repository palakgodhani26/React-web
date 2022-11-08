import React from "react";
import styled from "styled-components";

const Contact = () => {

    const Wrapper = styled.section`
    padding:9rem 0 5rem 0;
    
    .container{
        margin-top:4rem;
        text-align:center;

    .contact-form{
        max-width:50rem;
        margin:auto;

    .contact-inputs{
        display:flex;
        flex-direction:column;
        gap:3rem;
        input[type="submit"]{
            cursor:pointer;
            transition:all 0.2s;

            &:hover{
                background-color:#fff;
                border:1px solid #38d16a;
                color:#38d16a;
                transform:scale(0.9);
            }
        }
    }
    }
    }
    `;

    return(
        <Wrapper>
            <h2 className="common-heading">Feel Free to Contact Us</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.268936086514!2d73.91531761472135!3d18.561910287384887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1667896253701!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="#" method="POST" className="contact-inputs">
                        <input type="text" name="username" placeholder="username" autoComplete="off" required />
                        <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
                        <textarea name="message" cols="30" rows="6" autoComplete="off" required></textarea>
                        {/* <button className="primary-btn">SEND</button> */}

                        <input type="submit" value="send"></input>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}


export default Contact