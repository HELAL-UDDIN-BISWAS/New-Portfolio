import Image from "next/image";
import Banner from "./Pages/Banner/Page";
import AboutMe from "./Pages/AboutSection/page";
import Skills from "./Pages/MySkills/page";
import Section from "./Pages/Section/page";

export default function Home() {
  return (
    <div className="text-white">
      <Banner></Banner>
      <Section></Section>
      <div className="text-center my-6 items-center">
        <h2 className=" text-2xl">ABOUT ME
          <hr className="max-w-40 mx-auto text-center justify-center items-center"></hr>
        </h2>
      </div>
      <AboutMe className=""></AboutMe>
      <div className="text-center my-6 items-center">
        <h2 className=" text-2xl">MY SKILLS
          <hr className="max-w-40 mx-auto text-center justify-center items-center"></hr>
        </h2>
      </div>
      <Skills></Skills>
    </div>
  );
}
