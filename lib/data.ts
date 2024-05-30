import React from "react";

import { FaReact } from "react-icons/fa";
import nextjsBlogSite from "@/public/nextjs-blog-site.png";
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
    title: "Blog Site",
    description: "This is a basic full-stuck nextjs app.",
    tags: ["React", "Next.js", "Postgres", "Tailwind", "Prisma"],
    githubUrl: "https://github.com/alex-dev742/nextjs-blog-site",
    demoUrl: "https://nextjs-blog-site-sigma.vercel.app/",
    imageUrl: nextjsBlogSite,
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
  "Prisma",
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
