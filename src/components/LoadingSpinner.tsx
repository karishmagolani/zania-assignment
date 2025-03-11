import React from "react";
import styles from "@/app/page.module.css";

export const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loadingContainer} role="status">
      <div className={styles.spinner}></div>
      <span className={styles.srOnly}>Loading...</span>
    </div>
  );
};
