import scss from "./Welcome.module.scss";
import logo1 from "../../../image/logo1.png";
import logo3 from "../../../image/logo3.svg";
import logo4 from '../../../image/logo4.svg'
import logo5 from "../../../image/logo5.png"
import logo6 from"../../../image/logo6.png"
import logo7 from "../../../image/logo7.png"
import logo8 from "../../../image/logo8.png"


const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.title}>Landing template for </h1>
          <p className={scss.text}>
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className={scss.buttons}>
            <button className={scss.start_free_trial}>Start free trial</button>
            <button className={scss.learn_more}>Learn more</button>
          </div>
          <div className={scss.logo_img}>
            <img src={logo1} alt="" />
          </div>
          <h1 className={scss.title1}>
            The majority our customers do not understand their workflows.
          </h1>
          <p className={scss.text1}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className={scss.instant}>
            <div className={scss.featur}>
              <img className={scss.img_logo} src={logo3} alt="" />
              <h3 className={scss.title_h3}>Instant Features</h3>
              <p className={scss.text2 }>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
            </div>
            <div className={scss.featur}>
              <img className={scss.img_logo} src={logo4} alt="" />
              <h3 className={scss.title_h3}>Instant Features</h3>
              <p className={scss.text2 }>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
            </div>
            <div className={scss.featur}>
              <img className={scss.img_logo} src={logo5} alt="" />
              <h3 className={scss.title_h3}>Instant Features</h3>
              <p className={scss.text2 }>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
            </div>
            
          </div>
          <div className={scss.instant1}>
            <div className={scss.featur}>
              <img className={scss.img_logo} src={logo6} alt="" />
              <h3 className={scss.title_h3}>Instant Features</h3>
              <p className={scss.text2 }>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
            </div>
            <div className={scss.featur}>
              <img className={scss.img_logo} src={logo7} alt="" />
              <h3 className={scss.title_h3}>Instant Features</h3>
              <p className={scss.text2 }>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
            </div>
            <div className={scss.featur}>
              <img className={scss.img_logo} src={logo8} alt="" />
              <h3 className={scss.title_h3}>Instant Features</h3>
              <p className={scss.text2 }>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
