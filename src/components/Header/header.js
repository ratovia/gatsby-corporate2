import React, { useState, useEffect } from 'react';
import * as styles from "./header.module.css"
import LogoWhite from "../../../static/logo-white.svg"
import LogoBlue from "../../../static/logo-blue.svg"

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [logoImageUrl, setLogoImageUrl] = useState(LogoWhite);
  const [headerColor, setHeaderColor] = useState("white")
  const [headerBGColor, setHeaderBGColor] = useState("transparent")
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
      if (scroll > (793 + 505)) {
        setHeaderColor("black")
        setHeaderBGColor("#ffffff")
        setLogoImageUrl(LogoBlue) 
      } else {
        setHeaderColor("white")
        setHeaderBGColor("transparent")
        setLogoImageUrl(LogoWhite)
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <header className={styles.header} style={{
      backgroundColor: headerBGColor,
    }}>
      <div>
        <a href="/" className={styles.logoLink}><img className={styles.logoImage} src={logoImageUrl} alt="logo"></img></a>
      </div>
      <nav className={styles.navigation}>
        <a 
          className={styles.navigationLink}
          style={{
            color: headerColor,
          }} 
          href="/"
        >
          <p className={`${styles.navigationText} ${styles.navigationTextActive}`}>トップページ</p>
        </a>
        <a 
          className={styles.navigationLink}
          style={{
            color: headerColor,
          }} 
          href="company"
        >
          <p className={styles.navigationText}>企業案内</p>
        </a>
        <a 
          className={styles.navigationLink}
          style={{
            color: headerColor,
          }} 
          href="service"
        >
          <p className={styles.navigationText}>事業内容</p>
        </a>
        <a 
          className={styles.navigationLink}
          style={{
            color: headerColor,
          }} 
          href="recruit"
        >
          <p className={styles.navigationText}>採用情報</p>
        </a>
        <a 
          className={styles.navigationLink}
          style={{
            color: headerColor,
          }} 
          href="contact"
        >
          <p className={`${styles.navigationText} ${styles.navigationTextConversion}`}>お問い合わせ</p>
        </a>
      </nav>
    </header>
  )
}

export default Header

