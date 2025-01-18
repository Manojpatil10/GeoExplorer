import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import CountryCard from "../Components/Layout/CountryCard";
import SearchFilter from "../Components/UI/SearchFilter";
import Loader from "../Components/UI/Loader";
import styles from "./Country.module.css";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // console.log(search, filter);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className={styles.countrySection}>
      <div className="container">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />

        <ul className="row p-0">
          {filterCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Country;
