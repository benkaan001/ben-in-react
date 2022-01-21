import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './GetToKnowMe.css';

const getToKnowMe = [
  {
    id: '101',
    order: 1,
    title: 'Hello and Welcome!',
    dates: 'Present',
    responsibilities: [
      'Thank you for stopping by! This is my first React Application! Signing up for a BootCamp at University of Texas has been an incredible life-changing experience.',
      'As a former perfectionist, who always found a way to graduate with a 4.0 GPA or get the Top Performer/Employee of the Year Award(s), accepting imperfectionism is one of the most challenging yet greatest things that programming has taught me. ',
      'I am a true adventurist, who lived and traveled all around the world. However, I am also boringly consistent with meeting deadlines, delivering on my promises, and making meaningful contributions to teamwork. ',
      'If you have time, please check out Part II and III to learn more about me! ',
    ],
    company: 'PART I',
  },
  {
    id: '102',
    order: 2,
    title: 'The Power of Consistency',
    dates: 'Past',
    responsibilities: [
      `I believe in hard work and consistency. Consistency is the key ingredient in one's success. Being consistent also requires a lot of perseverance. As a wellness coach, I remind my clients that what matters most is what you do when life does not seem to give you any opportunity to workout or prioritize your health goals.`,
      `My consistency has also something to do with the ancient musical instrument, Ney, that I self-taught how to play over a decade ago. Ney is from around 3,000 B.C. with a fascinating sound - it took me a few years to get a proper sound out of it despite my deliberate efforts. You can learn/hear more about it via the soundcloud link on the upper right corner of the page.`,
    ],
    company: 'PART II',
  },
  {
    id: '103',
    order: 3,
    title: 'Exciting Future',
    dates: 'Future',
    responsibilities: [
      `The possibilities in the web development are endless as programming is in the heart of everything in our modern lives.`,
      `The possiblity to make a meaninful contribution is what excites and motivates me the most!`,
      `I am very excited and ready to work with a team and make meaningful contributions while getting better at my job every day one line of code at a time.`,
      `Again, thank you for stopping by! Cheers! `,
    ],
    company: 'PART II',
  },
];

const GetToKnowMe = () => {
  const [jobs, setJobs] = useState(getToKnowMe);
  console.log(setJobs);
  const [value, setValue] = useState(0);

  const { company, dates, responsibilities, title } = jobs[value];
  console.log(company);

  return (
    <>
      <section className='getToKnowMe-section'>
        <div className='title'></div>
        <div className='words-center'>
          <div className='btn-container'>
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>

            <p className='job-date'>{dates}</p>
            {responsibilities.map((responsibility, index) => {
              return (
                <div className='job-desc' key={index}>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{responsibility}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default GetToKnowMe;
