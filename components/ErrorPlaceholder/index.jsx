import styles from "./ErrorPlaceholder.module.css"

function ErrorPlaceholder() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <p className={styles.text}>!</p>
      </div>
      <p className={styles.title}>Error</p>
    </div>
  );
}

export default ErrorPlaceholder;
