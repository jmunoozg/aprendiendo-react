import styles from "./Hero.module.css"; 

function Hero() {
    return (
      <div className={styles.hero}>
        
        <h1>Nuevo Model Y</h1>
        <p>Las entregas comienzan en marzo</p>
        <button className={styles.btn1}>Encargar</button>
        <button className={styles.btn2}>Saber más</button>
      </div>
    );
  }
  export default Hero;
  