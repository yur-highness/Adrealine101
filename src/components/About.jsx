import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-xl uppercase md:text-[10px] text-white">
          Welcome to RACING
        </p>
        <AnimatedTitle
          title="Disc<b>o</b>ver the male <br /> rush towards <br /><b>a</b>drenaline"
          containerClass="mt-5 !text- text-center"
        />

        <div className="about-subtext text-gray-400">
          <p>Rev up your engines - the Racing Game of Games begins—your speed, now an epic racing experience!</p>
          <p className="text-gray-500">
          Get ready to shift your experience into high gear - join the ultimate racing event and witness the polygon shape transform into a rectangle as you speed through the finish line!
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/About.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;