import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
    return (
        <div className="footer-div">
            <Fade>
                <p className="footer-text" style={{ color: props.theme.secondaryText }}>
                    Made with <span role="img">❤️</span> by {greeting.title2}
                </p>
                <p className="footer-text" style={{ color: props.theme.secondaryText }}>
                    Website adapted from <a href="https://github.com/harikanani/PortfolioV2">PortfolioV2</a>
                </p>
            </Fade>
        </div>
    );
}
