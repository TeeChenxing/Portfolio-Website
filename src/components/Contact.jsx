import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Check Incoming Emails details: https://dashboard.emailjs.com/admin/history
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tee",
          from_email: form.email,
          to_email: "teerareal74@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Error! If the problem persists, please email me at teerareal74@gmail.com"
          );
        }
      );
  };

  return (
    <div className="xl:mt-1 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 bg-opacity-60 p-8 rounded-2xl"
      >
        <p className={styles.contactSubText}>I don't bite so...</p>
        <h3 className={styles.contactHeadText}>
          Lets talk on&nbsp;
          <a
            className="underline"
            href="https://www.linkedin.com/in/teera74/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          !<br></br>
        </h3>
        <p className="text-secondary mt-5 uppercase">Or send a form :D</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Sir Isaac Newton"
              className="bg-tertiary py-2 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="i.newton@gmail.com"
              className="bg-tertiary py-2 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="10"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey Tee! Looking for a job? I gotchu!"
              className="bg-tertiary py-2 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs"
            />
          </label>
          <button
            id="form_button"
            type="submit"
            className="bg-tertiary py-2 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        id="earth"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
