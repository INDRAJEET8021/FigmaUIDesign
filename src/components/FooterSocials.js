import styles from "./FooterSocials.module.css";

const FooterSocials = ({ integrations, dedicatedAccountManager }) => {
  return (
    <div className={styles.footerSocials}>
      <div className={styles.iconsParent}>
        <img className={styles.icons} alt="" src="/icons-10.svg" />
        <div className={styles.frameTestimonial}>
          <div className={styles.integrations}>{integrations}</div>
        </div>
      </div>
      <div className={styles.iconsGroup}>
        <img className={styles.icons1} alt="" src="/icons-10.svg" />
        <div className={styles.dedicatedManager}>
          <div className={styles.dedicatedAccountManager}>
            {dedicatedAccountManager}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSocials;
