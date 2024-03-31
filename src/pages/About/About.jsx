/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "HTML, CSS, TAILWIND, BOOTSTRAP, JAVASCRIPT and REACT.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          My name is Baptist, and I've been immersed in the world of React for
          the past three years. While my journey with React began earlier, it
          wasn't until March 2024 that I decided to take my skills to the next
          level and pursue React professionally.
        </p>

        <p>
          Currently, I'm a student at Ignatius Ajuru University in Port
          Harcourt, River State, Nigeria, where I'm in the final stages of my
          education. At 21 years old, I'm eager to apply my knowledge and skills
          to real-world projects as I transition from academia to the
          professional sphere.
        </p>
        <p>
          My academic journey began at Intellectual Giants Christian Academy,
          where I completed my secondary education in 2018. Following that, I
          gained admission to Ignatius Ajuru University in 2019, where I delved
          deeper into the world of web development.
        </p>
        <p>
          In 2022, I had the opportunity to participate in two notable
          competitions that further fueled my passion for technology. Firstly, I
          took part in the 2022 State Hackathon, where I showcased my skills and
          secured second place. Additionally, I participated in my university's
          Developers Challenge and was honored to receive the title of Best
          Developer of the Year.
        </p>
        <p>
          Furthermore, I had the privilege of completing my industrial training
          at Abia Tech Hub, where I honed my skills as a frontend developer
          while working on various projects. This experience allowed me to gain
          practical insights into the industry and further refine my expertise.
        </p>
        <p>
          Looking ahead, I'm excited to broaden my skill set by diving into the
          MERN stack (MongoDB, Express, React, Node.js) and exploring the
          fascinating field of artificial intelligence. My ultimate goal is to
          become a proficient AI developer, leveraging cutting-edge technologies
          to create innovative solutions that make a positive impact on society.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I Do</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
