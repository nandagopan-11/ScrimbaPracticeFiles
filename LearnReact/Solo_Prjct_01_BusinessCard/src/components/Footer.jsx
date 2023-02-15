import React from "react";
import Fb from "../assets/icons/facebook logo_icon.png"
import Twtr from "../assets/icons/twitter logo_icon.png"
import Lnkdin from "../assets/icons/linkedin logo_icon.png"
import Insta from "../assets/icons/instagram logo_icon.png"

export default function Footer(){
    return(
        <div className="footer-social">
            <img src={Fb} alt="Facebook logo"/>
            <img src={Twtr} alt="Twitter logo"/>
            <img src={Lnkdin} alt="Linkedin logo"/>
            <img src={Insta} alt="Instagram logo"/>
        </div>
    )
}