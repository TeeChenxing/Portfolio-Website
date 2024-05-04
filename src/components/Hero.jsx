import { motion } from "framer-motion";

import { styles } from "../styles";
import { resume } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText}`} data-value="Hi, I'm Tee">
            <span className="light-purple-text-gradient">Hi, I'm </span>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-blue-300"
            >
              Tee
            </a>
            <span className="light-purple-text-gradient">!</span>
          </h1>
          <p className={"${styles.heroSubText} mt-2 text-white-100"}>
            Seeking opportunities in software development 😊
          </p>
        </div>
      </div>

      {/* Down button */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="scroll down">
          <div className="w-[35px] h-[64px] rounded-1xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-1xl bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
