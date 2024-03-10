import { useMemo } from "react";
import styles from "./BodyText.module.css";

const BodyText = ({
  icons,
  integrationEcosystem,
  trackYourProgressAndMotiv,
  yourEffortsEveryday,
  propAlignSelf,
}) => {
  const bodyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.bodyText}>
      <img className={styles.icons} loading="lazy" alt="" src={icons} />
      <b className={styles.integrationEcosystem}>{integrationEcosystem}</b>
      <div className={styles.emojistarShape}>
        <div className={styles.body} style={bodyStyle}>
          <p className={styles.trackYourProgress}>
            {trackYourProgressAndMotiv}
          </p>
          <p className={styles.yourEffortsEveryday}>{yourEffortsEveryday}</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.getForFree}>Learn more</div>
          <img
            className={styles.icons1}
            loading="lazy"
            alt=""
            src="/icons-3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyText;
