import styles from "./EffortlesslyTurn.module.css";

const EffortlesslyTurn = () => {
  return (
    <div className={styles.effortlesslyTurn}>
      <div className={styles.productFeatures}>
        <div className={styles.integrationsUpdates}>
          <div className={styles.testimonial}>
            <div className={styles.asASeasoned}>
              As a seasoned designer always on the lookout for innovative tools,
              Framer.com instantly grabbed my attention.
            </div>
            <div className={styles.blogCareers}>
              <img
                className={styles.manifestoPressIcon}
                loading="lazy"
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className={styles.resourcesExamples}>
                <div className={styles.alexRivera}>Alex Rivera</div>
                <div className={styles.jamietechguru00}>@jamietechguru00</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonial1}>
            <div
              className={styles.asASeasoned1}
            >{`Our team’s productivity has skyrocketed since we started using this tool. `}</div>
            <div className={styles.testimonialFrame}>
              <img
                className={styles.testimonialFrameIcon}
                loading="lazy"
                alt=""
                src="/ellipse-1-1@2x.png"
              />
              <div className={styles.testimonialFrame1}>
                <div className={styles.alexRivera1}>Josh Smith</div>
                <div className={styles.jamietechguru001}>@jjsmith</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.integrationsUpdates1}>
          <div className={styles.testimonial2}>
            <div className={styles.asASeasoned2}>
              I was amazed at how quickly we were able to integrate this app
              into our workflow.
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/ellipse-1-2@2x.png"
              />
              <div className={styles.alexRiveraParent}>
                <div className={styles.alexRivera2}>Casey Jordan</div>
                <div className={styles.jamietechguru002}>@caseyj</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonial3}>
            <div className={styles.asASeasoned3}>
              Planning and executing events has never been easier. This app
              helps me keep track of all the moving parts, ensuring nothing
              slips through the cracks.
            </div>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/ellipse-1-3@2x.png"
              />
              <div className={styles.alexRiveraGroup}>
                <div className={styles.alexRivera3}>Taylor Kim</div>
                <div className={styles.jamietechguru003}>@taylorkimm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialFrame2}>
        <div className={styles.testimonial4}>
          <div
            className={styles.asASeasoned4}
          >{`Adopting this app for our team has streamlined our project management and improved communication across the board. `}</div>
          <div className={styles.alexRiveraJamieTechguru}>
            <img
              className={styles.alexRiveraJamieTechguru1}
              loading="lazy"
              alt=""
              src="/ellipse-1-4@2x.png"
            />
            <div className={styles.alexRiveraJamieTechguru2}>
              <div className={styles.alexRivera4}>Jordan Patels</div>
              <div className={styles.jamietechguru004}>@jpatelsdesign</div>
            </div>
          </div>
        </div>
        <div className={styles.testimonial5}>
          <div className={styles.asASeasoned5}>
            With this app, we can easily assign tasks, track progress, and
            manage documents all in one place.
          </div>
          <div className={styles.ellipseContainer}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/ellipse-1-5@2x.png"
            />
            <div className={styles.alexRiveraContainer}>
              <div className={styles.alexRivera5}>Sam Dawson</div>
              <div className={styles.jamietechguru005}>@dawsontechtips</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortlesslyTurn;
