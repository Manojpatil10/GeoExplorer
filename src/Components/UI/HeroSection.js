// import { FaLongArrowAltRight } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     <main className="hero-section main">
//       <div className="container grid grid-two-cols">
//         <div className="hero-content">
//           <h1 className="heading-xl">
//             Explore the World, One Country at a Time.
//           </h1>
//           <p className="paragraph">
//             Discover the history, culture, and beauty of every nation. Sort,
//             search, and filter through countries to find the details you need.
//           </p>
//           <button className="btn btn-darken btn-inline bg-white-box">
//             Start Exploring <FaLongArrowAltRight />
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };


// export default HeroSection;



import { FaLongArrowAltRight } from "react-icons/fa";
import styles from './HeroSection.module.css'; // Import the CSS module

const HeroSection = () => {
  return (
    <main className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Explore the World, <br/> One Country at a Time.
          </h1>
          <p className={styles.paragraph}>
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className={`${styles.btn} ${styles.btnDarken} ${styles.bgWhiteBox}`}>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
