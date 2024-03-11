"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
    image: "/work/3.png",
    category: "next js",
    name: "Portfolio Website",
    description:
      "Designed and developed a portfolio website to showcase skills, projects, and achievements professionally.",
    link: "https://sandaldeep.vercel.app/",
    github: "https://github.com/SandaldeepChoudhary/Portfolio-Website",
  },
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
    image: "/work/4.png",
    category: "javascript",
    name: "Profile Website",
    description:
      "Crafted a sleek, professional profile website to showcase skills, experience, and projects for self-promotion.",
    link: "https://sandaldeepchoudhary.github.io/Profile-Website/",
    github: "https://github.com/SandaldeepChoudhary/Profile-Website",
  },
  // {
  //   image: "/work/3.png",
  //   category: "next js",
  //   name: "User Authentication System",
  //   description:
  //     "Built a secure user authentication system for ensuring access control and data protection.",
  //   link: "/",
  //   github: "https://github.com/SandaldeepChoudhary/User-Authentication-System",
  // },
  {
    image: "/work/2.png",
    category: "javascript",
    name: "Bubble Game",
    description:
      "Pop bubbles and beat levels in this addictive game, offering fun for all ages.",
    link: "https://sandaldeepchoudhary.github.io/Bubble-Game/",
    github: "https://github.com/SandaldeepChoudhary/Bubble-Game",
  },
];

//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    //if category is 'all projects' return all projects, else fliter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      {" "}
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:16 text-center mx-auto">
          My Projects
        </h2>
        {/* tools  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border rounded-full dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
