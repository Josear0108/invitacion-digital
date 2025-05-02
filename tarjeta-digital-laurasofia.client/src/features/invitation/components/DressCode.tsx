import type React from "react"
import ParallaxSection from "../../../components/ParallaxSection"
import styles from "../../../styles/DressCode.module.css"

const DressCode: React.FC = () => {
  return (
    <ParallaxSection speed={0.7} direction="up" className={styles.dressCodeContainer}>
      <div className={styles.dressCode}>
        <h3>Vestimenta</h3>
        <p className={styles.dressCodeMain}>TRAJE FORMAL</p>
        <p className={styles.dressCodeReserved}>VERDE ESMERALDA Y DERIVADOS ESTÁN RESERVADOS PARA LA QUINCIAÑERA</p>
      </div>
    </ParallaxSection>
  )
}

export default DressCode
