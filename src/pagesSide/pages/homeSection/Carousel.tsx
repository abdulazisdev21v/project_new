import scss from "./Carousel.module.scss";
import logo9 from "../../../image/logo9.png";
import { GoCheck, GoDotFill } from "react-icons/go";
import Avatar from "@mui/material/Avatar";
import logo11 from "../../../image/logo11.jpg";
import { SlShuffle } from "react-icons/sl";
import { RxVideo } from "react-icons/rx";
import { WiStars } from "react-icons/wi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaVolumeOff,
} from "react-icons/fa6";
import { RiLeafFill } from "react-icons/ri";
import pana1 from "../../../image/pana1.svg";
import pana2 from "../../../image/pana2.svg";
import pana5 from "../../../image/pana5.png";
import pana7 from "../../../image/pana7.jpg";

import {
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineMinus,
  HiOutlinePlus,
  HiTicket,
} from "react-icons/hi";
import { AvatarGroup, Box, IconButton } from "@mui/material";
import { BsApp } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
const Carousel = () => {
  return (
    <section className={scss.Carousel}>
      <div className="container">
        <div className={scss.content}>
          <img src={logo9} alt="" />
          <div className={scss.cont_text}>
            <button className={scss.btn_text}>Reach goals that matter</button>
            <h1 className={scss.title3}>One product, unlimited solutions</h1>
            <p className={scss.text3}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia <br /> deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>
          <div className={scss.speed}>
            <div className={scss.keep}>
              <h3 className={scss.more_text}>More speed. Less spend</h3>
              <h1 className={scss.title4}>Keep projects on schedule</h1>
              <p className={scss.text4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div style={{ padding: "15px 0" }}>
                <div className={scss.aute}>
                  <GoCheck className={scss.icon_true} />
                  <p className={scss.text5}>
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
                <div className={scss.aute}>
                  <GoCheck className={scss.icon_true} />
                  <p className={scss.text5}>
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>{" "}
                <div className={scss.aute}>
                  <GoCheck className={scss.icon_true} />
                  <p className={scss.text5}>
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>
            </div>
            <div className={scss.blok}>
              <img className={scss.img_with} src={logo9} alt="" />
              <div className={scss.boxs}>
                <div
                  className={scss.box}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Avatar alt="Remy Sharp" src={logo11} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1px",
                      color: "#fff",
                      fontSize: "10px",
                    }}
                  >
                    <HiOutlineChevronUp />
                    <HiOutlineChevronDown />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={scss.icon_s}>
                    <HiOutlineChevronLeft />
                    <HiOutlineChevronRight />
                  </div>
                  <IconButton>
                    <HiOutlineMinus className={scss.icon1} />
                    <HiOutlinePlus className={scss.icon2} />
                  </IconButton>
                </div>
              </div>

              <div className={scss.card}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <IconButton sx={{ color: "gray" }}>
                    <BsApp />
                  </IconButton>
                  <IconButton
                    sx={{ color: " rgb(54, 162, 105)", background: "#4a4e69" }}
                  >
                    <HiTicket />
                  </IconButton>
                  <p className={scss.text6}>page_description</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "10px",
                  }}
                >
                  <button className={scss.btn_wo}>4</button>
                  <AvatarGroup sx={{ fontSize: "10px" }}>
                    <Avatar src={logo11} alt="" />
                    <Avatar sx={{ marginRight: "10px" }} src={logo11} alt="" />
                  </AvatarGroup>
                </div>
              </div>

              <div className={scss.card}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <IconButton sx={{ color: "gray" }}>
                    <BsApp />
                  </IconButton>
                  <IconButton sx={{ color: "#d90429", background: "#4a4e69" }}>
                    <MdElectricBolt />
                  </IconButton>
                  <p className={scss.text6}>homepage_content;description</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "10px",
                  }}
                >
                  <div className={scss.card1}>
                    <GoDotFill className={scss.icon_5} />
                    <h4 className={scss.text10}>Mobile Design</h4>
                  </div>
                  <SlShuffle className={scss.icon_6} />
                </div>
              </div>
              <div className={scss.card}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <IconButton sx={{ color: "gray" }}>
                    <BsApp />
                  </IconButton>
                  <IconButton sx={{ color: "#3a86ff", background: "#4a4e69" }}>
                    <BiLogoTelegram />
                  </IconButton>
                  <p className={scss.text6}>about_us;description</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "10px",
                  }}
                >
                  <div className={scss.card2}>
                    <GoDotFill className={scss.icon_19} />
                    <h4 className={scss.text10}>Aliqua</h4>
                  </div>
                  <SlShuffle className={scss.icon_6} />
                </div>
              </div>

              <div className={scss.card}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <IconButton sx={{ color: "gray" }}>
                    <BsApp />
                  </IconButton>
                  <IconButton
                    sx={{ color: "rgb(246, 174, 85)", background: "#4a4e69" }}
                  >
                    <RxVideo />
                  </IconButton>
                  <p className={scss.text6}>design_task_assigned</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "10px",
                  }}
                >
                  <IconButton className={scss.btn_card}>
                    <WiStars />
                  </IconButton>
                  <AvatarGroup sx={{ fontSize: "10px" }}>
                    <Avatar src={logo11} alt="" />
                    <Avatar sx={{ marginRight: "10px" }} src={logo11} alt="" />
                  </AvatarGroup>
                </div>
              </div>

              <div className={scss.card}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <IconButton sx={{ color: "gray" }}>
                    <BsApp />
                  </IconButton>
                  <IconButton sx={{ color: "blue", background: "#4a4e69" }}>
                    <FaVolumeOff />
                  </IconButton>
                  <p className={scss.text6}>keep_projects_on_schedule</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "10px",
                  }}
                >
                  <IconButton className={scss.btn_card}>
                    <RiLeafFill />
                  </IconButton>
                  <AvatarGroup sx={{ fontSize: "10px" }}>
                    <Avatar src={logo11} alt="" />
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </div>

          <div className={scss.block}>
            <Box sx={{ fontSize: "50px" }}>
              <img src={pana1} alt="" />
            </Box>
            <div className={scss.speed}>
              <div className={scss.keep}>
                <h3 className={scss.more_text}>More speed. Less spend</h3>
                <h1 className={scss.title4}>Keep projects on schedule</h1>
                <p className={scss.text4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div style={{ padding: "15px 0" }}>
                  <div className={scss.aute}>
                    <GoCheck className={scss.icon_true} />
                    <p className={scss.text5}>
                      Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                  <div className={scss.aute}>
                    <GoCheck className={scss.icon_true} />
                    <p className={scss.text5}>
                      Duis aute irure dolor in reprehenderit
                    </p>
                  </div>{" "}
                  <div className={scss.aute}>
                    <GoCheck className={scss.icon_true} />
                    <p className={scss.text5}>
                      Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={scss.speed1}>
            <div className={scss.keep}>
              <h3 className={scss.more_text}>More speed. Less spend</h3>
              <h1 className={scss.title4}>Keep projects on schedule</h1>
              <p className={scss.text4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div style={{ padding: "15px 0" }}>
                <div className={scss.aute}>
                  <GoCheck className={scss.icon_true} />
                  <p className={scss.text5}>
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
                <div className={scss.aute}>
                  <GoCheck className={scss.icon_true} />
                  <p className={scss.text5}>
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>{" "}
                <div className={scss.aute}>
                  <GoCheck className={scss.icon_true} />
                  <p className={scss.text5}>
                    Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>
            </div>
            <Box sx={{ fontSize: "50px" }}>
              <img src={pana2} alt="" />
            </Box>
          </div>

          <div className={scss.dont}>
            <div className={scss.works}>
              <h1 className={scss.title10}>Don't take our word for it</h1>
              <p className={scss.text10}>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                semper quis lectus nulla at volutpat diam ut venenatis tellus—in
                ornare.
              </p>
            </div>
            <div className={scss.open}>
              <div className={scss.close}>
                <IconButton sx={{ display: "flex" }}>
                  <Avatar className={scss.img21} src={logo11} alt="" />
                  <img className={scss.img22} src={pana5} alt="" />
                </IconButton>
                <p className={scss.text_1}>
                  — Open PRO lets me quickly get the insights I care about so
                  that I can focus on my productive work. I've had Open PRO for
                  about 24 hours now and I honestly don't know how I functioned
                  without it before.
                </p>
                <div className={scss.border}>
                  <h4 className={scss.title22}>
                    Anastasia Dan / <span> UX Board</span>{" "}
                  </h4>
                </div>
              </div>
              <div className={scss.close}>
                <IconButton sx={{ display: "flex" }}>
                  <Avatar className={scss.img21} src={pana7} alt="" />
                  <img className={scss.img22} src={pana5} alt="" />
                </IconButton>
                <p className={scss.text_1}>
                  — Open PRO lets me quickly get the insights I care about so
                  that I can focus on my productive work. I've had Open PRO for
                  about 24 hours now and I honestly don't know how I functioned
                  without it before.
                </p>
                <div className={scss.border}>
                  <h4 className={scss.title22}>
                    Roman Leval/ <span> AppName</span>{" "}
                  </h4>
                </div>
              </div>
              <div className={scss.close}>
                <IconButton sx={{ display: "flex" }}>
                  <Avatar className={scss.img21} src={logo11} alt="" />
                  <img className={scss.img22} src={pana5} alt="" />
                </IconButton>
                <p className={scss.text_1}>
                  — Open PRO lets me quickly get the insights I care about so
                  that I can focus on my productive work. I've had Open PRO for
                  about 24 hours now and I honestly don't know how I functioned
                  without it before.
                </p>
                <div className={scss.border}>
                  <h4 className={scss.title22}>
                    Akex Sackett / <span> Reform layout</span>{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className={scss.loop}>
              <div className={scss.join}>
                <div className={scss.wraper}>
                  <h1 className={scss.stay}>Stay in the loop</h1>
                  <p className={scss.get}>
                    Join our newsletter to get top news before anyone else.
                  </p>
                </div>
                <div className={scss.carts}>
                  <input
                    className={scss.input_btn}
                    type="text"
                    placeholder="Your mest email..."
                  />
                  <button className={scss.btn_sups}>Subscribe</button>
                </div>
              </div>
            </div>
            <div className={scss.lorem}>
              <div className={scss.product}>
                <p className={scss.print}>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <div>
                  <p className={scss.made}>
                    Made by <span>Cruip.</span> All right reserved
                  </p>
                </div>
              </div>
              <div className={scss.lebel}>
                <h4 className={scss.text_h4}>Products</h4>
                <p>Web Studio</p>
                <p>DynamicBox Flex</p>
                <p>Programming Forms</p>
              </div>
              <div className={scss.lebel}>
                <h4 className={scss.text_h4}>Resources</h4>
                <p>Nostrud exercitation</p>
                <p>Visual mockups</p>
                <p>Nostrud exercitation</p>
                <p>Visual mockups</p>
                <p>Nostrud exercitation</p>
              </div>
              <div className={scss.lebel}>
                <h4 className={scss.text_h4}>Company</h4>
                <p>Consectetur adipiscing</p>
                <p>Labore et dolore</p>
                <p>Consectetur adipiscing</p>
                <p>Labore et dolore</p>
                <p>Consectetur adipiscing</p>
              </div>
            </div>
            <div className={scss.icons}>
              <IconButton sx={{display:"flex",gap:"20px"}}>
                <FaTwitter className={scss.iconn_btns} />
                <FaGithub className={scss.iconn_btns} />
                <FaFacebookF className={scss.iconn_btns} />
                <FaInstagram className={scss.iconn_btns} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
