import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const ContactDemo = () => {
  return (
    <div className="p-10">
      <div className="border rounded-lg p-6">
        <div className="container">
          <div className="contact border-b pb-6 mb-6">
            <div className="contactTitle flex flex-col md:flex-row justify-between items-start">
              <ScrollAnimation
                className="w-full md:w-1/3 pr-4"
                animateIn=" animate__fadeInDown"
                duration={2}
                delay={600}
              >
                <div>
                  <h1 className="text-2xl font-bold">Get in touch</h1>
                  <p>
                    "Contact me effortlessly! Tap on the provided contact
                    details below to connect with me. I'm eager to hear from
                    you. Thank you!"
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                className=" contactContent w-full md:w-2/3 pl-4 grid grid-cols-1 md:grid-cols-2 gap-3"
                animateIn=" animate__fadeInDown"
                duration={4}
                delay={700}
              >
                <div className="phoneNumber border bg-gray-100 p-4">
                  <h3 className="font-bold">Phone Number</h3>
                  <p>
                    <a
                      href="tel:+0948987536"
                      className="text-blue-500 hover:underline"
                    >
                      0948987536
                    </a>
                  </p>
                </div>
                <div className="gitHub border bg-gray-100 p-4">
                  <h3 className="font-bold">Github</h3>
                  <p>
                    <a
                      href="https://github.com/dragonfly9999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Dragonfly9999
                    </a>
                  </p>
                </div>
                <div className="gmail border bg-gray-100 p-4">
                  <h3 className="font-bold">Gmail</h3>
                  <p>
                    <a
                      href="mailto:henwir42@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      henwir42@gmail.com
                    </a>
                  </p>
                </div>
                <div className="faceBook border bg-gray-100 p-4">
                  <h3 className="font-bold">Facebook</h3>
                  <p>
                    <a
                      href="https://www.facebook.com/profile.php?id=100085857054052"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Ngoc Long
                    </a>
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="location">
            <div className="locationTitle flex flex-col md:flex-row justify-between items-start">
              <ScrollAnimation
                className="w-full md:w-1/3 pr-4"
                animateIn=" animate__fadeInDown"
                duration={2}
                delay={600}
              >
                <div>
                  <h1 className="text-2xl font-bold">Locations</h1>
                  <p>
                    "On the right, you'll find preliminary details about my
                    current residence and hometown. For any direct inquiries or
                    mailing addresses, feel free to reach out for more details.
                    I eagerly await your response. Thank you!"
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                className="locationContent w-full md:w-2/3 pl-4 grid grid-cols-1 gap-4"
                animateIn=" animate__fadeInDown"
                duration={4}
                delay={700}
              >
                <div className="border bg-gray-100 p-4">
                  <h3 className="font-bold">HCMC</h3>
                  <p>Binh Thanh District, HCMC, Vietnam</p>
                </div>
                <div className="border bg-gray-100 p-4">
                  <h3 className="font-bold">Thanh Hoa</h3>
                  <p>THC, Vietnam</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDemo;
