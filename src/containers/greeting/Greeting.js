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
    // const history = useHistory();

    // const styles = style({
    //   backgroundColor: `${theme.accentBright}`,
    //   ":hover": {
    //     boxShadow: `0 5px 15px ${theme.accentBright}`,
    //   },
    // });

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
                            <p className="greeting-text-para paragraph" style={{ color: "rgb(52, 52, 52)" }}>
                                Well what makes a good design? ... I think
                            </p>
                            <img
                                className="cartoon"
                                src={require("../../assests/images/reboot.gif")}
                                alt="Dilbert_cartoon"
                            />
                            <SocialMedia />
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <FeelingProud theme={theme} />
                        {/* <div className="repo-cards-div-main">
                            {projects.data.map((repo) => {
                                return <ProjectCard repo={repo} theme={theme} />;
                            })}
                        </div> */}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
