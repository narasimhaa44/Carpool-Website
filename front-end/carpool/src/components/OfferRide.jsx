import { useState, useEffect } from "react";
import styles from "./OfferRide.module.css";
import { Car, MapPin, CheckCircle, Users, MessageSquare } from "lucide-react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const OfferRide = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        navigate("/book");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      location: formData.get("source"),
      destination: formData.get("destination"),
      carNumber: formData.get("carnumber"),
      carcapacity: formData.get("cartype"),
      availableseats: formData.get("Availableseats"),
      conditions: formData.get("exampleFormControlTextarea1"),
    };

    try {
      const res = await axios.patch(`http://localhost:4000/Signup`, data);

      if (res.status === 200) {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error("Error offering ride:", err);
    }
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1>Offer a Ride</h1>
          <p>Share your journey with others and reduce your carbon footprint</p>
        </div>

        {formSubmitted && (
          <div className={styles.successMessage}>
            <CheckCircle size={20} />
            <span>Your ride has been offered successfully!</span>
          </div>
        )}

        <form
          action="/Signup"
          method="PATCH"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.formgroup}>
            <label htmlFor="source" className={styles.label}>
              Location:
            </label>
            <div className={styles.inputWrapper}>
              <MapPin size={18} className={styles.inputIcon} />
              <input
                type="text"
                className={styles.input}
                id="source"
                name="source"
                placeholder="Enter your location"
                required
              />
            </div>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="destination" className={styles.label}>
              Destination:
            </label>
            <div className={styles.inputWrapper}>
              <MapPin size={18} className={styles.inputIcon} />
              <input
                type="text"
                className={styles.input}
                id="destination"
                name="destination"
                placeholder="Enter your destination"
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formgroup}>
              <label htmlFor="carnumber" className={styles.label}>
                Car Number:
              </label>
              <div className={styles.inputWrapper}>
                <Car size={18} className={styles.inputIcon} />
                <input
                  type="text"
                  className={styles.input}
                  id="carnumber"
                  name="carnumber"
                  placeholder="Enter your car number"
                  required
                />
              </div>
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="cartype" className={styles.label}>
                Car Company:
              </label>
              <div className={styles.inputWrapper}>
                <Car size={18} className={styles.inputIcon} />
                <input
                  type="text"
                  className={styles.input}
                  id="cartype"
                  name="cartype"
                  placeholder="Enter your car company"
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formgroup}>
              <label htmlFor="Totalseats" className={styles.label}>
                Total number of seats:
              </label>
              <div className={styles.inputWrapper}>
                <Users size={18} className={styles.inputIcon} />
                <input
                  type="number"
                  className={styles.input}
                  id="Totalseats"
                  name="Totalseats"
                  placeholder="Enter total seats"
                  min="1"
                  max="10"
                  required
                />
              </div>
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="Availableseats" className={styles.label}>
                Available seats:
              </label>
              <div className={styles.inputWrapper}>
                <Users size={18} className={styles.inputIcon} />
                <input
                  type="number"
                  className={styles.input}
                  id="Availableseats"
                  name="Availableseats"
                  placeholder="Enter available seats"
                  min="1"
                  max="10"
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.formgroup}>
            <label
              htmlFor="exampleFormControlTextarea1"
              className={`form-label ${styles.label}`}
            >
              Additional Information
            </label>
            <div className={styles.inputWrapper}>
              <MessageSquare size={18} className={styles.inputIcon} />
              <textarea
                className={`form-control ${styles.input} ${styles.textarea}`}
                id="exampleFormControlTextarea1"
                name="exampleFormControlTextarea1"
                rows="3"
                placeholder="Provide any additional details about your ride (optional)"
              ></textarea>
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>
              Offer Ride
            </button>
            <button type="reset" className={styles.resetButton}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferRide;
