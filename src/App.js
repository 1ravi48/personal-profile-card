import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const skillsArray = [
  { skill: "HTML+CSS", level: "expert", color: "rgb(255, 77, 210)" },
  { skill: "JavaScript", level: "intermediate", color: "rgb(0, 179, 0)" },
  { skill: "React", level: "intermediate", color: "red" },
  { skill: "Express", level: "beginner", color: "rgb(77, 77, 255)" },
  { skill: "SQL", level: "beginner", color: "yellow" },
];

export default function App() {
  return (
    <div className="app-div">
      <Avatar />
      <Name />
      <Intro />
      <SkillSet />
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="personal-profile-pic.jpg"
      alt="personal-profile-pic-RK"
      width="400px"
    />
  );
}

function Name() {
  return <h1 className="name">Ravi Kataria</h1>;
}

function Intro() {
  return (
    <p className="paragraph">
      Having worked as a secondary school physics teacher for most of my career,
      I'm now kickstarting my journey in the tech industry as a full-stack
      developer. In my spare time, I enjoy producing electronic music, watching
      YouTube videos and taking hot bubble baths (oh, and I'm also a serious
      Harry Potter nerd).
    </p>
  );
}

function SkillSet() {
  return (
    <div className="skill-set">
      {skillsArray.map((skill) => {
        return <SkillCard skillObj={skill} />;
      })}

      {/*<SkillCard
        name="HTML+CSS"
        background={{ backgroundColor: "rgb(255, 77, 210)" }}
      />
      <SkillCard
        name="JavaScript"
        background={{ backgroundColor: "rgb(0, 179, 0)" }}
      />
      <SkillCard name="React" background={{ backgroundColor: "red" }} />
      <SkillCard
        name="Express"
        background={{ backgroundColor: "rgb(77, 77, 255)" }}
      />
  <SkillCard name="SQL" background={{ backgroundColor: "yellow" }} />*/}
    </div>
  );
}

function SkillCard({ skillObj }) {
  if (skillObj.level === "beginner") {
    return (
      <div className="skill-card" style={{ backgroundColor: skillObj.color }}>
        <span className="skill-name">
          {skillObj.skill} <FontAwesomeIcon icon={faBookOpenReader} />
        </span>
      </div>
    );
  } else if (skillObj.level === "intermediate") {
    return (
      <div className="skill-card" style={{ backgroundColor: skillObj.color }}>
        <span className="skill-name">
          {skillObj.skill} <FontAwesomeIcon icon={faDumbbell} />
        </span>
      </div>
    );
  } else {
    return (
      <div className="skill-card" style={{ backgroundColor: skillObj.color }}>
        <span className="skill-name">
          {skillObj.skill} <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
    );
  }
}
