import React from 'react';

function About() {
  return (
    <div name="about" className="container mx-auto px-4 md:px-20 py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <hr className="about-hr" />
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Education and Training</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p className="About-content">Currently in my second year of BCA at Shri Shivaji Science College, Amravati.</p>
              <p className="About-content">Holds certificates in Java, Python, and web development.</p>
              <p className="About-content">Completed internship with Yhills, gaining hands-on industry experience.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Skills and Expertise</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p className="About-content">Proficient in HTML, CSS, JavaScript, React, and Python.</p>
              <p className="About-content">Working on Node.js and MongoDB.</p>
              <p className="About-content">Basic knowledge of machine learning for data science.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Professional Experience</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p className="About-content">Actively engaged as a web developer, showcasing a strong command over various web development technologies.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <strong>Achievements and Awards</strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p className="About-content">Represented Sant Gadge Baba Amravati University twice in inter-university competitions in 2023 and 2024.</p>
              <p className="About-content">Represented Amravati twice in state-level matches.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <strong>Mission Statement</strong>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p className="About-content">Passionate about leveraging my skills and expertise in web development and data science to create innovative solutions and contribute to technological advancements.</p>
              <p className="About-content">Committed to continuous learning and growth to excel in the ever-evolving field of technology.</p>
            </div>
          </div>
        </div>
      </div><br /><br /><br /><hr className='About-hr'/>
    </div>
  );
}

export default About;
