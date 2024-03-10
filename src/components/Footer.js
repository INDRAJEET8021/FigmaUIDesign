import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerL}>
        <div className={styles.defaultLogo}>
          <div className={styles.frameWithLogo}>
            <div className={styles.logodefault}>
              <div className={styles.frameWithChildren} />
              <img
                className={styles.logosaasIcon}
                alt=""
                src="/logosaas-1@2x.png"
              />
            </div>
            <div className={styles.effortlesslyTurnYour}>
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </div>
          </div>
          <div className={styles.logoGroup}>
            <img className={styles.socialsIcon} alt="" src="/socials.svg" />
            <img className={styles.socialsIcon1} alt="" src="/socials-1.svg" />
            <img className={styles.socialsIcon2} alt="" src="/socials-2.svg" />
            <img className={styles.socialsIcon3} alt="" src="/socials-3.svg" />
            <img className={styles.socialsIcon4} alt="" src="/socials-4.svg" />
            <img className={styles.socialsIcon5} alt="" src="/socials-5.svg" />
          </div>
        </div>
        <div className={styles.productParent}>
          <div className={styles.product}>
            <b className={styles.product1}>Product</b>
            <div className={styles.features}>Features</div>
            <div className={styles.integrations}>Integrations</div>
            <div className={styles.updates}>Updates</div>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.pricing}>Pricing</div>
          </div>
          <div className={styles.company}>
            <b className={styles.company1}>Company</b>
            <div className={styles.about}>About</div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.manifesto}>Manifesto</div>
            <div className={styles.press}>Press</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.resources}>
            <b className={styles.resources1}>Resources</b>
            <div className={styles.examples}>Examples</div>
            <div className={styles.community}>Community</div>
            <div className={styles.guides}>Guides</div>
            <div className={styles.docs}>Docs</div>
          </div>
          <div className={styles.security}>
            <b className={styles.legal}>Legal</b>
            <div className={styles.privacy}>Privacy</div>
            <div className={styles.terms}>Terms</div>
            <div className={styles.security1}>Security</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
