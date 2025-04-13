import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
    const visitInstagram = () => {
        window.location = "";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src=""
                            alt="Founder"
                        />
                        <Typography>SeedlingsSynergyHub</Typography>
                        <Button onClick={visitInstagram} color="primary">
                            Visit Instagram
                        </Button>
                        <span>
                            Welcome to Seedlings Synergyhub, your ultimate destination for premium quality planting products. We strive to provide you with the best tools and resources for nurturing your garden and plants.
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a
                            href=""
                            target="blank"
                        >
                            <YouTubeIcon className="youtubeSvgIcon" />
                        </a>

                        <a href="" target="blank">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;