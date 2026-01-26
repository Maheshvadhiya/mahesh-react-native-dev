import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import s from './Footer.module.scss';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by Mahesh Vadhiya</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/Maheshvadhiya"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/maheshvadhiya47"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="mailto:maheshvadhiya47@gmail.com"
                className={s.socialIcon}
                aria-label="gmail"
              >
                <MdEmail />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mahesh-react-native-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
