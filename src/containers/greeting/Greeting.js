import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { projects } from "../../portfolio.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Greeting(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <div className="greeting-title-div">
                                <h1 className="greeting-text">{greeting.title}</h1>
                                <h1 className="greeting-text waving">👋</h1>
                            </div>
                            <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
                                <span>I'm </span>
                                <span style={{ color: theme.accentColor }}>{greeting.full_name}. </span>
                                {greeting.subTitle}
                                I'm constantly thinking about the design of everything. It's so important to examine how
                                we can improve usage for all users, adjust and create for new technology, and learn to
                                iterate and update existing technology.
                            </p>
                            <p className="greeting-text-para paragraph" style={{ color: theme.thirdText }}>
                                I have had to design things so many times in my life. And so have you. Yes, you! Maybe
                                you haven't really thought about it much, but you have designed so much. Did you ever
                                make a poster for the time you ran for student council or had to remind everyone about
                                your upcoming bake sale? Beyond advertisement, think about every power point you've made
                                or even every poster board you've touched. You've created so many things and sooner or
                                later you might've discovered a process. Or maybe you tried something new and realized
                                it worked so much better. Either way you learned and evolved and found a design process!
                            </p>
                            <p className="greeting-text-para paragraph" style={{ color: theme.thirdText }}>
                                My own personal experience with design has been rocky. I'm an artist and I absolutely
                                love to create. All my life I've been drawing, tracing, painting, sketching - you name
                                it. However, specific to design, I have had quite a rough time with either not following
                                the rules at all or following the rules too much. More recently, I've learned more about
                                the principles and research behind Human-Computer Design. I've come to understand why
                                our brains work the way they do and why following some rules and design patterns is
                                beneficial to my own process.
                            </p>
                            <img
                                className="cartoon"
                                src={require("../../assests/images/reboot.gif")}
                                alt="Dilbert_cartoon"
                            />
                            <p className="greeting-text-para paragraph" style={{ color: theme.thirdText }}>
                                I've thoroughly examined my connection to design, what I've learned recently through
                                recent projects, and I've come up with these main principles of my own design process.
                                These principles are crucial to my own design process and I believe to many others as
                                well.
                            </p>

                            <SocialMedia />
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <FeelingProud theme={theme} />
                        <div className="repo-cards-div-main">
                            {projects.data.map((repo) => {
                                return <ProjectCard repo={repo} theme={theme} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
