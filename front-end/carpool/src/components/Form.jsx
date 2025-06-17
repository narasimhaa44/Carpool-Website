import { TfiExchangeVertical } from "react-icons/tfi";
import { Navigation } from "lucide-react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardheader}>
          <div className={styles.cardicon}>
            <Navigation size={32} />
          </div>
          <h2>Find Your Route</h2>
          <p>Enter your journey details</p>
        </div>
        <div className={styles.cardbody}>
          <form className={styles.form}>
            <div className={styles.formgroup}>
              <label htmlFor="from" className={styles.formlabel}>
                Starting Point
              </label>
              <input
                type="text"
                id="from"
                className={styles.forminput}
                placeholder="Where are you now?"
              />
            </div>

            <button type="button" className={styles.btn1}>
              <TfiExchangeVertical />
            </button>

            <div className={styles.formgroup}>
              <label htmlFor="to" className={styles.formlabel}>
                Destination
              </label>
              <input
                type="text"
                id="to"
                className={styles.forminput}
                placeholder="Where do you want to go?"
              />
            </div>

            <button type="submit" className={styles.btn}>
              Let's Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
