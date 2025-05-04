import type React from "react";
import ParallaxSection from "../../../components/ParallaxSection";
import styles from "../../../styles/EventDetails.module.css";
import FloralDivider from "./FloralDivider";
import { motion } from "framer-motion";
import { CountdownTimer } from "./Countdown-timer";

const EventDetails: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const targetDate = new Date(currentYear, 7, 17, 18, 0, 0) // Año, mes (7=agosto), día, hora (18=6PM), minutos, segundos
  return (
    <>
      <FloralDivider />

      <ParallaxSection
        speed={0.5}
        direction="up"
        className={styles.eventDetailsContainer}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="p-6 bg-white rounded-lg shadow-sm"
        >
          <CountdownTimer targetDate={targetDate} />
        </motion.div>

        <div className={styles.eventDetails}>
          <div className={styles.eventDetail}>
            <div className={styles.eventDetailIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3>Fecha</h3>
            <p>22 de febrero 2025</p>
          </div>

          <div className={styles.eventDetail}>
            <div className={styles.eventDetailIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Hora</h3>
            <p>6:00 pm</p>
          </div>

          <div className={styles.eventDetail}>
            <div className={styles.eventDetailIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Lugar</h3>
            <p>Finca Pórtico Torcoroma</p>
          </div>
        </div>
      </ParallaxSection>

      <FloralDivider />
    </>
  );
};

export default EventDetails;
