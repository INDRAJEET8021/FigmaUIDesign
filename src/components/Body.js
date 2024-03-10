import styles from "./Body.module.css";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.testimonial}>
        <div className={styles.asASeasoned}>
          This app has completely transformed how I manage my projects and
          deadlines.
        </div>
        <div className={styles.buttonsGetForFreeIcons}>
          <img
            className={styles.logoGroupParent}
            loading="lazy"
            alt=""
            src="/ellipse-1-6@2x.png"
          />
          <div className={styles.headerFrame}>
            <div className={styles.alexRivera}>Morgan Lee</div>
            <div className={styles.jamietechguru00}>@morganleewhiz</div>
          </div>
        </div>
      </div>
      <div className={styles.signupFrame}>
        <div className={styles.testimonial1}>
          <div className={styles.asASeasoned1}>
            The customizability and integration capabilities of this app are
            top-notch.
          </div>
          <div className={styles.footerFrame}>
            <img
              className={styles.logoDefaultRectangle}
              loading="lazy"
              alt=""
              src="/ellipse-1-7@2x.png"
            />
            <div className={styles.productGroup}>
              <div className={styles.alexRivera1}>Riley Smith</div>
              <div className={styles.jamietechguru001}>@rileysmith1</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial2}>
        <div className={styles.asASeasoned2}>
          Its user-friendly interface and robust features support our diverse
          needs.
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="/ellipse-1-8@2x.png" />
          <div className={styles.alexRiveraParent}>
            <div className={styles.alexRivera2}>Casey Harper</div>
            <div className={styles.jamietechguru002}>@casey09</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
