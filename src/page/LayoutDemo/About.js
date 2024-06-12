import React from "react";
import background from "./../../assets/image/imgDemo/bg-about.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "./../../utils/demoFix/style.css";

const About = () => {
  return (
    <div>
      <div
        className="aboutBox"
        style={{
          backgroundImage: `url(${background})`,
          height: "90vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "15px",
        }}
      >
        <ScrollAnimation
          animateIn="animate__fadeInDown"
          duration={2}
          delay={500}
        >
          <div className="container aboutContent my-20 animate__animated animate__fadeInDown">
            <div className="tittle flex justify-center text-5xl font-bold text-purple-200">
              <h1 className="mt-3 underline">About</h1>
            </div>

            <div id="fixLeftDm" className="left ">
              <div className="tittle-content text-center leading-6 tracking-normal">
                <div className="inforTD">
                  <p className="name px-9 text-3xl font-bold mb-8">Long Ngo</p>
                  <div className="hocVan text-start ml-2">
                    <span>Education:</span>
                    <a
                      href="https://www.tnu.edu.tw/"
                      className="text-blue-400 hover:text-blue-600 hover:underline ml-1"
                      title="Visit Tungnan University"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tungnan University
                    </a>
                    <div className="ml-6">
                      <span className="block ml-20">"2018-2022"</span>
                    </div>
                    <p>
                      Field of Study: Information Communication and Computer
                      Information Systems
                    </p>
                    <span>Certifications:</span>
                    <a
                      href="https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=244&cvid=sPHV3oI/fIWCvrqOuTivoA=="
                      className="text-blue-400 hover:text-blue-600 hover:underline ml-1"
                      title="Learn about IC3 certification"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IC3
                    </a>
                    <span>,</span>
                    <a
                      href="https://login.cybersoft.edu.vn/certification/?inf=eyJob1RlbiI6Ik5nw7QgTmfhu41jIExvbmciLCJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsInRlbkxvVHJpbmgiOiJQUk9GRVNTSU9OQUwgRlJPTlQtRU5EIERFVkVMT1BFUiIsImRpZW1DdW9pS2hvYSI6OC41LCJpc1h1YXRTYWMiOmZhbHNlLCJtYUNodW5nTmhhbiI6IkZFIiwiaXNJbkNodW5nTmhhbiI6ZmFsc2UsIm1hU29DaHVuZ05oYW4iOjE5NzEsInNvVGhhbmdIb2MiOiI2IiwibmdheUNhcENodW5nTmhhbiI6IjIwMjQtMDMtMjlUMDM6MDA6MDUiLCJmdWxsTWFDaHVuZ05oYW4iOiJGRS8yMDI0LzIwMjQxOTcxIiwibWFUaG9uZ1RpbkhvY1RhcCI6NDExMiwiaXNCYW9WZUN1b2lLaG9hIjp0cnVlfQ=="
                      className="text-blue-400 hover:text-blue-600 hover:underline ml-1"
                      title="Learn about certificate of completion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Cybersoft
                    </a>
                  </div>
                </div>
                <div className="infor mt-7 text-white font-semibold">
                  <p>
                    As a person who has graduated in Information Technology for
                    over a year, I've had a period where I worked outside of my
                    field due to personal reasons. Consequently, I still lack
                    extensive professional experience up to this point. However,
                    I aspire to utilize the knowledge acquired during my
                    university education along with the learning opportunities
                    at Cybersoft. I am hopeful to contribute to the company and
                    grow professionally. Enclosed is a simple PDF resume for
                    your consideration. Thank you!
                  </p>
                </div>
              </div>
              <div className="flex justify-center butCV mt-3">
                <a
                  href="https://drive.google.com/file/d/1do8WjfinlSS-ym7GFHQlT_tERV4uW4pB/view?usp=sharing"
                  download
                  className="bacsic-cv py-3 px-8 bg-blue-500 text-white rounded-lg shadow hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic CV
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
