import React, { useState } from 'react';
import "./education.css";

export const Education = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="education section" id="education">
            <h2 className="section_title">Education</h2>
            <span className="section-subtitle ">My Personal Journey</span>

            <div className="education_container container1">
                <div className="education_tabs text-center">
                    <div className={toggleState === 1 
                    ? "education_button education_active button--flex"
                    : "education_button button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap education_icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2
                    ? "education_button education_active button--flex"
                    : "education_button button--flex"}
                    onClick={() => toggleTab(2)}>
                        <i className="uil uil-award education_icon"></i>
                        Certifications
                    </div>
                </div>

                <div className="education_sections mt-5">
                    <div
                        className=
                        {toggleState === 1
                        ? "education_content education_content-active"
                        :"education_content" }
                    >

                        <div className="education_data">

                            <div>
                                <h3 className="education_title">B.Tech- IT</h3>
                                    <span className="education_subtitle">Excel Engineering College, Namakkal,TN.</span>
                                    <div className="education_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2018-2022
                                    </div>
                            </div>

                            <div>
                                <span className="education_rounder"></span>
                                <span className="education_line"></span>
                            </div>
                        </div>

                        <div className="education_data">
                            <div></div>

                            <div>
                                <span className="education_rounder"></span>
                                <span className="education_line"></span>
                            </div>

                            <div>
                                <h3 className="education_title">HSC</h3>
                                    <span className="education_subtitle">Goverment Higher Secondary School, Erode, TN.</span>
                                    <div className="education_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2017-2018
                                    </div>
                            </div>

                        </div>

                        <div className="education_data">

                            <div>
                                <h3 className="education_title">SSLC</h3>
                                    <span className="education_subtitle">Goverment Higher Secondary School, Erode, TN.</span>
                                    <div className="education_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2017-2018
                                    </div>
                            </div>

                            <div>
                                <span className="education_rounder"></span>
                                <span className="education_line"></span>
                            </div>

                        </div>
                    </div>

                    <div
                        className=
                        {toggleState === 2
                        ? "education_content education_content-active"
                        :"education_content" }
                    >

                        <div className="education_data">

                            <div>
                                <h3 className="education_title">Full Stack Development Using React and Java</h3>
                                    <span className="education_subtitle">Fita Academy</span>
                                    <div className="education_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        Oct 2023 - Mar 2024
                                    </div>
                            </div>

                            <div>
                                <span className="education_rounder"></span>
                                <span className="education_line"></span>
                            </div>
                        </div>

                        <div className="education_data">
                            <div></div>

                            <div>
                                <span className="education_rounder"></span>
                                <span className="education_line"></span>
                            </div>

                            <div>
                                <h3 className="education_title">
                                The Complete Web Developer in 2023</h3>
                                    <span className="education_subtitle">Udemy</span>
                                    <div className="education_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        Feb - 2023
                                    </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
