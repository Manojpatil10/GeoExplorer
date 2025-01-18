import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/PostApi";
import Loader from "../UI/Loader";
import styles from "./CountryDetails.module.css";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }

      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);

  if (isPending) return <Loader />;

  console.log(params);
  return (
    <section className={`${styles.card}`}>
      <div className="container">
        <div className={`${styles.containerCard} ${styles.bgBlueBox}`}>
          {country && (
            <div className="row">
              <div className={`${styles.countryImage} col-12 col-lg-6`}>
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt}
                  className={styles.flag}
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles.countryContent}>
                  <p className={styles.cardTitle}> {country.name.official} </p>

                  <div className={styles.infoContainer}>
                    <p>
                      <span className={styles.cardDescription}>
                        {" "}
                        Native Names :{" "}
                      </span>
                      {Object.keys(country.name.nativeName)
                        .map((key) => country.name.nativeName[key].common)
                        .join(", ")}
                    </p>
                    <p>
                      <span className={styles.cardDescription}>
                        {" "}
                        Population :{" "}
                      </span>
                      {country.population.toLocaleString()}
                    </p>
                    <p>
                      <span className={styles.cardDescription}> Region : </span>
                      {country.region}
                    </p>
                    <p>
                      <span className={styles.cardDescription}>
                        {" "}
                        Sub Region :{" "}
                      </span>
                      {country.subregion}
                    </p>
                    <p>
                      <span className={styles.cardDescription}>
                        {" "}
                        Capital :{" "}
                      </span>
                      {country.capital}
                    </p>

                    <p>
                      <span className={styles.cardDescription}>
                        Top Level Domain :{" "}
                      </span>
                      {country.tld[0]}
                    </p>
                    <p>
                      <span className={styles.cardDescription}>
                        {" "}
                        Currencies :{" "}
                      </span>
                      {Object.keys(country.currencies)
                        .map((curElem) => country.currencies[curElem].name)
                        .join(", ")}
                    </p>
                    <p>
                      <span className={styles.cardDescription}>
                        Languages :{" "}
                      </span>
                      {Object.keys(country.languages)
                        .map((key) => country.languages[key])
                        .join(", ")}
                    </p>
                  </div>
                </div>
                <div className={styles.countryCardBackBtn}>
                  <NavLink to="/country">
                    <button className={styles.backBtn}>Go Back</button>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
