import { useMemo } from "react";
import styles from "./GetForFreeButtons.module.css";

const GetForFreeButtons = ({
  price,
  propColor,
  propBackgroundColor,
  propColor1,
}) => {
  const priceStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const spacerStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const monthlyStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={styles.getForFreeButtons}>
      <b className={styles.price} style={priceStyle}>
        {price}
      </b>
      <div className={styles.footerLogoDefault}>
        <div className={styles.productFeaturesIntegrations}>
          <div className={styles.companyAboutBlog}>
            <div className={styles.spacer} style={spacerStyle} />
          </div>
          <b className={styles.monthly} style={monthlyStyle}>
            /monthly
          </b>
        </div>
      </div>
    </div>
  );
};

export default GetForFreeButtons;
