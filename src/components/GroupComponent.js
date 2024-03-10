import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.tag}>
        <div className={styles.version20Is}>Version 2.0 is here</div>
      </div>
      <h1 className={styles.h1}>Pathway to productivity</h1>
      <h3 className={styles.body}>
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </h3>
      <button className={styles.buttons}>
        <div className={styles.getForFree}>Get for free</div>
      </button>
      <div className={styles.buttons1}>
        <div className={styles.getForFree1}>Learn more</div>
        <img
          className={styles.icons}
          loading="lazy"
          alt=""
          src="/icons-1.svg"
        />
      </div>
      <div className={styles.logoDefault}>
        <img className={styles.cylinder1Icon} alt="" src="/cylinder-1@2x.png" />
        <img className={styles.visualIcon} alt="" src="/visual@2x.png" />
      </div>
      <img className={styles.halfTorus1Icon} alt="" src="/halftorus-1@2x.png" />
    </section>
  );
};

export default GroupComponent;
