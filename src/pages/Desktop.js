import TestimonialContainer from "../components/TestimonialContainer";
import GroupComponent from "../components/GroupComponent";
import LogoTicker from "../components/LogoTicker";
import Product from "../components/Product";
import FrameComponent from "../components/FrameComponent";
import FooterLogoParent from "../components/FooterLogoParent";
import EffortlesslyTurn from "../components/EffortlesslyTurn";
import Body from "../components/Body";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <TestimonialContainer />
      <GroupComponent />
      <LogoTicker />
      <Product />
      <FrameComponent />
      <FooterLogoParent />
      <section className={styles.frameTestimonialEllipse}>
        <div className={styles.rectangleShape}>
          <div className={styles.signup}>
            <div className={styles.tag}>
              <div className={styles.version20Is}>Testimonials</div>
            </div>
          </div>
          <h1 className={styles.h2}>What our users say</h1>
        </div>
      </section>
      <section className={styles.logoDefault}>
        <EffortlesslyTurn />
        <Body />
        <div className={styles.securityGroup} />
      </section>
      <SignUp />
      <Footer />
    </div>
  );
};

export default Desktop;
