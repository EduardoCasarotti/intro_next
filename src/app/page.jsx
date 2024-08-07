import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (    
     <div className='containerGlobal'>
        <div className={styles.container_titulo}>
          <h1 className={styles.txt_titulo}>Aula Next</h1>
          <h2>Exemplo</h2>
          <h3>Exemplo</h3>
          <p>Exemplo paragrafo</p>
          {/* <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'center'}}> */}
          <div className={styles.containerImagem}>
            <Image
              src="/esquilo.jpg" 
              width={1190}
              height={888}
              alt="esquilo"
              className={styles.imageHome}
              />
              <Image
              src="/esquilo.jpg" 
              width={1190}
              height={888}
              alt="esquilo"
              className={styles.imageHome}
              />
          </div>
        </div>    
    </div>
  );
}
