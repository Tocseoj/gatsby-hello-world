import React from "react"
import styles from "./header.module.css"

export default ({headerText, subtitleText}) => (
  <>
  <h1 className={styles.header}>{headerText}</h1>
  <p className={styles.subtitle}>{subtitleText}</p>
  </>
)