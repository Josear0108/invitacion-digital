import type React from "react"
import styles from "../../../styles/Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerMain}>¡No Faltes!</p>
      <p className={styles.footerSub}>Gracias por ser parte de este momento especial</p>
    </footer>
  )
}

export default Footer
