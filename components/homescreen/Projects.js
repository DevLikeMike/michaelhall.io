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
            This site is a work in progress(as of July 14, 2021). This site is a
            static site built using NextJs, ReactJs, SCSS, Styled-Components,
            and is hosted using Vercel.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/lending-hand-cleaners'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              Github
            </a>
            <a
              href='https://lending-hand-cleaners.vercel.app/'
              target='_blank'
              rel='noreferrer'
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
            This site is a work in progress(as of May 4, 2021). This site is a
            static site built using NextJs, ReactJs, SCSS, and is hosted using
            Vercel.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/ch-law-next'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              Github
            </a>
            <a
              href='https://caseyhalllaw.com/'
              target='_blank'
              rel='noreferrer'
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
              alt='Landing Page Screen Shot'
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
              Github
            </a>
            <a
              href='https://ahbowtique-ecom.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
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
              alt='Landing Page Screen Shot'
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
              Github
            </a>
            <a
              href='https://gamerfacts-app.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
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
            href='https://devlikemike.github.io/quizup/'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/QuizUp_SS.png'
              alt='Landing Page Screen Shot'
              width={855}
              height={466}
              alt='QuizUp.png'
            />
          </a>
        </div>
        <div className='card__info flex col'>
          <h3>QuizUp</h3>
          <p>
            An online quiz application made for daily multiple choice quiz to
            give to multiple students at a time. In high-school, an application
            like this have helped many of my teacher give quizzes, and quickly
            grade them. This C-R-A features skeleton CSS and is deployed on
            github pages.
          </p>
          <div className='btn-container flex jc-fs'>
            <a
              href='https://github.com/DevLikeMike/quizup'
              target='_blank'
              rel='noreferrer'
              className='iconButton'
            >
              <FaGithub style={{ marginRight: "0.5em" }} />
              Github
            </a>
            <a
              href='https://devlikemike.github.io/quizup/'
              target='_blank'
              rel='noreferrer'
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
