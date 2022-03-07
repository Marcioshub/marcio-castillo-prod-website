import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Marcio",
  avatarImage: "/images/marcio-circle.png", //"/images/avatar-2.svg",
  content:
    "I'm Marcio, a Software Engineer, QA Engineer, and Ethical Hacker based in New York City. I enjoy creating, testing, and sometimes breaking things that live on computers, devices and on the internet.",
  // "I am Marcio Castillo, Full-Stack Developer, QA Engineer, and Ethical Hacker from Queens, New York. I have experience in web site design and building and customization, also I am good at WordPress.",
};

const progressData = [
  {
    id: 1,
    title: "Front-End development",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Back-End Development",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Ethical Hacking",
    percantage: 90,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Completed CTFs",
    count: 50,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a
                      href="/downloads/marcio_castillo.docx"
                      download
                      className="btn btn-default"
                    >
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
