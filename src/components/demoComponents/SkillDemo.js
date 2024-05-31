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
        // Thêm các kỹ năng frontend khác nếu cần
      ],
    },
    {
      title: "Backend",
      skills: [
        { type: "Node.js", level: 80 },
        { type: "SQL", level: 60 },
        { type: "NetJs", level: 60 },
        // Thêm các kỹ năng backend khác nếu cần
      ],
    },
    {
      title: "Other",
      skills: [
        { type: "English", level: 50 },
        { type: "Chinese", level: 85 },
        { type: "Github", level: 75 },
        // Thêm các kỹ năng other khác nếu cần
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
    <div>
      <div className="my-20">
        <ScrollAnimation
          animateIn=" animate__fadeInDown"
          duration={2}
          delay={500}
        >
          <div className="flex items-center mb-20">
            <div className="w-1/2 ml-20">
              <h1 className="text-9xl font-mono italic hover:not-italic text-gray-500">
                Skills
              </h1>
            </div>
            <div className="w-1/2 mr-20">
              <Lottie options={defaultOptions} height={250} width={250} />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn=" animate__fadeInDown"
          duration={3}
          delay={700}
        >
          <div className="container">
            <div className="grid grid-cols-2 gap-4 justify-center items-start  ">
              {skillGroups.map((item, index) => (
                <div
                  key={index}
                  className={`skill-group ${
                    item.title === "Backend" ? "mr-7" : "ml-7"
                  }`}
                >
                  <div className="fixBor">
                    <div className="fixBor-tittle">
                      <p className="font-bold text-2xl">{item.title}</p>
                      <p className="skill-description">
                        Description: A few levels of skill related to{" "}
                        {item.title}
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
    </div>
  );
};

export default SkillDemo;
