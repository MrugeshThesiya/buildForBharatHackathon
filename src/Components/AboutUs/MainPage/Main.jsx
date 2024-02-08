import React from "react";
import "../MainPage/Main.css";
export default function Main() {
  return (
    <>
            <h1 className="title"> ABOUT US</h1>
            <p className="title-des">
              Digicat offers a comprehensive suite of services designed to
              simplify the digitization of product catalogs. Our team of experts
              works closely with each client to understand their unique needs
              and goals, providing tailored solutions that deliver results.
            </p>
            <h1 className="title2">OUR TEAM</h1>

        <div className="team-card">
          <div className="card">
            <div className="card-1">
              <div className="img1">
              </div>
              <h3 className="content">Mrugesh Thesiya</h3>
            </div>
            <div className="card-2">
              <h1>Full Stack Web Developer</h1>
              <p>
                Meet our dynamic Full Stack Developer and Team Lead, a tech virtuoso
                 with a passion for innovation and a flair for leading teams to success.
                  With a robust background in both front-end and back-end technologies, 
                  this developer seamlessly bridges the gap between design and functionality,
                   crafting seamless and responsive applications. As the lead of our hackathon team,
                    they bring not only technical prowess but also exceptional leadership skills,
                     guiding the team to push boundaries and deliver cutting-edge solutions.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-1">
              <div className="img2">
                
              </div>
              <h3 className="content">Viral Vaghela</h3>
            </div>
            <div className="card-2">
              <h1>Front-end Web Developer</h1>
              <p>
              Meet our Front-End Developer, a coding maestro who brings websites to life with 
              sleek designs and seamless interactions. While he specializes in crafting visually 
              appealing user interfaces using HTML, CSS, and JavaScript, he also dabbles in the backend, 
              adding a sprinkle of backend magic to enhance overall project performance. With a simple 
              yet effective approach, Viral also ensures that every website not only looks good but runs
               smoothly under the hood.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-1">
              <div className="img3">
                
              </div>
              <h3 className="content">Harshi Jain</h3>
            </div>
            <div className="card-2">
              <h1>Research and Content</h1>
              <p>
              Meet Harshi, our front-end developer exploring the realms of research and content. 
              Harshi combines coding skills with a curiosity for content creation, bringing simplicity
               and functionality to our website. With a focus on user-friendly design, Harshi ensures a
                seamless and enjoyable online experience for our visitors.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-1">
              <div className="img4">
              
              </div>
              <h3 className="content">Twinkal Ajmera</h3>
            </div>
            <div className="card-2">
              <h1>Product Manager</h1>
              <p>
              Say hello to Twinkal, our front-end web developer and product manager. Twinkal 
              handles the design and functionality of our website, making sure it looks good 
              and works well. It's all about creating a user-friendly experience, and Twinkal
               knows just how to balance the technical stuff with a practical touch.
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
    </>
  );
}
