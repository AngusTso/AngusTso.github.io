import React from "react";
import styles from "./AboutMe.module.css";
import gamedevPic from "../assets/gamedevPic.avif";
import Profile from "../assets/Profile.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className={styles.bio}>
        <img src={gamedevPic} />
        <div>
          <h1>About Me</h1>
          <p>
            I am a software engineer that specialize in developing web app and
            cross-platform mobile app using React and React Native.I love
            developing app that help people in different ways.
          </p>
          <h2>Why I want be a SWE ?</h2>
          <p>
            Why I want to be a swe is actually related to the picture on the
            left. When I was eleven, I played a game called Game dev story from
            kairosoft. In that Game, your job is to develop game and grow your
            business.One of the main feature of the game is letting you decide
            the genre and topic of your game, this kind of freedom and
            creativity make me fall in love with the idea of developing
            something of my own.
          </p>
          <h2>Current Goals</h2>
          <p>
            To gain as much experience as possible in different aspect.I want to
            be a more versatile Swe that able to do a lots of stuff and not let
            my own disability to limit the kind of software I can develop.
          </p>
          <h2>My Ultimate Career Goals</h2>
          <p>
            Like Most swe, my Ultimate Goals is to create a Saas business
            startup
          </p>
        </div>
      </div>
      <div className={styles.achivement}>
        <h1>My Experience</h1>
        <div className={styles.achivementInfo}>
          <img src={Profile} />
          <div>
            <h3>Tso Sze Long Angus</h3>
            <p>Bachelor of engineering in Computer Engineering (CUHK)</p>
            <div className={styles.experience}>
              <span>
                <span className={styles.openings}>7</span>+ years of programming
                experience
              </span>
              <span>
                <span className={styles.openings}>4</span>+ years of developing
                software experience
              </span>
              <span>
                <span className={styles.openings}>6</span> comp sci related
                certificate earned (offline/online)
              </span>
              <span>
                <span className={styles.openings}>124</span> Leetcode questions
                completed
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.joinedActivities}></div>
    </div>
  );
};

export default AboutMe;
