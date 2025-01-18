import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.sectionContact}>
      <div className="container">
        <h2 className={styles.containerTitle}>Contact Us</h2>

        <div className={`${styles.contactWrapper} ${styles.container}`}>
          <form>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Enter your name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              className={styles.formControl}
              placeholder="Enter you email"
              name="email"
              required
              autoComplete="off"
            />

            <textarea
              className={styles.formControl}
              rows="7"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off"
            ></textarea>

            <button type="submit" value="send" className={styles.button}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
