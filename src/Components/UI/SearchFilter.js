import { useState } from "react";
import styles from "./SearchFilter.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <section className={styles.searchFilter}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 mb-4 col-md-4 mb-md-0 col-xl-3">
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={handleInputChange}
            />
          </div>

          <div className={`${styles.searchFilterInner} col-12 mb-4 col-md-4 mb-md-0 col-xl-3`}>
            <div className="row">
              <div className="col-6 d-flex justify-content-center">
                <button onClick={() => sortCountries("asc")}>Asc</button>
              </div>

              <div className="col-6 d-flex justify-content-center">
                <button onClick={() => sortCountries("des")}>Desc</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-xl-3">
            <div
              className={styles.dropdownContainer}
              onClick={handleDropdownClick}
            >
              <select
                className={styles.selectSection}
                value={filter}
                onChange={handleSelectChange}
              >
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
              <span className={styles.arrow}>
                {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
