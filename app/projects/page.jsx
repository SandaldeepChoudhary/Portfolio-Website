"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Income Expense App",
    description: "loremsad sadfa sdd sadf sgsdfg addg d gdfg df dfgd dfg d",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Portfolio Website",
    description: "loremsad sadfa sdd sadf sgsdfg addg d gdfg df dfgd dfg d",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "User Authentication System",
    description: "loremsad sadfa sdd sadf sgsdfg addg d gdfg df dfgd dfg d",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Profile Website",
    description: "loremsad sadfa sdd sadf sgsdfg addg d gdfg df dfgd dfg d",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Bubble Game",
    description: "loremsad sadfa sdd sadf sgsdfg addg d gdfg df dfgd dfg d",
    link: "/",
    github: "/",
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
  const filteredProjects = projectData.filter(project => {
    //if category is 'all projects' return all projects, else fliter by category
    return category === "all projects" ? project : project.category === category;
  })

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
                onClick={()=>setCategory(category)}
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
            {filteredProjects.map((project, index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}></ProjectCard>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
