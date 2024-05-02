import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

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
  return <img src="SOC-Avatar-RK.png" alt="SOC-Avatar-RK" width="400px" />;
}

function Name() {
  return <h1 className="name">Ravi Kataria</h1>;
}

function Intro() {
  return (
    <p className="paragraph">
      Having worked as a secondary school physics teacher for most of my career,
      I'm now kickstarting my journey in the tech industry as a full-stack
      developer. I enjoy spending my spare time producing electronic music,
      watching YouTube videos and taking hot bubble baths (oh, and I'm also a
      serious Harry Potter nerd).
    </p>
  );
}

function SkillSet() {
  return (
    <div className="skill-set">
      <SkillCard
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
      <SkillCard name="SQL" background={{ backgroundColor: "yellow" }} />
    </div>
  );
}

function SkillCard(props) {
  return (
    <div className="skill-card" style={props.background}>
      <span className="skill-name">
        {props.name} <FontAwesomeIcon icon={faDumbbell} />
      </span>
    </div>
  );
}
