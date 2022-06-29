import React from "react";
import heroPhoto from "../images/photo-grid.png";
export default function Hero(){
    return(
        <section className="hero">
<img src = {heroPhoto} alt="hero section" className="hero-img"/>

<h1 className="hero-h1">Online Experiences</h1>
<p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>

            </section>
    )
}