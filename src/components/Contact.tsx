import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState<string | null>(null);

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showMessage("You need valid authorization to access this");
  };

  const handleTwitterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showMessage("Unavailable at the moment");
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:muhammedsalem992@gmail.com" data-cursor="disable">
                muhammedsalem992@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+2347065880854" data-cursor="disable">
                +234 706 588 0854
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Salem14-pro"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              onClick={handleGithubClick}
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/salemmuhammed/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              onClick={handleTwitterClick}
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/salem_.muhammed/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Muhammed Salem Olumide</span>
            </h2>
            <h5>
              <MdCopyright /> 2025 | Ondo State, Nigeria
            </h5>
          </div>
        </div>
      </div>
      {message && (
        <div className="bottom-message">
          {message}
        </div>
      )}
    </div>
  );
};

export default Contact;
