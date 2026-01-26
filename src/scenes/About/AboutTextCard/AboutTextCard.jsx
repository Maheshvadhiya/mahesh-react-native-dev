import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'center' }}>
        Hi everyone, I’m{' '}
        <span className={s.purple}>Mahesh Vadhiya</span>
        <br />A{' '}
        <span className={s.purple}>React Native Developer</span> based
        in <span className={s.purple}>Ahmedabad, Gujarat</span>.
        <br />
        <br />I have{' '}
        <span className={s.purple}>
          2.5+ years of hands-on experience
        </span>{' '}
        working at{' '}
        <a className={s.purple} href='https://www.droptechnolab.com/' target='_blank'>
          DropTechnolab Private Limited
        </a>
        , building scalable and user-friendly mobile applications
        using React Native.
        <br />
        <br />
        I’ve worked on multiple{' '}
        <span className={s.purple}>production-level projects</span>,
        often handling{' '}
        <span className={s.purple}>end-to-end development</span>,
        including UI implementation, API integration, state
        management, authentication, and performance optimization.
        <br />
        <br />
        Technologies I work with include React Native (CLI), Firebase
        (Realtime Database), REST APIs, Redux, Zustand, and modern
        JavaScript.
        <br />
        <br />
        Outside of coding, here are a few things I enjoy:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>🎮 Playing games</li>
        <li className={s.aboutActivity}>🎤 Singing</li>
        <li className={s.aboutActivity}>
          🔍 Learning & exploring new technologies
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
