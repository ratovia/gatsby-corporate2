import React from 'react'
import * as styles from "./hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroFixedArea}>
        <div className={styles.heroImageArea}>
          <div className={styles.heroImage}></div>
        </div>
      </div>
      <div className={styles.heroMessageArea}>
        <h2 className={styles.heroMessage}>あたりまえに出会える世界にほら一歩</h2>
        <p className={styles.heroMessageSub}></p>
      </div>
    </section>
  )
}

export default Hero
