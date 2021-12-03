import React from "react";
import { Link } from 'react-router-dom'
import './team.css';

const AboutPage = () => (


    <div className="about-body">
        <h1 id='profile-title21' className="clock-main-link" style={{textAlign: 'center'}}><Link to='/'>Study Dash</Link></h1>
        <h1 className="h1-team">Meet The Developers</h1>
        <div className="container12">
            {/* person 1  */}
            <div className="our-team">
                <div className="pic">
                    <img src="https://aa-homes-dev.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-12-02+at+3.30.00+PM.png" alt="Zayed"></img>
                </div>
                <div className="team-content">
                    <h3 className="title">Zayed Cheema</h3>
                    <span className="post">Project Lead / Flex Developer</span>
                </div>
                <ul className="social">
                    <li><a href="https://www.linkedin.com/in/zayed-cheema-30521920a/" class="fab fa-linkedin"></a></li>
                    <li><a href="https://github.com/cheemaz1" class="fab fa-github-square"></a></li>
                    <li><a href="https://angel.co/u/zayed-cheema" class="fab fa-angellist"></a></li>
                </ul>
            </div>
            {/* person 2  */}
            <div className="our-team">
                <div className="pic">
                    <img src="https://aa-homes-dev.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-12-02+at+3.29.03+PM.png" alt="Adesh"></img>
                </div>
                <div className="team-content">
                    <h3 className="title">Adesh Pawaroo</h3>
                    <span className="post">Backend Lead</span>
                </div>
                <ul className="social">
                    <li><a href="https://www.linkedin.com/in/adesh-pawaroo-997394226/" class="fab fa-linkedin"></a></li>
                    <li><a href="https://github.com/AdeshPawaroo" class="fab fa-github-square"></a></li>
                    <li><a href="https://angel.co/u/adesh-pawaroo" class="fab fa-angellist"></a></li>
                </ul>
            </div>
            {/* person 3  */}
            <div className="our-team">
                <div className="pic">
                    <img src="https://aa-homes-dev.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-12-02+at+3.29.28+PM.png" alt="Efren"></img>
                </div>
                <div className="team-content">
                    <h3 className="title">Efren Bahena</h3>
                    <span className="post">Flex Developer</span>
                </div>
                <ul className="social">
                    <li><a href="https://www.linkedin.com/in/efren-bahena-419807172/" class="fab fa-linkedin"></a></li>
                    <li><a href="https://github.com/Efren707" class="fab fa-github-square"></a></li>
                    <li><a href="https://angel.co/u/efren-bahena" class="fab fa-angellist"></a></li>
                </ul>
            </div>
            {/* person 4 */}
            <div className="our-team">
                <div className="pic">
                    <img src="https://aa-homes-dev.s3.ca-central-1.amazonaws.com/Screen+Shot+2021-12-02+at+6.17.58+PM.png" alt="Pierre"></img>
                </div>
                <div className="team-content">
                    <h3 className="title">Pierre Navarin</h3>
                    <span className="post">Frontend Lead</span>
                </div>
                <ul className="social">
                    <li><a href="https://www.linkedin.com/in/pierre-navarin-709335223/" class="fab fa-linkedin"></a></li>
                    <li><a href="https://github.com/pierrenav13" class="fab fa-github-square"></a></li>
                    <li><a href="https://angel.co/u/pierre-navarin" class="fab fa-angellist"></a></li>
                </ul>
            </div>
        </div>
    </div>
);


export default AboutPage;