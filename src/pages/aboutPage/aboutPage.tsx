import styles from "./aboutPage.module.scss";
import bellam from "./asserts/bellam.jpg";

export const AboutPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.section__block}>
        <span className={styles.section__title_2}>Project</span>
        <div className={styles.section__text}>
          <span>
            "Map projections" is one of the most important and very complicated
            topics in GIS and Cartography
          </span>
          <span>
            I developed an interactive projection viewer and quiz to make the
            learning process more fun
          </span>
          <span>
            Inspired by{" "}
            <a href="https://www.geo-projections.com/" target="_blank">
              Map Projection Explorer
            </a>
          </span>
        </div>
      </section>

      <section className={styles.section__block}>
        <span className={styles.section__title_2}>Tech Stack</span>
        <div className={styles.section__subsection}>
          <div>
            <ul className={styles.section__list}>
              <li className={styles.section__list__element}>
                <img
                  className={styles.section__image__icon}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="React Icon"
                />
                React App
              </li>
              <li className={styles.section__list__element}>
                <img
                  className={styles.section__image__icon}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                  alt="Typescript Icon"
                />
                Typescript
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section__list__element}>
          <img
            className={styles.section__image__icon}
            src="https://d3js.org/logo.svg"
            alt="D3 Icon"
          />
          D3.js library - for Maps Visualization
        </div>
      </section>

      <section className={styles.section__block}>
        <span className={styles.section__title_2}>Аuthor</span>
        <div className={styles.section__row}>
          <div className={styles.section__column}>
            <img
              src={bellam}
              alt="Bella Mir"
              className={styles.author__image}
            />
            <span>Bella Mir</span>
          </div>
          <div className={styles.section__text}>
            <ul>
              <li>GIS analyst and Web-GIS developer</li>
              <li>
                Student{" "}
                <a
                  href="https://cartographymaster.eu"
                  target="_blank"
                  className={styles.author__description}
                >
                  Cartography M.Sc.
                </a>
              </li>
              <li>
                <a href="https://github.com/bella-mir" target="_blank">
                  GitHub
                </a>
                <span className={styles.author__separator}> | </span>
                <a
                  href="https://www.linkedin.com/in/bella-mironova-64b01a222/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/bella-mir" target="_blank">
                  GIS AND PEACE
                </a>{" "}
                Telegram Blog (in Russian)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
