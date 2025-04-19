import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/DeeptiranjanMishra/SkillxTech3"
          h3="SkillXTech"
          p="EdTech Platform"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/DeeptiranjanMishra/DayDrive"
          h3="DayDrive"
          p="Habit-Tracking Website"
        />
      </div>
    </section>
  );
}

export default Projects;
