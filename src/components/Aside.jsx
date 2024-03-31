import {
  GiCalendar,
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/images/my-picture.jpg"}
            alt="Ezimah Baptist Ikenna."
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Ezimah Baptist.
          </h1>

          <p className="title">React Developer</p>
        </div>

        {/* <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button> */}
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:baptistikenna@gmail.com" className="contact-link">
                baptistikenna@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+2349011078726" className="contact-link">
                +234 (90) 110-78726
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">April 18, 2002</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Umuahia, Abia State, Nigeria</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://x.com/BaptistIkenna?t=_YlAqFc5FoM9k0ppUJ0CxQ&s=09"
              className="social-link"
            >
              <ion-icon name="logo-twitter">
                <FaTwitter />
              </ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/Baptist20" className="social-link">
              <ion-icon name="logo-github">
                <FaGithub />
              </ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/baptist-ezimah-697803254/"
              className="social-link"
            >
              <ion-icon name="logo-linkedIn">
                <FaLinkedinIn />
              </ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
