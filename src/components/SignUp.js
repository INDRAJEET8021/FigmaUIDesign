import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <section className={styles.signUp}>
      <div className={styles.signUpInner}>
        <div className={styles.frameParent}>
          <div className={styles.h2Parent}>
            <h1 className={styles.h2}>Sign up for free today</h1>
            <div className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className={styles.buttonsParent}>
            <button className={styles.buttons}>
              <div className={styles.getForFree}>Get for free</div>
            </button>
            <div className={styles.buttons1}>
              <div className={styles.getForFree1}>Learn more</div>
              <img className={styles.icons} alt="" src="/icons-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.emojistar1Icon}
        loading="lazy"
        alt=""
        src="/emojistar-1@2x.png"
      />
      <img
        className={styles.helix21Icon}
        loading="lazy"
        alt=""
        src="/helix2-1@2x.png"
      />
    </section>
  );
};

export default SignUp;
