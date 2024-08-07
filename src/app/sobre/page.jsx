import Image from "next/image";
import styles from "./page.module.css";

export default function Sobre() {
  return (    
     <div className='containerGlobal'>
        <div className={styles.container_titulo}>
          <h1 className={styles.txt_titulo}>Sobre</h1>
        </div>    
    </div>
  );
}
