import React from "react";
import { Avatar, Card, Button } from "antd";
import * as projectAnimation from "../../assets/animation/AnimationProject.json";
import Lottie from "react-lottie";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import JiraImg from "../../assets/image/imgDemo/JiraCaptone.png";
import MovieImg from "../../assets/image/imgDemo/MovieCapstone.png";
import ShopImg from "../../assets/image/imgDemo/SneakerShop.png";

const { Meta } = Card;

const cardData = [
  {
    title: "Sneaker Shop",
    description:
      "The project primarily focuses on API calling functionalities combined with basic UI development.",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    cover: ShopImg,
    link: "https://github.com/dragonfly9999/BtCapstone2_SneakerShop.git",
  },
  {
    title: "Movie Capstone",
    description:
      "Building a basic movie interface with login, registration, and fundamental features of an online cinema.",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
    cover: MovieImg,
    link: "https://github.com/dragonfly9999/BCS09_capstoneMovie_Long_Sang.git",
  },
  {
    title: "Jira Capstone",
    description:
      "Develop a fully functional project management website with all necessary features.",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
    cover: JiraImg,
    link: "https://github.com/NHNSang/jira-captonse.git",
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: projectAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ProjectDemo = () => {
  return (
    <div className="container mx-auto">
      <ScrollAnimation animateIn="animate__fadeInDown" duration={2} delay={600}>
        <div className="actionTitle my-5 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans hover:font-serif font-normal hover:font-bold">
            Project
          </h1>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInDown" duration={2} delay={600}>
        <div className="action flex justify-center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInDown" duration={3} delay={700}>
        <div className="px-5 actionContent">
          <div className="rounded-md bg-black mx-auto px-5 py-5">
            <h3 className="text-center text-white">
              During my time at Cybersoft Training Center, I had the opportunity
              to engage with and practice on several highly realistic projects.
              All Capstone projects were completed in teams, so I gained some
              experience in teamwork. Each project can be viewed in detail on my
              personal Github. Thank you!
            </h3>
          </div>
        </div>
      </ScrollAnimation>
      <div className="flex justify-center my-20">
        <ScrollAnimation animateIn="animate__fadeInDown" duration={4} delay={700}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 cardItems">
            {cardData.map((item, index) => (
              <div key={index} className="max-w-sm">
                <Card
                  className="w-full h-full border-4"
                  cover={<img className="object-cover" alt={`Cover for ${item.title}`} src={item.cover} />}
                  actions={[
                    <Button type="link" key="learn-more" href={item.link} target="_blank">
                      Learn More
                    </Button>,
                  ]}
                >
                  <Meta
                    className="cardContent p-0"
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ProjectDemo;
