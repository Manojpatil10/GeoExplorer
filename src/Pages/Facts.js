import countryFacts from "../api/countryData.json";
import styles from './Facts.module.css';

const About = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className="container">
      <h2 className={styles.containerTitle}>
        Here are some Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className={`${styles.gradientCards} row`}>
        {countryFacts.map((wonder,id) => {
          return (
            <div className={`${styles.card} col-12 mb-4 col-md-6 col-xl-4`} key={id}>
              <div className={`${styles.containerCard} ${styles.bgBlueBox}`}>

                <img src={wonder.url} alt={wonder.wonder}/>
                <p className={styles.cardTitle}>{wonder.wonder}</p>

                <p>
                  <span className={styles.cardDescription}>location : </span>
                  {wonder.location}
                </p>
                <p>
                  <span className={styles.cardDescription}>Description : </span>
                  {wonder.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default About;
