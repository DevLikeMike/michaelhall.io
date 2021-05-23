import { FaGithub, FaLinkedin, FaCodepen, FaList } from "react-icons/fa";

const Landing = () => {
  return (
    <div className='landing flex flex-center' id='home'>
      <div className='landing__card flex jc-c ai-c col'>
        <h1 className='name'>Michael Hall | Web Developer</h1>
        <ul className='socials flex ai-c jc-c row'>
          <li>
            <a
              href='https://github.com/DevLikeMike'
              target='_blank'
              rel='noreferrer'
              className='flex ai-c jc-c col'
            >
              <FaGithub size='2em' />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/michael-hall-055a3a122/'
              target='_blank'
              rel='noreferrer'
              className='flex ai-c jc-c col'
            >
              <FaLinkedin size='2em' />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/mhall-project'
              target='_blank'
              rel='noreferrer'
              className='flex ai-c jc-c col'
            >
              <FaCodepen size='2em' />
              <span>Codepen</span>
            </a>
          </li>
          <li>
            <a href='#projects' className='flex ai-c jc-c col'>
              <FaList size='2em' />
              <span>Projects</span>
            </a>
          </li>
        </ul>
        <hr />
        <div className='intro flex jc-c ai-c text-center'>
          <p>
            A front-end developer focused in <span>React</span> and{" "}
            <span>NextJs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
