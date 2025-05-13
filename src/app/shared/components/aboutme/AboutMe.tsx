import Image from "next/image";
import AboutImage from "@/app/assets/images/about-img.png";

export default function AboutMe() {
  return (
    <section id="about" className="section bg-secondary-row px-6">
      <div className="mt-16 md:mt-0 order-2 md:order-1 basis-full md:basis-1/2  flex justify-center md:justify-start ">
        <Image
          alt="about-me-image"
          className="max-w-full md:max-w-9/12 "
          src={AboutImage}
        />
      </div>
      <div className="order-1 md:order-2 md:basis-1/2 ">
        <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
          About Me
        </h1>
        <p className="mb-5">
          I'm a front-end developer with 2 years of experience working with
          modern web technologies. I began with small student and personal
          projects, then joined a professional team where I worked with React
          and TypeScript on real-world applications.
        </p>
        <p className="mb-5">
          I’ve contributed to UI features like blog editing (using TipTap),
          image upload and cropping, and collaborated with others using tools
          like Git, Postman, Figma, and Jira. I also had limited exposure to
          Next.js, where I dealt with basic concepts but haven’t yet worked with
          it beyond an introductory level.
        </p>
        <p>
          I'm comfortable working with libraries such as Material UI, Redux, and
          TanStack Query. I'm currently studying for a Master's in Web
          Technologies and continuously improving my front-end development
          skills through practice and learning.
        </p>
      </div>
    </section>
  );
}
