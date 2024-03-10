import BodyText from "./BodyText";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <section className={styles.product}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParentWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.testimonialContainer}>
              <div className={styles.tag}>
                <div className={styles.version20Is}>
                  Boost your productivity
                </div>
              </div>
            </div>
            <h1 className={styles.h2}>
              A more effective way to track progress
            </h1>
            <div className={styles.tagFrame}>
              <h3 className={styles.body}>
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website in just minutes with the set of
                free components for Framer.
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.wrapperProductImage}>
          <img
            className={styles.productImageIcon}
            alt=""
            src="/product-image@2x.png"
          />
        </div>
        <div className={styles.grid}>
          <BodyText
            icons="/icons-2.svg"
            integrationEcosystem="Integration ecosystem"
            trackYourProgressAndMotiv="Track your progress and motivate"
            yourEffortsEveryday="your efforts everyday."
          />
          <BodyText
            icons="/icons-4.svg"
            integrationEcosystem="Goal setting and tracking"
            trackYourProgressAndMotiv="Set and track goals with"
            yourEffortsEveryday="manageable task breakdowns."
            propAlignSelf="stretch"
          />
          <BodyText
            icons="/icons-6.svg"
            integrationEcosystem="Secure data encryption"
            trackYourProgressAndMotiv="Ensure your data’s safety with top-"
            yourEffortsEveryday="tier encryption."
            propAlignSelf="unset"
          />
          <BodyText
            icons="/icons-8.svg"
            integrationEcosystem="Customizable notifications"
            trackYourProgressAndMotiv="Get alerts on tasks and deadlines"
            yourEffortsEveryday="that matter most."
            propAlignSelf="stretch"
          />
        </div>
        <img className={styles.torus1Icon} alt="" src="/torus-1@2x.png" />
        <img
          className={styles.pyramid1Icon}
          loading="lazy"
          alt=""
          src="/pyramid-1@2x.png"
        />
      </div>
    </section>
  );
};

export default Product;
