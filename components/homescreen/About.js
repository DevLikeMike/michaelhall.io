import React from "react";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__background'></div>
      <div className='about__introduction'>
        <h1>Hi, I'm Michael!</h1>
        <p>
          Hello, I am Michael. A self taught developer from Eastern Tennessee
          currently living in Columbus, Ohio. My primary focus is on front-end
          development working with the MERN stack + Redux. I have spent the past
          year dedicating my free time to coding in effort to change careers
          from the plumbing industry into web development. For fun I enjoy going
          to museums, tampering with hardware, and all things sports!
        </p>
      </div>
      <div className='about__skills flex ai-fe jc-fe col'>
        <h2>Skills</h2>
        <div className='about__skills__container flex jc-fe'>
          <span className='skill'>HTML</span>
          <span className='skill'>CSS</span>
          <span className='skill'>Javascript</span>
          <span className='skill'>NextJs</span>
          <span className='skill'>ReactJs</span>
          <span className='skill'>NodeJs</span>
          <span className='skill'>MongoDB</span>
          <span className='skill'>REDUX</span>
          <span className='skill'>SASS</span>
          <span className='skill'>GIT</span>
        </div>
      </div>
    </section>
  );
};

export default About;
