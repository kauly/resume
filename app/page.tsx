import Heading from "@/app/components/Heading/Heading";
import InfoItem from "@/app/components/InfoItem/InfoItem";
import Profile from "@/app/components/Profile/Profile";
import ExperienceItem from "@/app/components/ExperienceItem/ExperienceItem";
import Navbar from "@/app/components/Navbar/Navbar";
import PrintButton from "@/app/components/PrintButton/PrintButton";

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
            I had been playing around with coding for a long time, for instance,
            I have programming courses from more than 10 years ago. Life had
            other plans though and after high school, I took a variety of random
            jobs, military, factory line, TI guy, call center, etc. Finally,
            about five years ago, on a blessed day, I resolved to dedicate all
            my efforts to learning how to code professionally. It's been so
            rewarding, I started as an intern but things escalated quickly. The
            journey brings me opportunities to work with amazing people and make
            products used by hundreds of people worldwide. I am very grateful
            for that.
          </p>
          <p className="text-lg pt-2">
            Now a more technical part. I have been working as a full-stack
            developer, centered in the JS world and all the cool stuff that it
            brings to the table, React, NextJs, Hasura, Firebase, TS, that is,
            the usual letters soup. I am always learning new things and I am
            very excited to work with new technologies. One can easily confirm
            that by looking at my Github, for instance, my new thing is to make
            games with Rust. You will find a reliable coworker in me, always
            willing to help and learn from others, documenting my progress, and
            being realistic about deadlines and features. That is it for now, I
            hope you enjoyed reading this and please, feel free to contact me.
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
                value="35"
                iconUrl={ageIcon}
                hasCopy={false}
              />
              <InfoItem
                title="Linkedin:"
                value="linkedin.com/in/kauly-bohm-219b9715a"
                linkUrl="https://www.linkedin.com/in/kauly-bohm-219b9715a"
                iconUrl={linkedinIcon}
              />
              <InfoItem
                title="Github:"
                value="github.com/kauly"
                linkUrl="https://github.com/kauly"
                iconUrl={githubIcon}
              />
            </div>
          </div>
        </section>
        <section id="experience" className="pt-8">
          <Heading size="large" lined>
            Experience
          </Heading>
          <div className="grid md:grid-cols-2 md:grid-flow-cols gap-4">
            <ExperienceItem
              company="Sortium"
              companyUrl="https://www.linkedin.com/company/sortium/"
              date="Apr 2021 - Feb 2023"
              position="Full Stack Developer"
              description="I worked as a full-stack developer, using React, NextJs, Hasura, and Firebase. During this time I participate in the development of two NFT marketplaces. I also started to learn Rust and use Bevy to develop games."
            />
            <ExperienceItem
              company="Freelancer"
              companyUrl="https://starwars.fandom.com/wiki/Galactic_Empire"
              date="Mar 2020 - Apr 2021"
              position="Full Stack Developer"
              description="I worked as a freelancer, developing websites and web applications for small and medium businesses. All jobs with React. I spent most of this time working for the same client developing a real-time chat application for customer services. This chat is used by thousands of people daily in Brazil."
            />
            <ExperienceItem
              company="iTER"
              companyUrl="https://www.linkedin.com/company/iter-software-de-rastreamento-e-telemetria/"
              date="Aug 2019 - Mar 2020"
              position="Frontend Developer"
              description="Working doing maintenance and new features for the company's main product, a web application for fleet management. I also worked on the development of a new product, a system to track all things and not only vehicles. This company was sold to a big company in a million-dollar deal here in Brazil"
            />
            <ExperienceItem
              company="tdsoft"
              companyUrl="https://www.linkedin.com/company/tdsmediatechnology/"
              date="Mar 2019 - Aug 2019"
              position="Frontend Developer"
              description="Work on the team responsible for switching the company main product from Java to React and Next."
            />
            <ExperienceItem
              company="Gesec"
              companyUrl="https://www.linkedin.com/company/gesec-sistemas/"
              date="Sep 2018 - Feb 2019"
              position="Fullstack Developer"
              description="This company had software used by security forces, it was a map-based real-time application to manage occurrences. Mainly, React, Redux, Mapbox, MongoDB, and Express were used to develop this application."
            />
            <ExperienceItem
              company="GETMORE"
              companyUrl="https://www.linkedin.com/company/getmore/"
              date="May 2018 - Sep 2018"
              position="Intern - Backend Developer"
              description="Here I spent most of my time doing unit and integration tests for Express routes"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
