import Heading from "@/app/components/Heading/Heading";
import InfoItem from "@/app/components/InfoItem/InfoItem";
import Profile from "@/app/components/Profile/Profile";

import emailIcon from "@/public/icons/email.svg";
import phoneIcon from "@/public/icons/phone.svg";
import locationIcon from "@/public/icons/location.svg";
import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import ageIcon from "@/public/icons/age.svg";

export default function Home() {
  return (
    <main className="flex flex-col h-full bg-white">
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
            my efforts to learning how to code professionally. Man, it's been so
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
                linkUrl="https://www.linkedin.com/in/kauly-bohm-219b9715a/"
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
        </section>
      </div>
    </main>
  );
}
