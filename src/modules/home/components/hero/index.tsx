import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import Image from "next/image";
import logo from "/public/queens.png";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative flex justify-center items-center">
      {/* Adjusted padding here */}
      <div className="text-center px-32 py-0">
        <Image
          src={logo}
          alt="Queens Handicrafts"
          width={2000}
          height={300} // Ensure you specify both width and height for better control over aspect ratio
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
