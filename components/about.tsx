"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm a <strong>passionate web developer</strong> with a strong
        foundation in <em>Information Science</em>, which I studied for my
        undergraduate degree. Currently, I'm{" "}
        <strong>expanding my knowledge</strong> by pursuing an{" "}
        <em>Honours in Computing</em> at the University of South Africa. I'm{" "}
        <strong>thrilled</strong> to be working as a <em>Junior Developer</em>{" "}
        at Principal's Choice, where I get to apply my skills and learn from
        experienced professionals in the field. <strong>Problem-solving</strong>{" "}
        is one of my greatest joys, and I love tackling challenges head-on.
      </p>

      <p>
        My current <strong>tech stack</strong> includes{" "}
        <em>React, Go, MySQL, Tailwind, and TypeScript</em>. I'm always{" "}
        <strong>eager to stay up-to-date</strong> with the latest technologies
        and best practices in web development. Learning and upskilling myself is
        a constant pursuit, as I believe in{" "}
        <strong>continuously improving</strong> my craft. When I'm not coding,
        you can find me at the <em>gym</em>, focusing on my{" "}
        <strong>health and well-being</strong>. I understand the importance of
        maintaining a balance between work and personal life. Additionally, I
        enjoy <em>unwinding</em> by playing video games, which not only provide
        entertainment but also help me develop problem-solving skills and
        strategic thinking. I'm <strong>excited</strong> about the opportunities
        that lie ahead and look forward to contributing my skills and passion to
        create <em>exceptional web experiences</em>. Let's connect and discuss
        how we can work together to bring your ideas to life!
      </p>
    </motion.section>
  );
}
