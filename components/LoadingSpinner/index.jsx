import SpinerSVG from "../SpinnerSVG";
import styles from "./LoadingSpinner.module.css"


function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <SpinerSVG/>
    </div>
  );
}

export default LoadingSpinner;
