import { NavLink } from "react-router-dom";
import styles from './CountryCard.module.css'

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className={`${styles.countryCard} col-12 col-md-6 col-lg-4 col-xxl-3 `}>
    <div className={`${styles.containerCard} ${styles.bgBlueBox}`}>
        <img src={flags.svg} alt={flags.alt} />

        <div className={styles.countryInfo}>
          <p className={styles.cardTitle}>
            {name.common.length > 15
              ? name.common.slice(0, 15) + "..."
              : name.common}
          </p>
          <p>
            <span className={styles.cardDescription}>Population : </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className={styles.cardDescription}>Region : </span> {region}
          </p>
          <p>
            <span className={styles.cardDescription}>Capital : </span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className={styles.readMore}>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};


export default CountryCard;