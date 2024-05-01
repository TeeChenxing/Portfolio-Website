import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ComputersCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.4 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full purple-gray-gradient p-[3px] rounded-[20px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary bg-opacity-80 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="bg-tertiary bg-opacity-60 p-10 rounded-3xl md:w-[800px] w-full">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>A Bit About Me...</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          // className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          My name is Teera Tesharojanasup, though most people simply call me
          Tee. Currently, I am a student at Northeastern University, majoring in
          Data Science with a minor in Computer Science, set to graduate in
          December 2024. With a 🔥 passion for technology and design, I enjoy
          diving into various realms, from programming 💻 to crafting pixel art
          🎨.
          <br />
          <br />
          Beyond my love for technology and design, I harbor a keen interest in
          education 🧑‍🏫 and climate change 🌥️⛅🌤️☀️. Firmly believing in the
          transformative power of education, I see it as a catalyst for a more
          sustainable world.
          <br />
        </motion.p>
      </div>
      <div className="mt-5" id="pixelComputer">
        <ComputersCanvas />
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
