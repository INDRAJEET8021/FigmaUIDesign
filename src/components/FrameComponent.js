import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.desktopInner}>
      <div className={styles.frameParentEllipseParent}>
        <div className={styles.frameParentEllipse}>
          <div className={styles.tag}>
            <div className={styles.version20Is}>Everything you need</div>
          </div>
          <div className={styles.testimonialjamietechguru}>
            <h1 className={styles.h2}>Streamlined for easy management</h1>
            <h3 className={styles.body}>
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </h3>
          </div>
        </div>
        <div className={styles.footerSsocialscardParent}>
          <div className={styles.footerSsocialscard}>
            <img
              className={styles.cubeHelix1Icon}
              loading="lazy"
              alt=""
              src="/cubehelix-1@2x.png"
            />
            <div className={styles.rectangleEmojiStarParent}>
              <h2 className={styles.h21}>Integration ecosystem</h2>
              <div className={styles.body1}>
                <p className={styles.enhanceYourProductivity}>
                  Enhance your productivity by connecting  with your favorite
                  tools, keeping all your
                </p>
                <p className={styles.essentialsInOne}>
                  {" "}
                  essentials in one place.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.footerSsocialscard1}>
            <img
              className={styles.cubeHelix1Icon1}
              loading="lazy"
              alt=""
              src="/cubehelix-1-1@2x.png"
            />
            <div className={styles.h2Parent}>
              <h2 className={styles.h22}>Goal setting and tracking</h2>
              <div className={styles.body2}>
                Define and track your goals, breaking down objectives into
                achievable tasks to keep your targets in sight.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
