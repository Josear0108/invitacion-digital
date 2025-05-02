import type React from "react"
import ParallaxSection from "../../../components/ParallaxSection"
import styles from "../../../styles/GiftSection.module.css"

const GiftSection: React.FC = () => {
  return (
    <ParallaxSection speed={0.8} direction="up" className={styles.giftSectionContainer}>
      <div className={styles.giftSection}>
        <div className={styles.giftIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 12 20 22 4 22 4 12"></polyline>
            <rect x="2" y="7" width="20" height="5"></rect>
            <line x1="12" y1="22" x2="12" y2="7"></line>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
          </svg>
        </div>
        <h3>Mesa de Regalos</h3>
        <p className={styles.giftMessage}>Tu presencia es mi mejor regalo, pero si deseas obsequiarme algo:</p>
        <p className={styles.giftOption}>Lluvia de sobres</p>
      </div>
    </ParallaxSection>
  )
}

export default GiftSection
