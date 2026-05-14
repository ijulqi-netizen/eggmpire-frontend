import Contact from "@/components/sections/Contact";
import Contracts from "@/components/sections/Contracts";
import Conversion from "@/components/sections/Conversion";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Mission from "@/components/sections/Mission";
import Roadmap from "@/components/sections/Roadmap";
import Team from "@/components/sections/Team";
import TrustedBy from "@/components/sections/TrustedBy";
import { BLUR_DATA_URL } from "@/lib/blurDataUrl";
import Image from "next/image";
import Sosmed from "@/components/sections/sosmed";

export default function Home() {
  return (
    <>
      {/* Fixed background — locked to viewport, stays while scrolling */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/bg-1.webp"
          alt=""
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Hero />
      <Introduction />
      <Mission />
      <Sosmed />
      <Conversion />
      <TrustedBy />
      <Contracts />
      <Team />
      <Roadmap />
      <Contact />
    </>
  );
}
