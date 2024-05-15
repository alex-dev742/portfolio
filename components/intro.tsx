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
          <motion.div>
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

          <span className="absolute bottom-0 right-0 text-4xl">👋</span>
        </div>
      </div>
    </section>
  );
}
