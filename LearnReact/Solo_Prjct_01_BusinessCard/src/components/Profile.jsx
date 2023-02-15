import React from "react";
import Image from "../assets/profile.jpg";
import Call from "../assets/icons/call_icon.png";
import Mail from "../assets/icons/email_icon.png"

export default function Profile(){
    return(
        <div className="profile-div">
            <img className="profile-img" src={Image} alt="Profile picture" />
            <div className="view">
                <h2>Lauryn Heigel</h2>
                <h3>Blockchain advocate</h3>
                <code>lauryn.io</code>
            </div>
            <div className="btns">
                <button className="btn-primary">
                    <img src={Mail} /> Email
                </button>
                <button className="btn-primary">
                    <img src={Call} /> Call
                </button>
            </div>
        </div>
    )
}