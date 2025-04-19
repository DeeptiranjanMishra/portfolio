import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import leetcodedark from '../../assets/leetcode_dark.svg';
import leetcodelight from '../../assets/leetcode_light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const leetcodeIcon = theme === 'light' ? leetcodedark : leetcodelight ;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section>
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Deeptiranjan Mishra"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Deeptiranjan
          <br />
          Mishra
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://leetcode.com/Di05Pun" target="_blank">
            <img src={leetcodeIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/deeptiranjanmishra" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/deeptiranjan-mishra" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Enthusiastic full-stack developer skilled in front-end and back-end technologies, and a passion for problem-solving and writing clean, efficient code.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
    
    </section>
  );
}

export default Hero;
