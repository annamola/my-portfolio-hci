import React from "react";
import "./Skills.css";

export default function Skills(props) {
    const theme = props.theme;
    return (
        <div className="main" id="skills">
            <div className="skills-header-div">
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Brainstorm Fearlessly</h1>
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
                    something work for someone else. Someone's blurt could be the trigger for someone else's awesome
                    idea. Being fearless in yourbrainstorming allows for the creation of new ideas and new chains of
                    thought. This can only be successful in a brainstorming session when the floor is completely open to
                    anything.
                </p>
                <div className="skill-image-container-flex">
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/brainstorm1.jpg")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>brainstorming for the Atlanta History Center</p>
                    </div>
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(-2deg)" }}
                    >
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
                    As you can see above, this is some of the brainstorming I did for some of my design projects. These
                    brainstorm sessions ended up producing our final ideas and helped us explore the many options we
                    had. We weren't afraid to put ideas down. For example, when I brainstormed with my group for the
                    chatbot, I initally believed the Covid-19 route was the best. Brainstorming helped me realize that
                    the diet and food topic was a much for interesting avenue for us to take.
                </p>
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Sketch like a Maniac</h1>
                    <h1 className="greeting-text waving">✏️</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    So as I mentioned before, I'm an artist. This means I think very visually. And that also means I
                    love to sketch and get my ideas out with the use of quick drawings. Something I always hear is that
                    some folks are afraid of sketching because they're "bad at drawing" or my favorite, "I can't draw a
                    stick figure to save my life!!". And well, I have great news. You don't have to be good at drawing.
                    Sketching is a very different skill altogether; if you have a drawing utensil and paper, you're good
                    to go.
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    It's also key to remember a couple important aspects of good sketch:
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ make it quick- don't spend too much time on a single sketch
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ quantity over quality- we can focus on creating a better prototype later
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ be simple - don't overcomplicate too early on
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ create them alongside your brainstorming - the two processes go hand in hand
                </p>

                <div className="skill-image-container-flex">
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/sketch4.png")}
                            alt="sketch4"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>sketches for an persuasive data visualization</p>
                    </div>
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(-2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/sketch3.png")}
                            alt="sketch3"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>sketches for an airplane redesign</p>
                    </div>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    These examples are just a snapchot of the sketches I created recently. As you can see, I focused on
                    communicating what what I wanted to show in very simple drawings. The sketches on the left were
                    created for a data visulization project. By sketching out ideas for visualization, I wasn't
                    obstructed by overthinking the actual methods required to create the visual. That's exactly the
                    benefit of sketching! You can freely think{" "}
                    <span style={{ color: theme.accentColor }}>
                        without the restraints of determining how feasible it is
                    </span>
                    . Similar to brainstorming, it's just all about creating, creating, and creating! It's also a great
                    way to show others what you're thinking. Sometimes in brainstorming, it's hard to understand and
                    communicate your idea just with words. Sketching aids and fixes that problem.
                </p>

                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Do Your Research</h1>
                    <h1 className="greeting-text waving">🔬</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Let's say you've done your brainstorming and sketching. Congrats! It's time to jump into creating.
                    Go code, prototype, and design!
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Just kidding.<span style={{ color: theme.accentColor }}> It's time to research.</span>
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Researching is key to discovering what is feasible. In brainstorming and sketching, we were able to
                    think with no obstacles. Now it's time to be realistic and discover what has been done before and
                    what technologies and skills are required. Researching can also just involve going out into the
                    world and examining. Research is very project dependent. For example, when I was designing a
                    chatbot, I had zero experience with ever building one. I was given a set of possible options for
                    technologies.
                </p>
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
                    <h1 className="greeting-text">Don't Design for Yourself</h1>
                    <h1 className="greeting-text waving">🚫</h1>
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
                    <h1 className="greeting-text">Don't Be Afraid to Redesign</h1>
                    <h1 className="greeting-text waving">🔁</h1>
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
