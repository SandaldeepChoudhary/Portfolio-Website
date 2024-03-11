"use client";

//import swipper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//componet
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Income Expense App",
    description:
      "Developed an intuitive app for tracking income and expenses, aiding financial management and planning.",
    link: "https://income-expense-app.onrender.com/",
    github: "https://github.com/SandaldeepChoudhary/Income-Expense-App",
  },

  {
    image: "/work/3.png",
    category: "javascript",
    name: "Profile Website",
    description:
      "Crafted a sleek, professional profile website to showcase skills, experience, and projects for self-promotion.",
    link: "https://sandaldeepchoudhary.github.io/Profile-Website/",
    github: "https://github.com/SandaldeepChoudhary/Profile-Website",
  },
  {
    image: "/work/4.png",
    category: "javascript",
    name: "Bubble Game",
    description:
      "Pop bubbles and beat levels in this addictive game, offering fun for all ages.",
    link: "https://sandaldeepchoudhary.github.io/Bubble-Game/",
    github: "https://github.com/SandaldeepChoudhary/Bubble-Game",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Portfolio Website",
    description:
      "Designed and developed a portfolio website to showcase skills, projects, and achievements professionally.",
    link: "/",
    github: "https://github.com/SandaldeepChoudhary/Portfolio-Website",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "User Authentication System",
    description:
      "Built a secure user authentication system for ensuring access control and data protection.",
    link: "/",
    github: "https://github.com/SandaldeepChoudhary/User-Authentication-System",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className="max-x-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8 xl:w-[400px]">
            Explore my projects showcasing web development skills in creating
            dynamic and responsive websites with modern designs and
            functionalities
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-10 top-0">
          <Swiper
            className=" h-[560px] xl:h-[520px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
