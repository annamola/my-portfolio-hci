import React from "react";
import "./Skills.css";

export default function Skills(props) {
    const theme = props.theme;
    return (
        <div className="main" id="skills">
            <div className="skills-header-div">
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Brainstorming </h1>
                    <h1 className="greeting-text waving">🧠</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Yes, you knew it was coming. The start to any good project is the time spent just throwing any idea
                    you have out into the world and onto paper. I found that being in an in-person group while
                    brainstorming greatly increased my chances of coming up with a really cool idea. Brainstorming
                    allows everyone to freely suggest ideas. If I was are the closest person to the problem (or the only
                    one), it would be very difficult to come up with new ideas. By inviting others to the conversation
                    and finding new ways, even those who aren't very familiar with the topic can speak up about the
                    ideas that come to mind.
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    And let's be honest, not every idea is gonna be great. In fact, a lot of them are gonna suck. Or
                    maybe they're not feasible at all! Each brainstormed idea does not have to stand on its own. Even if
                    the idea isn't the perfect solution, it's important to express the idea because it can help make
                    something work for someone else. Someone's blurt could be the triger for someone else's awesome
                    idea. The concept of idea building is to share ideas. This creates new ideas and new chains of
                    thought. Idea formation can only be successful in a brainstorming session if there are no ideas that
                    can be closed immediately. This discourages people from sharing and limits the success of the
                    session.
                </p>
                <div className="skill-image-container-flex">
                    <div className="skill-image-container" style={{ background: theme.projectCard }}>
                        <img
                            className="cartoon"
                            src={require("../../assests/images/brainstorm1.jpg")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>brainstorming for the Atlanta History Center</p>
                    </div>
                    <div className="skill-image-container" style={{ background: theme.projectCard }}>
                        <img
                            className="cartoon"
                            src={require("../../assests/images/brainstorm2.jpg")}
                            alt="brainstorm2"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>brainstorming for a chatbot</p>
                    </div>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Regular breaks Another advantage of brainstorming sessions is that you get out of your normal
                    routine. Maybe there are no obvious problems that need to be solved by the mechanics of things.
                    However, brainstorming sessions on projects are still useful because they can reveal improvements
                    that you didn't even know you needed.
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Creating a list At least one person should write down the idea in each session so that the idea is
                    not lost. One of the best parts of leaving a brainstorming session is a list of ideas to pick up and
                    build in the future. Not everything is immediately applicable, but a list of ideas can help you
                    think creatively months after the actual session. cooperation
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Last but not least, brainstorming creates a team atmosphere. Brainstorming doesn't happen without
                    people. Inviting colleagues to a brainstorming session can help you make sure you're on the same
                    team and open up opportunities to ask others for help.
                </p>

                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Sketching</h1>
                    <h1 className="greeting-text waving">✏️</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    I have had to design things so many times in my life. And so have you. Yes, you! Maybe you haven't
                    really thought about it much, but you have designed so much. Did you ever make a poster for the time
                    you ran for student council or had to remind everyone about your upcoming bake sale? Beyond
                    advertisement, think about every power point you've made or even every poster board you've touched.
                    You've created so many things and sooner or later you might've discovered a process. Or maybe you
                    tried something new and realized it worked so much better. Either way you learned and evolved and
                    found a design process!
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    My own personal experience with design has been rocky. I'm an artist and I absolutely love to
                    create. All my life I've been drawing, tracing, painting, sketching - you name it. However, specific
                    to design, I have had quite a rough time with either not following the rules at all or following the
                    rules too much. More recently, I've learned more about the principles and research behind
                    Human-Computer Design. I've come to understand why our brains work the way they do and why following
                    some rules and design patterns is beneficial to my own process.
                </p>
                <div className="skill-image-container-flex">
                    <div className="skill-image-container" style={{ background: theme.projectCard }}>
                        <img
                            className="cartoon"
                            src={require("../../assests/images/brainstorm1.jpg")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>Our brainstorming for the Atlanta History Center</p>
                    </div>
                </div>
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Test, Test, Test! </h1>
                    <h1 className="greeting-text waving">🔨</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    I have had to design things so many times in my life. And so have you. Yes, you! Maybe you haven't
                    really thought about it much, but you have designed so much. Did you ever make a poster for the time
                    you ran for student council or had to remind everyone about your upcoming bake sale? Beyond
                    advertisement, think about every power point you've made or even every poster board you've touched.
                    You've created so many things and sooner or later you might've discovered a process. Or maybe you
                    tried something new and realized it worked so much better. Either way you learned and evolved and
                    found a design process!
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    My own personal experience with design has been rocky. I'm an artist and I absolutely love to
                    create. All my life I've been drawing, tracing, painting, sketching - you name it. However, specific
                    to design, I have had quite a rough time with either not following the rules at all or following the
                    rules too much. More recently, I've learned more about the principles and research behind
                    Human-Computer Design. I've come to understand why our brains work the way they do and why following
                    some rules and design patterns is beneficial to my own process.
                </p>
                <div className="skill-image-container-flex">
                    <div className="skill-image-container" style={{ background: theme.projectCard }}>
                        <img
                            className="cartoon"
                            src={require("../../assests/images/brainstorm1.jpg")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>Our brainstorming for the Atlanta History Center</p>
                    </div>
                </div>
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Step Away</h1>
                    <h1 className="greeting-text waving">🚶</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    I have had to design things so many times in my life. And so have you. Yes, you! Maybe you haven't
                    really thought about it much, but you have designed so much. Did you ever make a poster for the time
                    you ran for student council or had to remind everyone about your upcoming bake sale? Beyond
                    advertisement, think about every power point you've made or even every poster board you've touched.
                    You've created so many things and sooner or later you might've discovered a process. Or maybe you
                    tried something new and realized it worked so much better. Either way you learned and evolved and
                    found a design process!
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    My own personal experience with design has been rocky. I'm an artist and I absolutely love to
                    create. All my life I've been drawing, tracing, painting, sketching - you name it. However, specific
                    to design, I have had quite a rough time with either not following the rules at all or following the
                    rules too much. More recently, I've learned more about the principles and research behind
                    Human-Computer Design. I've come to understand why our brains work the way they do and why following
                    some rules and design patterns is beneficial to my own process.
                </p>
                <div className="skill-image-container-flex">
                    <div className="skill-image-container" style={{ background: theme.projectCard }}>
                        <img
                            className="cartoon"
                            src={require("../../assests/images/brainstorm1.jpg")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>Our brainstorming for the Atlanta History Center</p>
                    </div>
                </div>
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Brainstorming and Sketching</h1>
                    <h1 className="greeting-text waving">✏️</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    I have had to design things so many times in my life. And so have you. Yes, you! Maybe you haven't
                    really thought about it much, but you have designed so much. Did you ever make a poster for the time
                    you ran for student council or had to remind everyone about your upcoming bake sale? Beyond
                    advertisement, think about every power point you've made or even every poster board you've touched.
                    You've created so many things and sooner or later you might've discovered a process. Or maybe you
                    tried something new and realized it worked so much better. Either way you learned and evolved and
                    found a design process!
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    My own personal experience with design has been rocky. I'm an artist and I absolutely love to
                    create. All my life I've been drawing, tracing, painting, sketching - you name it. However, specific
                    to design, I have had quite a rough time with either not following the rules at all or following the
                    rules too much. More recently, I've learned more about the principles and research behind
                    Human-Computer Design. I've come to understand why our brains work the way they do and why following
                    some rules and design patterns is beneficial to my own process.
                </p>
                <div className="skill-image-container-flex">
                    <div className="skill-image-container" style={{ background: theme.projectCard }}>
                        <img
                            className="cartoon"
                            src={require("../../assests/images/brainstorm1.jpg")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>Our brainstorming for the Atlanta History Center</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
