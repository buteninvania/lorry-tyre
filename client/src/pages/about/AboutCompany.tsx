import React from "react";
import a from '../../pages/about/aboute.module.css'
import img from './../../img/aboute.background.png'

const AboutCompany = () => {
    return (
        <div className={a.about} style={{backgroundImage: `url(${img}` }} >
            <p>Компания “LORRY-TYRE” является официальным дилером крупнейших производителей шин таких как:</p>
        </div>
    )
}

export default AboutCompany;