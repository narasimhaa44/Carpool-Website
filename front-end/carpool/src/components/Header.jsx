import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg border-bottom shadow-sm ${styles.nav}`}
        // data-bs-theme="dark"
      >
        <div class={`container-fluid  ${styles.title}`}>
          <a class="navbar-brand " href="/">
            <img
              src="./public/images/logo.jpg"
              alt="logo"
              className="logo-icon "
            />
            Green Way
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/ride">
                Offer Ride
              </a>
              <a class="nav-link" href="/form" aria-disabled="true">
                Find ride
              </a>
              <a class="nav-link" href="/login">
                Login
              </a>
              <a class="nav-link" href="/Signup" aria-disabled="true">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
