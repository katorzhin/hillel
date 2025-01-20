import React from 'react';
import './Home.css';

function Home() {
    return (
        <main className="home-container">
            <header className="home-header">
                <h1>Oleksii Katorzhyn</h1>
                <h2>Java Developer</h2>
            </header>

            <section className="home-summary">
                <h3>Summary</h3>
                <ul>
                    <li>Deep understanding of OOP, Java Core, software development process.</li>
                    <li>Experience in Java.</li>
                    <li>Experience in marketing services domain.</li>
                    <li>Team player, results-oriented, self-motivated, teaching and leadership skills.</li>
                    <li>Willing to learn new technologies.</li>
                </ul>
            </section>

            <section className="home-skills">
                <h3>Skills</h3>
                <ul>
                    <li>Java, JavaScript, SQL.</li>
                    <li>React, Redux, Redux-Saga, RTK.</li>
                    <li>HTML5, CSS3, SASS.</li>
                    <li>Node.js, Express.</li>
                    <li>Java8, Spring Boot, JSP, JDBC, JPA, JUnit.</li>
                    <li>MySQL, PostgreSQL, H2, MongoDB, RabbitMQ.</li>
                    <li>Maven, Gradle, Lombok, Docker, Git, Trello, Jira.</li>
                </ul>
            </section>

            <section className="home-work-experience">
                <h3>Work Experience</h3>
                <ul>
                    <li>August 2022 – December 2024 (Ukraine, Kharkiv) “Telesens”. Java Developer.</li>
                    <li>March 2021 – December 2021 (Ukraine, Kharkiv) “AltexSoft”. Junior Java Developer.</li>
                    <li>January 2020 – January 2021 (Ukraine, Kharkiv) “Ad-Maven”. Lead Generation Specialist.</li>
                    <li>June 2018 – February 2019 (Ukraine, Kharkiv) “Ad-Maven”. Lead Generation Specialist.</li>
                    <li>October 2017 – May 2018 (Ukraine, Kharkiv) “LLC S.K.S”. Sales Representative.</li>
                    <li>January 2017 – August 2017 (Ukraine, Kharkiv) “LLC Alternative Trade”. Sales Representative.
                    </li>
                    <li>June 2015 – December 2016 (Ukraine, Kharkiv) “Nestle”. Sales Representative.</li>
                    <li>January 2014 – May 2014 (Ukraine, Kharkiv) “Volya”. Technical Support.</li>
                </ul>
            </section>

            <section className="home-education">
                <h3>Education</h3>
                <ul>
                    <li>September 2024 – January 2025. Hillel, Front-end developer.</li>
                    <li>
                        March 2019 – September 2019. A-Level, Java Developer.
                        Received theoretical and practical skills in java
                        development (Java Core, Java EE, OOP, SOLID principle);
                        soft skills (time management, self-motivation, command work);
                    </li>
                    <li>
                        September 2010 – May 2016 Simon Kuznets Kharkiv National University
                        of Economics Management &amp; Marketing. MBA.
                    </li>
                </ul>
            </section>

            <section className="home-personal-interests">
                <h3>Personal interests</h3>
                <ul>
                    <li>Travels, cycling, music, board games, devices, read books.</li>
                </ul>
            </section>
        </main>
    );
}

export default Home;












