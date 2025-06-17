import styles from "./Login.module.css";
import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardheader}>
            <div className={styles.cardicon}>
              <User size={32} />
            </div>
            <h2>Welcome Back</h2>
            <p>Please Login in to continue</p>
          </div>
          <div className={styles.cardbody}>
            <form>
              <div className={styles.formgroup}>
                <label htmlFor="email" className={styles.formlabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.forminput}
                  placeholder="your@email.com"
                />
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="password" className={styles.formlabel}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={styles.forminput}
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                onClick={() => navigate("/")}
                className={styles.btn}
              >
                Sign In
              </button>
              <div className={styles.link}>
                Already have an account? <Link to="/Signup">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
