import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Card({
  codeUrl,
  imageSrc,
  previewUrl,
  imageAlt,
  description,
}: {
  imageSrc: StaticImageData;
  imageAlt: string;
  previewUrl: string;
  codeUrl: string;
  description: string;
}) {
  return (
    <div className="group relative">
      <div className="duration-500 bg-primary-bg   w-11/12 h-11/12  group-hover:opacity-100 ease-in-out opacity-0 absolute top-1/2 start-1/2 -translate-1/2">
        <p className="py-5 text-center font-bold px-2">{description}</p>
        <div className="flex  justify-center  ">
          <Link
            target="_blank"
            href={previewUrl}
            className="flex item-center justify-center px-5 py-2 bg-blue-500 hover:bg-blue-600 me-5 font-bold"
          >
            Live
          </Link>
          <Link
            target="_blank"
            href={codeUrl}
            className="flex item-center justify-center px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
          >
            Code
          </Link>
        </div>
      </div>
      <Image src={imageSrc} alt={imageAlt} />
    </div>
  );
}
