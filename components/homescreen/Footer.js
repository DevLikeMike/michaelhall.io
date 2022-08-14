import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaList,
  FaCodepen,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex jc-c col'>
      <section className='footer__socials flex jc-c'>
        <Link href='/'>
          <a className='socials__link round flex flex-center' title='Github'>
            <FaGithub />
          </a>
        </Link>
        <Link href='/'>
          <a className='socials__link round flex flex-center' title='LinkedIn'>
            <FaLinkedin />
          </a>
        </Link>
        <Link href='/'>
          <a className='socials__link round flex flex-center' title='Instagram'>
            <FaInstagram />
          </a>
        </Link>
        <Link href='/'>
          <a className='socials__link round flex flex-center' title='Blog'>
            <FaList />
          </a>
        </Link>
        <Link href='/'>
          <a className='socials__link round flex flex-center' title='CodePen'>
            <FaCodepen />
          </a>
        </Link>
        <Link href='/'>
          <a className='socials__link round flex flex-center' title='Email'>
            <FaEnvelope />
          </a>
        </Link>
      </section>
      <section className='footer__news flex jc-c'>
        <p className='flex flex-center'>Sign up for my newsletter</p>
        <input type='email' name='newsletter' id='newsletter' />
        <button>Subscribe</button>
      </section>
      <section className='footer__text text-center'>
        <p>
          Thank you for visiting. If you would like to visit any of my other
          content follow the links below.
        </p>
      </section>
      <div className='footer__links_container flex jc-c ai-fs'>
        <section className='footer__links flex jc-c col'>
          <h3>Links</h3>
          <Link href='/blog'>
            <a className='text-center'>Blog</a>
          </Link>
          <Link
            href='https://instagram.com/devlikemike'
            target='_blank'
            rel='noreferrer'
          >
            <a className='text-center' target='_blank' rel='noreferrer'>
              Instagram
            </a>
          </Link>
          <Link href='https://github.com/devlikemike'>
            <a className='text-center' target='_blank' rel='noreferrer'>
              Github
            </a>
          </Link>
        </section>
        <section className='footer__links flex jc-c col'>
          <h3>Recent Sites</h3>
          <Link href='https://LendingHandcleaners.com'>
            <a className='text-center' target='_blank' rel='noreferrer'>
              Lending Hand Cleaners
            </a>
          </Link>
          <Link href='https://caseyhalllaw.com/'>
            <a className='text-center' target='_blank' rel='noreferrer'>
              Casey Hall Law
            </a>
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
