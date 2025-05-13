import Image from "next/image";
import HeroImage from "@/app/assets/images/hero-img.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section px-6">
      <div className=" md:basis-1/2 ">
        <p className="text-4xl lg:text-6xl font-secondary">
          Hi, I am <span className="text-primary">Z</span>oAlfakar
        </p>
        <p className="mt-3 leading-7">
          A detail-oriented front-end developer with 2 years of experience
          crafting responsive and user-focused web interfaces. I began with
          freelance projects and quickly grew into a professional role building
          React applications with TypeScript. I’m comfortable working in
          collaborative, Agile teams and always eager to learn and contribute to
          meaningful digital products.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            href={"/#projects"}
            className="flex item-center justify-center bg-primary  p mt-10 max-w-fit px-6 py-3  border-2 border-transparent hover:bg-transparent hover:border-primary"
          >
            See Projects
          </Link>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 mt-10 md:mt-0 flex justify-center md:justify-end ">
        <Image alt="hero-img " src={HeroImage} />
      </div>
    </section>
  );
}
