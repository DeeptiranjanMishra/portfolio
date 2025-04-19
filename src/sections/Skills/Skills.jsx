import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import htmlicon from '../../assets/html.svg';
import cssicon from '../../assets/css.svg';
import javascript from '../../assets/javascript.svg';
import node from '../../assets/node-js.svg';
import express from '../../assets/express.svg';
import tailwind from '../../assets/Tailwind CSS.svg';
import mongodb from '../../assets/mongodb.svg';
import react from '../../assets/react.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import redux from '../../assets/redux.svg';
import postman from '../../assets/postman.svg';
import c from '../../assets/c.svg';
import cpp from '../../assets/cpp.svg';
import python from '../../assets/python.svg';
import java from '../../assets/java.svg';


import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillList}>
        <SkillList src={c} skill="C" />
        <SkillList src={cpp} skill="C++" />
        <SkillList src={python} skill="Python" />
        <SkillList src={java} skill="Java" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={htmlicon} skill="HTML" />
        <SkillList src={cssicon} skill="CSS" />
        <SkillList src={javascript} skill="JavaScript" />
        <SkillList src={tailwind} skill="Tailwind-CSS" />
        <SkillList src={react} skill="React" />
        <SkillList src={redux} skill="Redux" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={node} skill="Node" />
        <SkillList src={express} skill="Express" />
        <SkillList src={mongodb} skill="MongoDB" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={git} skill="Git" />
        <SkillList src={github} skill="GitHub" />
        <SkillList src={postman} skill="Postman" />
      </div>
    </section>
  );
}

export default Skills;
