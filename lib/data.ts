import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { MdOutlineWarehouse } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Developer",
    location: "South Africa",
    description:
      "I'm am currently a developer working at Pchoice which is a small tech consulting firm providing tech solution to businesses. My stack includes React, Next.js, TypeScript, Tailwind, MySQL and Go.",
    icon: React.createElement(FaReact),
    date: "08/2023 - Present",
  },
  {
    title: "Tech Support Intern",
    location: "South Africa",
    description:
      "I worked as a Tech Support Intern at Mojo ICT during university recess. My main tasks included providing on and offsite tech support to clients, solving hardware and software related issues.",
    icon: React.createElement(BiSupport),
    date: "11/2020 - 03/2021",
  },
  {
    title: "Casual Worker",
    location: "South Africa",
    description:
      "I worked as a Casual Worker at Grit Procurement Solution, my main tasks included stock taking, packing and unpacking stock, and general warehouse duties.",
    icon: React.createElement(MdOutlineWarehouse),
    date: "11/2019 - 01/2020",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "MySQL",
  "Python",
  "Framer Motion",
  "Windows",
  "Linux",
  "MacOS",
] as const;
