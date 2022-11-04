import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  // {
  //   id: 1,
  //   title: "CISSP",
  //   years: "2022",
  //   content: "Currently in process...",
  // },
  // {
  //   id: 2,
  //   title: "PenTest+",
  //   years: "2022",
  //   content: "Currently in process...",
  // },
  // {
  //   id: 3,
  //   title: "Security+",
  //   years: "2022",
  //   content: "Currently in process...",
  // },
  {
    id: 4,
    title: "Brooklyn College",
    years: "2013 - 2017",
    content: "B.S. in Computer Science",
  },
  // {
  //   id: 2,
  //   title: "Bachelor’s Degree",
  //   years: "2017 - 2013",
  //   content:
  //     "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  // },
  // {
  //   id: 3,
  //   title: "Honours Degree",
  //   years: "2013 - 2009",
  //   content:
  //     "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  // },
];

const experienceData = [
  {
    id: 1,
    title: "Information Technology Specialist 2 (Programmer)",
    years: "2022 - Current",
    content:
      "Devoted to providing securing user access to NYSIF systems. Responsible for the technical aspects of implementing and maintaining user identity and access management practices and controls. Assisting with planning, designing, and executing the automation of user account creation and system entitlements provisioning/de-provisioning lifecycle through NYSIF’s identity management solution, Omada. Assisting with documenting, defining, implementing, and maintaining effective and automated solutions to internal control processes and procedures using various tools, such as Omada, ServiceNow and Ansible. Facilitating and supporting security compliance through the monitoring and reporting of the various identity access management systems. Effectively addressing the demands and complexities of NYSIF’s identity and access management program.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    years: "2020 - 2021",
    content:
      "Create the client-side state handler using redux, modify the authentication scheme with express sessions and mongoDB, ensuring applications securely interact with multiple APIs and the database, managing the Linux server hosted on Digital Ocean. writing unit tests for both client and server-side code.",
  },
  {
    id: 3,
    title: "QA Enigneer & Web Developer",
    years: "2016 - 2020",
    content:
      "Created the logging and managing system for parking lot attendance of the company, managed the development of web applications, mobile apps, and hardware, oversaw creation of user guides and manuals for all electronic and software products, costumer returns dropped significantly during my tenure as the QA Engineer.",
  },
  {
    id: 4,
    title: "IT Technician",
    years: "2013 - 2016",
    content:
      "Provided solutions in networking, maintenance, programming, and computer systems. Maintained technology equipment inventory using custom software I wrote. Perform routine troubleshooting of the thin client server. Administrated the Google classroom accounts for the entire school. Problem solved and repaired hardware issues.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
            {experienceData.map((experience) => (
              <Timeline key={experience.id} education={experience} />
            ))}
            <span className="line"></span>
          </div>
        </div>
        <br />
        <div className="spacer d-md-none d-lg-none" data-height="30"></div>
        <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
          {educationData.map((education) => (
            <Timeline key={education.id} education={education} />
          ))}
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

{
  /* <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div> */
}
