import React from 'react';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorMessage}>Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className={styles.goHomeButton}>
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;

