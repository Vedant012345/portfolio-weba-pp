import React from 'react';
import portfoliologo from '../../public/new logo.jpeg';
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import { FaJs, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="home" className="home max-w-screen-2-1 container mx-auto px-4 md:px-20 py-20">
      <div className="flex flex-col md:flex-row order-2 md:order-1">
        {/* Text content */}
        <div className="md:w-1/2 md:pl-4 flex flex-col justify-center">
          <span className="wellcome text-center md:text-left">Welcome to my portfolio</span><p></p>
          <div className="developer">
            <h1>Hello I'm a <span className="floting-point"><ReactTyped
              strings={["Web developer", "Programmer", "Coder", "Python Developer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            /></span></h1>
          </div>
          <br />
          <p className="text-sm md:texgt-md">I am a dedicated BCA student with a passion for exploring the dynamic world of web development.
            Currently pursuing my education at Shri Shivaji Science College in Amaravati,
            I am deeply immersed in honing my skills and expanding my knowledge base.</p>
          <br />
          <div className="icon-part flex flex-col justify-center">
            <div className="mb-3">
              <h2>Available on</h2>
              <div className="flex flex-wrap justify-start items-center">
                <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit" className="mr-4 mb-2"><FaLinkedin className="icon" size={24} /></a>
                <a href="https://www.instagram.com/mr.vedupawar5/" className="mr-4 mb-2"><FaInstagram className="icon" size={24} /></a>
                <a href="https://www.facebook.com/vedant.pawar.100483?mibextid=ZbWKwL" className="mr-4 mb-2"><FaFacebook className="icon" size={24} /></a>
                
              </div>
            </div>
            <div className="mb-3">
              <h2>Currently working on</h2>
              <div className="flex flex-wrap justify-start items-center">
                <FaJs className="icon mr-4 mb-2 md:text-3x1 hover:scale-110 round-full" size={24} />
                <FaReact className="icon mr-4 mb-2 md:text-3x1 hover:scale-110 round-full" size={24} />
                <FaNodeJs className="icon mr-4 mb-2 md:text-3x1 hover:scale-110 round-full" size={24} />
                <FaPython className="icon mr-4 mb-2 md:text-3x1 hover:scale-110 round-full" size={24} />
                <FaJava className="icon mr-4 mb-2 md:text-3x1 hover:scale-110 round-full" size={24} />
              </div>
            </div>
          </div>
        </div>
        {/* Image on top for mobile, side-by-side for md and lg devices */}
        <div className="image md:w-1/2 mb-4 md:mb-0 order-1">
          <img src={portfoliologo} alt="My Image" className="w-full" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
