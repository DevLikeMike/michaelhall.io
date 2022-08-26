import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className='projects' id='projects'>
      <h2>Portfolio</h2>
      <div
        className='projects__card flex'
        data-aos='fade-left'
        data-aos-once='true'
        data-aos-duration='700'
      >
        <div className='card__img-container'>
          <a
            href='https://devlikemike.github.io/nextjs-ecommerce-frontend/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/Tshirt_SS.png'
              width={855}
              height={466}
              alt='Tech TeeShirt Company'
            />
          </a>
        </div>
        <div className='card__info flex col'>
          <h3>Tech TeeShirt Company</h3>
          <p>
            Tech TeeShirt Company is a mock ecommerce site designed to expand my
            knowledge of Nextjs and it's uses of server side rendereding and
            client side rendereding. It was designed in{" "}
            <span>
              <a href='figma.com'>Figma</a>
            </span>{" "}
            and later built using{" "}
            <span>
              <a href='nextjs.org'>Nextjs</a>
            </span>{" "}
            for the front-end and{" "}
            <span>
              <a href='strapi.io'>Strapi</a>
            </span>{" "}
            for the backend. For styling, I used a mixture of{" "}
            <span>
              <a href='styled-components.com'>Styled-Components</a>
            </span>{" "}
            and SCSS. Using Nextjs ensures I would have a fast site while being
            able to control the SEO of the site far better than vanilla React.
            Using Strapi as a CMS makes managing content very easy without
            sacrificing any speed or quality.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/nextjs-ecommerce-frontend'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              See The Code
            </a>
            <a
              href='https://nextjs-ecommerce-frontend-three.vercel.app/'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaExternalLinkAlt style={{ marginRight: "0.5em" }} />
              Try it!
            </a>
          </div>
        </div>
      </div>
      <div
        className='projects__card flex'
        data-aos='fade-right'
        data-aos-once='true'
        data-aos-duration='700'
      >
        <div className='card__img-container'>
          <a
            href='https://lending-hand-cleaners.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/lhc_SS.png'
              alt='LHC ScreenShot'
              width={855}
              height={466}
            />
          </a>
        </div>
        <div className='card__info flex col'>
          <h3>Lending Hand Cleaners</h3>
          <p>
            This site is my example of a brochure website. Designed using{" "}
            <span>
              <a href='figma.com'>Figma</a>
            </span>
            , developed using{" "}
            <span>
              <a href='nextjs.org'>Nextjs</a>
            </span>
            . This site is made to showcase the abilities of the client, how to
            contact my client, and the services they provide. An ideal site for
            a small business.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/lending-hand-cleaners'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              See The Code
            </a>
            <a
              href='https://lending-hand-cleaners.vercel.app/'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaExternalLinkAlt style={{ marginRight: "0.5em" }} />
              Try it!
            </a>
          </div>
        </div>
      </div>

      <div
        className='projects__card flex'
        data-aos='fade-left'
        data-aos-once='true'
        data-aos-duration='700'
      >
        <div className='card__img-container'>
          <a href='https://caseyhalllaw.com/' target='_blank' rel='noreferrer'>
            <Image
              src='/images/CHLaw_SS.png'
              width={855}
              height={466}
              alt='Landing Page Screen Shot'
            />
          </a>
        </div>
        <div className='card__info flex col'>
          <h3>Casey Hall Law</h3>
          <p>
            A personal injury lawyer website. I was responsible for copywrite,
            SEO, design, and development. This site is a static site built using
            NextJs, ReactJs, SCSS, and is hosted using Vercel.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/ch-law-next'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              See The Code
            </a>
            <a
              href='https://caseyhalllaw.com/'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaExternalLinkAlt style={{ marginRight: "0.5em" }} />
              Try it!
            </a>
          </div>
        </div>
      </div>
      <div
        className='projects__card flex'
        data-aos='fade-right'
        data-aos-once='true'
        data-aos-duration='700'
      >
        <div className='card__img-container'>
          <a
            href='https://ahbowtique-ecom.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/AHBowtique_SS.png'
              alt='AHBowtique'
              width={855}
              height={466}
            />
          </a>
        </div>
        <div className='card__info flex col'>
          <h3>
            AH<span className='ahbowtique'>Bowtique</span>
          </h3>
          <p>
            This ecommerce site is custom built using React and Redux. Styling
            features bootstrap and bootswatch for a quick base stying. The site
            is functional with paypal sandbox for testing so feel free to try
            out the cart, and look at the products.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/AHB'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              See The Code
            </a>
            <a
              href='https://ahbowtique-ecom.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaExternalLinkAlt style={{ marginRight: "0.5em" }} />
              Try it!
            </a>
          </div>
        </div>
      </div>
      <div
        className='projects__card flex'
        data-aos='fade-left'
        data-aos-once='true'
        data-aos-duration='700'
      >
        <div className='card__img-container'>
          <a
            href='https://gamerfacts-app.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/GamerFacts_SS.png'
              alt='GamerFacts_SS'
              width={855}
              height={466}
            />
          </a>
        </div>
        <div className='card__info flex col'>
          <h3>
            Gamer<span className='gamerfacts'>Facts</span>
          </h3>
          <p>
            A video game review site, equipped with full CRUD functionality, and
            admin functions for those select users. This site was also built
            using the MERN stack and redux. This layout was custom using
            flexbox/Grid along with vanilla CSS. It features a MongoDB-Atlas
            database, and uses Node for the backend.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/GF-2'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              See The Code
            </a>
            <a
              href='https://gamerfacts-app.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaExternalLinkAlt style={{ marginRight: "0.5em" }} />
              Try it!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
