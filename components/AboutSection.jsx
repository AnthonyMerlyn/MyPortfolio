"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>C# and C++</li>
        <li>MongoDB</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Hamburger Software</li>
        <li>Apprenticeship as Fullstack Developer</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Unity C# Jr.GameDev</li>
        <li>Professional Hybrit Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Hier wechselst du automatisch zu einer anderen Registerkarte, wenn der Timer abläuft.
      const currentIndex = TAB_DATA.findIndex((t) => t.id === tab);
      const nextIndex = (currentIndex + 1) % TAB_DATA.length;
      handleTabChange(TAB_DATA[nextIndex].id);
    }, 4000); //4 Sekunden Timer

    return () => clearTimeout(timer); // Timer löschen, wenn die Komponente unmontiert wird
  }, [tab]);

  return (
    <section className="text-white" id="about">
      
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/AboutImage.jpg" alt="About image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a dedicated full-stack web developer 
          driven by a fervor for crafting dynamic and 
          responsive web experiences. Proficient in<span className="text-yellow-500"> JavaScript</span>, <span className="text-blue-500">TypeScript</span>, 
          React, Redux, Node.js, Express, MongoDB, C#, C++,
          HTML, CSS, and Git, I thrive on continuous learning and 
          constantly enhancing my skill set. Collaborative by nature, 
          I eagerly anticipate collaborating with others to craft 
          extraordinary applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;