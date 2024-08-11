import React from 'react';
import '../styles/Skills.scss';
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact} from 'react-icons/fa';
import { SiAngular, SiC, SiCplusplus, SiCsharp ,SiGit } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { GiTBrick, GiTec9 } from 'react-icons/gi';

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
      <div className="skill">
          <SiCsharp />
          <p className="skill-name">C#</p>
        </div>
        <div className="skill">
          <DiJava />
          <p className="skill-name">Java</p>
        </div>
        <div className="skill">
          <FaNode />
          <p className="skill-name">Node.js</p>
        </div>
        <div className="skill">
          <FaHtml5 />
          <p className="skill-name">HTML</p>
        </div>
        <div className="skill">
          <FaCss3Alt />
          <p className="skill-name">CSS</p>
        </div>
        <div className="skill">
          <FaJs />
          <p className="skill-name">JavaScript</p>
        </div>
       
        <div className="skill">
          <FaReact />
          <p className="skill-name">React</p>
        </div>
        <div className="skill">
          <SiAngular />
          <p className="skill-name">Angular</p>
        </div>
        <div className="skill">
          <SiGit />
          <p className="skill-name">Git</p>
        </div>
        <div className="skill">
          <SiCplusplus/>
          <p className="skill-name">C ++</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
