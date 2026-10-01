import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";


export const DATA = {
  name: "Ijaz Ul Haq",
  initials: "IH",
  url: "https://portfolio-alpha-navy-70.vercel.app/",
  location: "Shabqadar, Charsadda, Khyber Pakhtunkhwa, Pakistan",
  locationLink: "https://www.google.com/maps/place/Shabqadar",
  description:
    "Full-Stack Next.js Developer building with React, Next.js, Prisma & PostgreSQL — currently leveling up in Python and AI engineering.",
  summary:
    "I'm a BS Computer Science student and full-stack web developer, skilled in everything I've built and shipped so far — [React](https://react.dev), [Next.js](https://nextjs.org), [Prisma](https://www.prisma.io), and [PostgreSQL](https://www.postgresql.org). I enjoy taking a project from an idea to a working, deployed product, like my [Final Year Project](/#projects), an e-commerce platform, and a few other apps below. Right now I'm expanding into Python and AI engineering, working toward becoming a Full-Stack AI Engineer.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma" },
    { name: "Tailwind CSS" },
    { name: "Python (learning)", icon: Python },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "pz199720@gmail.com",
    tel: "+92 328 7436450",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ijaz-ul-haq-web",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ijaz-ul-haq-663abb43b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pz199720@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [] as {
    company: string;
    title: string;
    logoUrl: string;
    start: string;
    end?: string;
    description: string;
}[],

  education: [
    {
      school: "Bacha Khan University, Charsadda",
      href: "https://bkuc.edu.pk",
      degree: "BS Computer Science (Result Awaited)",
      logoUrl: "/bachalogo.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Islamia College Shabqadar",
      href: "#",
      degree: "FSc Computer Science — A Grade",
      logoUrl: "/islamialogoo.jpeg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Islamia College Shabqadar",
      href: "#",
      degree: "Diploma in Information Technology (DIT)",
      logoUrl: "/navttc.jpg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Islamia College Shabqadar",
      href: "#",
      degree: "Graphic Design Certificate",
      logoUrl: "/gd.jpg",
      start: "2025",
      end: "2025",
    },
  ],

  projects: [
    {
      title: "ShopEasy",
      href: "https://shopeasy-app-eta.vercel.app/",
      dates: "Final Year Project",
      active: true,
      description:
        "A full-stack e-commerce platform built from scratch as my Final Year Project. Includes JWT authentication, an admin panel, product reviews, a wishlist, JazzCash/EasyPaisa payment integration, Cloudinary image uploads, email notifications, and a Recharts analytics dashboard. Deployed on Vercel with a PostgreSQL (Neon) database.",
      technologies: [
        "Next.js",
        "React",
        "PostgreSQL",
        "JWT Auth",
        "Cloudinary",
        "Recharts",
      ],
      links: [
        {
          type: "Website",
          href: "https://shopeasy-app-eta.vercel.app/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/ijaz-ul-haq-web/ShopEasy-ecommerce-app",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/sEss.png",
      video: "",
    },
    {
      title: "Realtime Chat App",
      href: "https://realtime-chat-app-eight-gamma.vercel.app/login",
      dates: "Personal Project",
      active: true,
      description:
        "A real-time messaging application with instant delivery powered by Socket.io, a Next.js/React frontend, and a PostgreSQL database.",
      technologies: ["Next.js", "React", "Socket.io", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://realtime-chat-app-eight-gamma.vercel.app/login",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/ijaz-ul-haq-web/Realtime-chat-app",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/ca.png",
      video: "",
    },
    {
      title: "Job-Platform",
      href: "https://job-platform-drab-eight.vercel.app/",
      dates: "Personal Project",
      active: true,
      description:
        "JobSphere is an AI-powered job and career platform built with Next.js, TypeScript, PostgreSQL, and Prisma. Candidates can build profiles and resumes (with AI analysis and PDF export), search and apply for jobs, and practice interviews with AI-generated feedback. Recruiters post jobs and manage applicants, while admins oversee users, jobs, and reports across the platform.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Claude API"],
      links: [
        {
          type: "Website",
          href: "https://job-platform-drab-eight.vercel.app/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/ijaz-ul-haq-web/job-platform",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "/jobP.png",
      video: "",
    },
    {
      title: "Todo List",
      href: "https://todo-list-ijaz.vercel.app",
      dates: "Personal Project",
      active: true,
      description:
        "A minimal, fast task manager for daily to-dos — add, edit, complete, and delete tasks, with data persisted in a PostgreSQL database.",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://todo-list-ijaz.vercel.app",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/ijaz-ul-haq-web/todo-list-app",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TaskFlow",
      href: "https://taskflow-ijaz.vercel.app",
      dates: "In Progress",
      active: true,
      description:
        "A Kanban-style task management app built while learning full-stack + Python backend development from the ground up — Next.js frontend, Python/FastAPI backend, and a PostgreSQL database.",
      technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://taskflow-ijaz.vercel.app",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/ijaz-ul-haq-web/taskflow",
          icon: <Icons.github className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
