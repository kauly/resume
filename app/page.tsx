/* eslint-disable react/no-unescaped-entities */
import Heading from "@/app/components/Heading/Heading";
import InfoItem from "@/app/components/InfoItem/InfoItem";
import Profile from "@/app/components/Profile/Profile";
import ExperienceItem from "@/app/components/ExperienceItem/ExperienceItem";
import Navbar from "@/app/components/Navbar/Navbar";
import PrintButton from "@/app/components/PrintButton/PrintButton";
import Skill from "@/app/components/Skills/Skills";

import emailIcon from "@/public/icons/email.svg";
import phoneIcon from "@/public/icons/phone.svg";
import locationIcon from "@/public/icons/location.svg";
import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import ageIcon from "@/public/icons/age.svg";

export default function Home() {
  return (
    <main className="flex flex-col h-full bg-white pb-8">
      <Navbar left={<PrintButton />} />
      <div className="h-[400px] bg-beige flex justify-center items-center">
        <Profile />
      </div>
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <section id="about" className="pt-8">
          <Heading size="large" lined>
            About me
          </Heading>
          <p className="text-lg">
            I have been interested in coding for many years and I completed my
            first coding qualification more than 10 years ago. Although I have
            had a variety of jobs in the past, coding has always been my
            passion. Finally six years ago I was able to pursue coding on a
            fulltime basis and I started coding professionally. It's been so
            rewarding, I started as an intern and made my way up in the ranks
            quickly after that. The journey brings me opportunities to work with
            amazing people and make products used by hundreds of people
            worldwide. I am very grateful for that.
          </p>
          <p className="text-lg pt-2">
            I have been working as a full-stack developer, focusing on the JS
            world and all the cool things it brings to the table. I am always
            learning new things and am very excited to work with new
            technologies. Lately, I've been delving into AI, particularly NLP
            and LLMs, to improve user interactions with web applications. You
            will find a reliable coworker in me, always willing to help and
            learn from others, documenting my progress, and remaining realistic
            about deadlines and features. I hope you enjoyed reading this.
            Please feel free to contact me.
          </p>
        </section>
        <section id="info" className="pt-8">
          <Heading size="large" lined>
            Info
          </Heading>
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="flex flex-col space-y-4">
              <InfoItem
                title="Email:"
                value="kauly@hotmail.com"
                iconUrl={emailIcon}
              />
              <InfoItem
                title="Phone:"
                value="5548984538771"
                iconUrl={phoneIcon}
              />
              <InfoItem
                title="Location:"
                value="Brazil - São José, SC"
                iconUrl={locationIcon}
              />
            </div>
            <div className="flex flex-col pt-4 md:pt-0 space-y-4">
              <InfoItem
                title="Age:"
                value="36"
                iconUrl={ageIcon}
                hasCopy={false}
              />
              <InfoItem
                title="Linkedin:"
                value="https://www.linkedin.com/in/kauly-bohm-219b9715a"
                linkUrl="https://www.linkedin.com/in/kauly-bohm-219b9715a"
                iconUrl={linkedinIcon}
              />
              <InfoItem
                title="Github:"
                value="https://github.com/kauly"
                linkUrl="https://github.com/kauly"
                iconUrl={githubIcon}
              />
            </div>
          </div>
        </section>
        <section id="skills" className="pt-8">
          <Heading size="large" lined>
            Skills
          </Heading>
          <div className="inline-grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            <Skill name="Javascript" />
            <Skill name="Typescript" />
            <Skill name="React" />
            <Skill name="MUI" />
            <Skill name="Redux" />
            <Skill name="GraphQL" />
            <Skill name="Web Mapping" />
            <Skill name="NextJS" />
            <Skill name="NodeJS" />
            <Skill name="D3" />
            <Skill name="Rust" />
            <Skill name="SQL" />
            <Skill name="Docker" />
          </div>
        </section>
        <section id="experience" className="pt-8">
          <Heading size="large" lined>
            Experience
          </Heading>
          <div className="grid md:grid-cols-2 md:grid-flow-cols gap-4">
            <ExperienceItem
              company="Freenlancer"
              companyUrl=""
              date="Feb 2023"
              position="Full Stack Developer"
            >
              <p>
                This time, I took ownership from the ground up on a different
                vehicle fleet management software project. I had the freedom to
                select the libraries, opting for react-map-gl with MapLibre.
                These modern choices provided superior performance and extensive
                customization options. Additionally, I contributed to a
                challenging React Native project for a Human-Machine Interface
                (HMI). Here, hardware limitations and the requirement for native
                Java code to interact with external hardware presented unique
                obstacles.
              </p>
            </ExperienceItem>
            <ExperienceItem
              company="Sortium"
              companyUrl="https://www.linkedin.com/company/sortium/"
              date="Apr 2021 - Feb 2023"
              position="Full Stack Developer"
            >
              <p>
                Fullstack Developer, using React, NextJs, Hasura and Firebase.
                During this time I participated in the development of two NFT
                marketplaces. I also started learning Rust for game development
                using Bevy and WebAssembly. I spent most of my time on the
                frontend creating functionalities such as, new screens based on
                designs, integration with internal and external APIs like social
                login, payment gateways and the Discord API.
              </p>
            </ExperienceItem>
            <ExperienceItem
              company="Freelancer"
              companyUrl="https://starwars.fandom.com/wiki/Galactic_Empire"
              date="Mar 2020 - Apr 2021"
              position="Full Stack Developer"
            >
              <p>
                Freelancer, developing websites and web applications for small
                and medium-sized businesses. All work done with React. I spent
                most of this time working for the same client, developing a
                real-time chat application for customer service. The application
                was not just a chat, but had a whole management system for
                tickets, attendants, and companies. I was responsible for the
                frontend from start to finish. It was a very challenging job,
                involving chats with sockets for sending and receiving videos,
                audios, and files. We had clients with hundreds of tickets per
                day and this required a highly performant application.
              </p>
            </ExperienceItem>
            <ExperienceItem
              company="iTER"
              companyUrl="https://www.linkedin.com/company/iter-software-de-rastreamento-e-telemetria/"
              date="Aug 2019 - Mar 2020"
              position="Frontend Developer"
            >
              <p>
                I worked on maintenance and new features for the company's main
                product, a web application for vehicle fleet management. I also
                worked on the development of a new product, a system to track
                all things (IoT) and not just vehicles. Here I created
                functionalities such as maps, dashboards, report screens and
                forms. All done mainly with React, Leaflet and D3.
              </p>
            </ExperienceItem>
            <ExperienceItem
              company="tdsoft"
              companyUrl="https://www.linkedin.com/company/tdsmediatechnology/"
              date="Mar 2019 - Aug 2019"
              position="Frontend Developer"
            >
              <p>
                I worked on the team responsible for migrating the company's
                main product from Java to React and Next. I was responsible for
                creating the project skeleton and its first features and
                screens, such as authentication, API integration, and filter
                screens with tables.
              </p>
            </ExperienceItem>
            <ExperienceItem
              company="Gesec"
              companyUrl="https://www.linkedin.com/company/gesec-sistemas/"
              date="Sep 2018 - Feb 2019"
              position="Fullstack Developer"
            >
              <p>
                Development of a software used by security forces, it was a
                real-time map-based application to manage incidents. The
                following tools were used: React, Redux, Mapbox, SocketIO,
                MongoDB and Express. I created a lot of cool stuff here, with a
                highlight being a map that showed, in real time, the incidents
                and also the location of the agents. The backend sent the
                incident to the mobile app of the nearest agent. I did the front
                and back, the mobile app was done by someone else.
              </p>
            </ExperienceItem>
            <ExperienceItem
              company="GETMORE"
              companyUrl="https://www.linkedin.com/company/getmore/"
              date="May 2018 - Sep 2018"
              position="Intern - Backend Developer"
            >
              <p>
                Here I spent most of my time doing unit and integration tests
                for Express routes
              </p>
            </ExperienceItem>
          </div>
        </section>
      </div>
    </main>
  );
}
