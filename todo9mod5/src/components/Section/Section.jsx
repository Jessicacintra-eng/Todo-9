import React from "react";
import styles from './Section.module.css'
import {lorem} from '../../assets/text';

const Section = () => {
  return (
    <div div className={styles.section__text}>
      <h2>Ajude o algoritmo a ser mais certeiro</h2>
      <p>{lorem}</p>
    </div>
  );
};

export default Section;
