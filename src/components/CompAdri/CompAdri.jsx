import React from "react";
import styles from "./CompAdri.module.css"

export default function CompAdri() {
  return (
    <div >
        <h3>Hola, soy el componente de Adrian.</h3>
      
      <img className={styles.gif}
        src="https://media.tenor.com/3rAtEcJ09BcAAAAd/cat-loading.gif"
        alt=""
      />
    </div>
  );
}
