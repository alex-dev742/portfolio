"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:alexvdberg010109@gmail.com">
          alexvdberg010109@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="flex flex-col mt-10">
        <input
          placeholder="Your email"
          className="px-4 border rounded-lg borderBlack h-14"
          type="email"
        />
        <textarea
          placeholder="Your message"
          className="p-4 my-3 border rounded-lg h-52 borderBlack"
        />
        <button
          className="group flex gap-2 items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.section>
  );
}
