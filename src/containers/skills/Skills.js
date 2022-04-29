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
                    idea. Being fearless in your brainstorming allows for the creation of new ideas and new chains of
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
                    chatbot, I initially believed the Covid-19 route was the best. Brainstorming helped me realize that
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
                    These examples are just a snapshot of the sketches I created recently. As you can see, I focused on
                    communicating what what I wanted to show in very simple drawings. The sketches on the left were
                    created for a data visualization project. By sketching out ideas for visualization, I wasn't
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
                    world and examining your subject. Research is very project dependent. For example, when I was
                    designing a chatbot, I had zero experience with ever building one. I was given a set of possible
                    options for technologies. I spent some time looking into each one and thinking realistically about
                    their feasibility within our time frame. In the end, we landed on choosing FlowXO for the project
                    even though we later realized there were some drawbacks to the service. This happens; sometimes you
                    make the best choice as the time and it still isn't the perfect option.
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    On the other hand, when I was discovering what areas of Emory's campus were the least or most
                    accessible, I spent real time walking around and investigating. I restricted my use of stairs and
                    any methods of traveling/getting around that was inaccessible.
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    All in all, researching is unskippable when designing. I have just gone over technology/background
                    research and observable research. In Amy J. Ko's' Design Methods, she writes about different modes
                    of communicating with others in order to understand problems.
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ Surveys communicate with people in a structured, asynchronous, impersonal way, getting you large
                    scale insight, but in a way that can be unintentionally overly structured, biased on who responds,
                    and shallow in insight.
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ Interviews communicate with people in a synchronous, personal, semi-structured way, getting you
                    deeper insights —assuming you have established good rapport— but at the cost of more time and a
                    smaller range of people.
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ Observations communicate with people by connecting you with their spaces, their practices, their
                    collaborations, and their communication with others, revealing the inherent richness and complexity
                    of their world, but with an even greater time commitment than interviews.
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ Secondary research does not communicate with people, but leverages insights that others have
                    gained from communicating with people, and published in research papers, books, and other sources.
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    All of these are ways you can conduct research.
                </p>
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Talk to People</h1>
                    <h1 className="greeting-text waving">🗣️</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    This point ties in a lot with doing research. Let me remind what we're talking about here: Human
                    Computer Interaction. Yes, <span style={{ color: theme.accentColor }}> HUMAN</span> Computer
                    Interaction. Talking to people is key to understanding problems, discovering problems, and designing
                    with real people in mind. The only way you can truly know what others need is by asking questions.
                    Additionally, talking to people outside of your design group is something important to do throughout
                    the stages of designing. Feedback is also key to redesigning and updating.
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    This point was probably the most difficult for me to accept. I am an introvert at heart and I deal
                    with some intense social anxiety sometimes. It was really hard for me to gather the courage to ask
                    people for help. The best advice I got was: the worst thing that can happen is they say no.
                </p>
                <div className="skill-image-container-flex">
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/people1.png")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>survey feedback about our mobile site redesign</p>
                    </div>
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(-2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/people2.jpeg")}
                            alt="brainstorm1"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>Wizard of Oz evaluation over iMessage</p>
                    </div>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    One way you can avoid too many social interactions is by using technology to aid your interactions.
                    This way you get the benefit of needfinding or feedback without the awkwardness of real life
                    socialization. For example, when we wanted to receive feedback for our Atlanta History Center mobile
                    site, we asked people to fill out a survey. This survey also gave us some quantitative and
                    qualitative data about the effectiveness of our design. Additionally, when I wanted to evaluate the
                    effectiveness of our conversation flow for our chatbot, I performed a Wizard of Oz evaluation with a
                    friend of mine over iMessage.
                </p>
                {/* <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Test, Test, Test! </h1>
                    <h1 className="greeting-text waving">🔨</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}></p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}></p>
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
                </p>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    My own personal experience with design has been rocky. I'm an artist and I absolutely love to c
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
                </div> */}
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">Keep Updating and Redesigning</h1>
                    <h1 className="greeting-text waving">🔁</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    When I say updating and redesigning, I'm referring to the iterative design process. The iterative
                    process was used throughout the different projects I worked on. The most relevant example of the
                    iterative process is the process we used when designing the mobile website for the Atlanta History
                    Center. First, we started with just prototypes like the ones below.
                </p>
                <div className="skill-image-container-flex">
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/sketch5.jpeg")}
                            alt="sketch3"
                            width="700px"
                        />
                        <p style={{ color: theme.thirdText }}>prototypes for the ticket page</p>
                    </div>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    This initial sketch/prototype was our first iteration. I was able to loosely iterate within my own
                    sketches. Next, we created a more official prototype with Figma. This prototype was our second
                    iteration. Our third iteration came when we collected feedback and integrated the feedback into an
                    adjustment for the third iteration. I learned through this process that repeating and reiterating
                    kept improving our design. We were able to hone in on problems we didn't see and flesh out areas we
                    had never even thought of.
                </p>
                <div className="skill-image-container-flex">
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(-2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/prototype1.jpg")}
                            alt="sketch3"
                            width="700px"
                        />
                        <p style={{ color: theme.thirdText }}>third iteration design for the ticket page</p>
                    </div>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Additionally, when I was redesigning the airplane seat screen, I also used this iterative design
                    process as you can see in the image below. I took my original sketches and refined them.
                </p>
                <div className="skill-image-container-flex">
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/sketch3.png")}
                            alt="sketch3"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>sketches for airplane seat screen redesign</p>
                    </div>
                </div>
                <div className="skill-image-container-flex">
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/sketch6.png")}
                            alt="sketch6"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>redesign of previous sketches</p>
                    </div>
                    <div
                        className="skill-image-container"
                        style={{ background: theme.projectCard, transform: "rotate(-2deg)" }}
                    >
                        <img
                            className="cartoon"
                            src={require("../../assests/images/sketch7.png")}
                            alt="sketch7"
                            width="500px"
                        />
                        <p style={{ color: theme.thirdText }}>redesign of previous sketches</p>
                    </div>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Overall, designing iteratively provided many benefits.
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ user feedback - user testing and feedback helped me understand what parts of my design worked and
                    what didn't
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ less overwhelming - by breaking the process down into iterations, it was a lot less overwhelming
                    and easier to focus on elements when they needed attention
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ usability - it just makes sense, the more you iterate the better you refine your design!
                </p>
                <p className="greeting-text-points-bullet paragraph" style={{ color: theme.thirdText }}>
                    ➕ efficiency - improving as we went along let us provide a design when it was needed, but still
                    allowed us to have the flexibility to change and update
                </p>
                <div className="greeting-title-div skills-title " style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className="greeting-text">In Conclusion...</h1>
                </div>
                <p className="greeting-text-points-para paragraph" style={{ color: theme.thirdText }}>
                    Learning more about the concepts behind Human Computer Interaction helped me refine my own design
                    process. I was able to take what I learned in class and apply it to my projects. The most satisfying
                    part was that these principles gave the results they promised. By spending time on the iterative
                    process and encouraging ideation, I was able to see improvements in my designs. I hope to continue
                    refining my skills and process as I continue learning more. Here's to creating 🍷.
                </p>
            </div>
        </div>
    );
}
