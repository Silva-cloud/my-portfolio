import Card from "../card/Card";
import BankApp from "@/assets/images/projects/bankApp.png";
import RecruitmentApp from "@/assets/images/projects/recruitmentApp.png";
import TourApp from "@/assets/images/projects/tourApp.png";
import RoboApp from "@/assets/images/projects/robots.png";
import FaceRecogintion from "@/assets/images/projects/facerecognitionbrain.png";
import LandingPageStartUp from "@/assets/images/projects/StartUpLandingPage.png";

const projects = [
  {
    previewUrl: "https://recruitment-app123.netlify.app/",
    imageSrc: BankApp,
    imageAlt: "",
    description:
      "The user page of a bank account, Built using React,MUI, Chartjs.",
    codeUrl: "https://github.com/Silva-cloud/Mokup",
  },
  {
    previewUrl: "https://silva-cloud.github.io/recruitment-app/",
    imageSrc: RecruitmentApp,
    imageAlt: "",
    description:
      "The home page of a recruiting company, Built using React,Tailwindcss, Framer motion",
    codeUrl: "https://github.com/Silva-cloud/recruitment-app",
  },
  {
    previewUrl: "https://tourapp123.netlify.app/",
    imageSrc: TourApp,
    imageAlt: "",
    description:
      "A demo fullstack app that allows the CRUD operations, Built using React,RTK query, Express.js",
    codeUrl: "https://github.com/Silva-cloud/TourDemo",
  },
  {
    previewUrl: "https://silva-cloud.github.io/robots/",
    imageSrc: RoboApp,
    imageAlt: "",
    description:
      "Funny little app to search a robo friend, Built using React,Vanilla CSS, RoboHash API",
    codeUrl: "https://github.com/Silva-cloud/robots",
  },
  {
    previewUrl: "https://silva-cloud.github.io/facerecognition2023/",
    imageSrc: FaceRecogintion,
    imageAlt: "",
    description:
      "An app that uses image recognition API to detect the face in a given image. Built with Express.js, postgress, React",
    codeUrl: "https://github.com/Silva-cloud/facerecognition2023",
  },
  {
    previewUrl: "https://silva-cloud.github.io/room/",
    imageSrc: LandingPageStartUp,
    imageAlt: "",
    description: "Start up Landing page using Html and CSS",
    codeUrl: "https://github.com/Silva-cloud/room",
  },
];
export default function Projects() {
  return (
    <section id="projects" className=" px-6 py-24">
      <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
        Projects
      </h1>
      <p className="mb-5">
        These are some projects that were developed independently as part of my
        self-directed learning and skill development, outside of my professional
        work at my previous company:
      </p>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({ codeUrl, description, imageAlt, imageSrc, previewUrl }) => (
            <Card
              key={codeUrl + previewUrl}
              previewUrl={previewUrl}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              description={description}
              codeUrl={codeUrl}
            />
          )
        )}
      </div>
    </section>
  );
}
