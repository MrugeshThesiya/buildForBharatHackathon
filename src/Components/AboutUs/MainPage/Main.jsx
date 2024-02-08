import React from "react";
import "../MainPage/Main.css";
export default function Main() {
  return (
    <div className="team-section">
      <div className="container">
        <div className="row">
          <div className="title">
            <h1> ABOUT US</h1>
            <p className="fs-5">
              Digicat offers a comprehensive suite of services designed to
              simplify the digitization of product catalogs. Our team of experts
              works closely with each client to understand their unique needs
              and goals, providing tailored solutions that deliver results.
            </p>
          </div>
          <div className="title2">
            <h1>OUR TEAM</h1>
          </div>
        </div>

        <div className="team-card">
          <div className="card">
            <div className="card-1">
              <div className="img1">
                <img src="https://media.licdn.com/dms/image/D4D03AQGm_x2aMcqUuw/profile-displayphoto-shrink_400_400/0/1704723680772?e=1712793600&v=beta&t=lJE-5mzy1oi5bSLODMOasj_Qi0gHEwZoNsM6EMm73JY" />
              </div>
              <h3 className="content">Mrugesh Thesiya</h3>
            </div>
            <div className="card-2">
              <h1>Full Stack Web Developer</h1>
              <p>
              Meet our dynamic Full Stack Developer and Team Lead, a tech virtuoso with a passion for innovation and a flair for leading 
              teams to success. With a robust background in both front-end and back-end technologies, this developer seamlessly bridges 
              the gap between design and functionality, crafting seamless and responsive applications. As the lead of our hackathon team, 
              they bring not only technical prowess but also exceptional leadership skills, guiding the team to push boundaries and deliver 
              cutting-edge solutions. 
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-1">
              <div className="img2">
                <img src="" />
              </div>
              <h3 className="content">Viral Vaghela</h3>
            </div>
            <div className="card-2">
              <h1>Front-end Web Developer</h1>
              <p>
                Meet our Front-End Developer, a coding maestro who brings websites to life with sleek designs and seamless interactions. 
                While he specializes in crafting visually appealing user interfaces using HTML, CSS, and JavaScript, he also dabbles in
               the backend, adding a sprinkle of backend magic to enhance overall project performance. With a simple yet effective approach,
                Viral also ensures that every website not only looks good but runs smoothly under the hood.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-1">
              <div className="img3">
                <img src="" />
              </div>
              <h3 className="content">Harshi Jain</h3>
            </div>
            <div className="card-2">
              <h1>Front-end Web Developer</h1>
              <p>
                Unleashing the magic of pixels, our Front-End Web Developer is a maestro of design and interactivity. 
                Armed with a palette of HTML and CSS, she breathes life into our digital canvas, creating
                 visually captivating websites that resonate with seamless user experiences. From responsive layouts to 
                eye-catching animations, she also turns ideas into immersive web realities, ensuring every click 
                 is a journey and every scroll a delight.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-1">
              <div className="img4">
                <img src="" />
              </div>
              <h3 className="content">Twinkal Ajmera</h3>
            </div>
            <div className="card-2">
              <h1>Front-end Web Developer</h1>
              <p>
              Crafting a symphony of visuals and functionality, she is the virtuoso behind the scenes.
               With a mastery of HTML and CSS, she sculpts user interfaces that not only captivate but also elevate
                the overall user experience. From the first impression to the last click, our developer weaves code into an art 
                form, making every visit to our website a harmonious blend of design and delight.
              </p>
            </div>
          </div>
        </div>
        <div className="Contact">
          <div className="contact-title">
            <h1>Get in touch</h1>
            <a id="button" href="#">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
