import styles from "./LogoTicker.module.css";

const LogoTicker = () => {
  return (
    <section className={styles.logoTicker}>
      <div className={styles.logoTicker1}>
        <img
          className={styles.quantum1Icon}
          loading="lazy"
          alt=""
          src="/quantum-1@2x.png"
        />
        <img className={styles.pulse1Icon} alt="" src="/pulse-1@2x.png" />
        <img
          className={styles.echo1Icon}
          loading="lazy"
          alt=""
          src="/echo-1@2x.png"
        />
        <img
          className={styles.celestia1Icon}
          loading="lazy"
          alt=""
          src="/celestia-1@2x.png"
        />
        <img
          className={styles.apex1Icon}
          loading="lazy"
          alt=""
          src="/apex-1@2x.png"
        />
        <img
          className={styles.acme1Icon}
          loading="lazy"
          alt=""
          src="/acme-1@2x.png"
        />
        <div className={styles.logoTickerChild} />
      </div>
    </section>
  );
};

export default LogoTicker;
