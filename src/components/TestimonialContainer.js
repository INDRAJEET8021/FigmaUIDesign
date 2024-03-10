import styles from "./TestimonialContainer.module.css";

const TestimonialContainer = () => {
  return (
    <section className={styles.testimonialContainer}>
      <div className={styles.bar}>
        <div className={styles.ellipse}>
          <div className={styles.thisPageIs}>
            This page is included in a free SaaS Website Kit.
          </div>
          <div className={styles.jamietechguru}>
            <div className={styles.viewTheComplete}>View the complete Kit</div>
            <img
              className={styles.icons}
              loading="lazy"
              alt=""
              src="/icons.svg"
            />
          </div>
        </div>
      </div>
      <header className={styles.navBarDesktop}>
        <div className={styles.logo}>
          <div className={styles.logodefault}>
            <div className={styles.signupButton} />
            <img
              className={styles.logosaasIcon}
              loading="lazy"
              alt=""
              src="/logosaas@2x.png"
            />
          </div>
          <div className={styles.madeBy}>made by</div>
          <img
            className={styles.blackHorizontal1Icon}
            loading="lazy"
            alt=""
            src="/blackhorizontal-1.svg"
          />
        </div>
        <div className={styles.stack}>
          <div className={styles.about}>About</div>
          <div className={styles.features}>Features</div>
          <div className={styles.customers}>Customers</div>
          <div className={styles.updates}>Updates</div>
          <div className={styles.help}>Help</div>
          <button className={styles.buttons}>
            <div className={styles.getForFree}>Get for free</div>
          </button>
        </div>
      </header>
    </section>
  );
};

export default TestimonialContainer;
