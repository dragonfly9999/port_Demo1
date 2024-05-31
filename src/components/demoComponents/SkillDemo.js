import React from "react";
import { SkillBar } from "react-skillbars";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import * as loginAnimation from "../../assets/animation/AnimationSkill.json";
import Lottie from "react-lottie";

const SkillDemo = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { type: "TypeScript", level: 75 },
        { type: "React", level: 85 },
        { type: "Sass", level: 85 },
        { type: "Redux", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { type: "Node.js", level: 80 },
        { type: "SQL", level: 60 },
        { type: "NetJs", level: 60 },
      ],
    },
    {
      title: "Other",
      skills: [
        { type: "English", level: 50 },
        { type: "Chinese", level: 85 },
        { type: "Github", level: 75 },
      ],
    },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="my-20">
      <div className="container">
        <div className=" skillUp grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="ml-20">
            <h1 className="text-9xl font-mono italic hover:not-italic text-gray-500">
              Skills
            </h1>
          </div>
          <div className="mr-20">
            <Lottie options={defaultOptions} height={250} width={250} />
          </div>
        </div>
      </div>

      <ScrollAnimation animateIn=" animate__fadeInDown" duration={3} delay={700}>
        <div className="container">
          <div className=" skillBox grid grid-cols-1 md:grid-cols-2 gap-10 ml-20">
            {skillGroups.map((item, index) => (
              <div key={index} className="skill-group">
                <div className="fixBor">
                  <div className="fixBor-tittle">
                    <p className="font-bold text-2xl">{item.title}</p>
                    <p className="skill-description">
                      Description: A few levels of skill related to {item.title}
                    </p>
                  </div>
                  <div className="p-3">
                    <div>
                      <SkillBar skills={item.skills} colors={colors} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default SkillDemo;
