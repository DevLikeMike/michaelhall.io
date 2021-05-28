import React from "react";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__background'></div>
      <div className='about__introduction'>
        <h2>Hi, I'm Michael!</h2>
        <p>
          Hello, I am Michael, A freelance web developer from Eastern Tennessee
          currently living in Columbus, Ohio. I first started coding in college
          learning C++, but later found that I preferred to add to the web. I
          like to focus on Nextjs and have a lot of fun building websites. I'm
          self taught and very passionate. If I'm not coding, I'm likely at a
          museum, watching sports, or chasing my dog.
        </p>
      </div>
      <div className='about__skills flex ai-fe jc-fe col'>
        <h2>What Can I Do?</h2>
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
