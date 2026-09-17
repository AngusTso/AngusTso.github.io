import styles from "./AboutMe.module.css";
import gamedevPic from "../assets/gameDevPic.avif";
import Profile from "../assets/Profile.jpeg";

const AboutMe = () => {
  return (
    <div>
      <div className={styles.bio}>
        <img src={gamedevPic} />
        <div>
          <h1>About Me</h1>
          <p>
            I’m Angus Tso, an early-career Software Engineer and a Computer Engineering graduate from The Chinese University of Hong Kong. My main experience is in full-stack web and mobile development, working across frontend interfaces, backend services, APIs, databases, authentication, and real-time communication.
            <br />  
            I have hands-on production experience from working on a Learning Management System at the University of Hong Kong, where I worked with an Agile team to develop and maintain features for a system serving around 400 users. Outside of professional work, I have also built my own web and mobile applications, which has given me the opportunity to explore software development from both a technical and product perspective.
          </p>
          <h2>Why Software Engineering?</h2>
          <p>
            My interest in software development started when I was young. When I was eleven, I played a game called Game Dev Story by Kairosoft. The game was about developing games, managing a company, and deciding what kind of products to create.
            <br />
            What fascinated me wasn&apos;t simply the idea of making games. It was the freedom to take an idea, make decisions about it, and eventually turn it into something that other people could use.
            <br />
            That idea has stayed with me ever since. Software engineering gives me a similar kind of creative freedom: I can start with a problem or an idea and gradually turn it into something real.
          </p>
          <h2>What I’m Working Toward</h2>
          <p>
            My current goal is to become a versatile Software Engineer who can contribute across different parts of a system rather than being limited to a single area. I want to continue strengthening my skills in full-stack and backend development while gradually moving toward AI application engineering, including technologies such as LLM APIs, RAG, agents, and AI-powered workflows.
            <br />
            In the long term, I hope to use the technical and product experience I gain as a Software Engineer to build products of my own. Entrepreneurship is one of my long-term ambitions, particularly the idea of creating software that solves real problems and gives me greater freedom to create.
            <br />
            For me, software engineering is ultimately about more than writing code. It is a way to build things, solve problems, and turn ideas into something real. 
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
                <span className={styles.openings}>5</span>+ years of developing
                software experience
              </span>
              <span>
                <span className={styles.openings}>6</span> comp sci related
                certificate earned (offline/online)
              </span>
              <span>
                <span className={styles.openings}>191</span> Leetcode questions
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
