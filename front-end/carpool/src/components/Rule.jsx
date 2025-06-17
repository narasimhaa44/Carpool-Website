import styles from "./Rule.module.css";
const Rule = () => {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>Community & Safety</h1>
          <div className={styles.matter}>
            <div className={styles.subheading}>
              <h3>Verified Members</h3>
              <p>
                Verified Members Every driver undergoes thorough background
                checks and vehicle inspections before joining our platform,
                ensuring you're always in safe hands.
              </p>
            </div>
            <div className={styles.subheading}>
              <h3>Secure Communication</h3>
              <p>
                Our encrypted in-app messaging system lets you coordinate
                details without sharing personal contact information until
                you're comfortable.
              </p>
            </div>
            <div className={styles.subheading}>
              <h3>Community Ratings</h3>
              <p>
                Transparent reviews and ratings help maintain high standards
                across our community, creating accountability for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rule;
