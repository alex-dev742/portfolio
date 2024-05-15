"use client";

import React from "react";
import Image from "next/image";
import profilePicture from "../public/profilePicture.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profilePicture}
              alt="Alex Profile Picture"
              width="192"
              height="192"
              quality={95}
              priority={true}
              className="object-cover shadow-xl w-24 h-24 border-[0.35rem] border-white rounded-full"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Alex.</span> I'm a{" "}
        <span className="font-bold">Web-Developer developer</span>. I enjoy
        building <span className="italic">Websites & Web Apps</span>.
      </motion.h1>
    </section>
  );
}
