import React from 'react';
import Webdev from '../../public/web dev.jpg';
import react from '../../public/react.png';
import python from '../../public/python.jpg';
import mongodb from '../../public/mongodb.jpg';
import nodejs from '../../public/nodjs.jpg';
import java from '../../public/java.jpg';
import jslogo from '../../public/jslogo2.png';
import toast from 'react-hot-toast';




function MyPortfolio() {
  $(document).ready(function(){
    $(".python").click(function(){
      if (!$(this).data("clicked")) {
        toast.success("Currently working on it");
        $(this).data("clicked", true);
      }
    });
  });
  return (
    <div name="portfolio" className="portfolio container mx-auto px-4 md:px-20 py-20">
         <h1 className='text-center'>Portfolio</h1><hr className='About-hr' /><br />
      <div className="portfolio row row-cols-1 row-cols-md-5 g-5 ">
        <div className="col">
          <div className="card my-card">
            <img src={Webdev} className="card-img-top" alt="Web Development" />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="https://www.linkedin.com/posts/vedant-pawar-331b21291_yhills-webdevelopment-internship-activity-7124853398490779648-IbP5?utm_source=share&utm_medium=member_desktop"><button className="btn btn-primary">Project Preview</button></a>
              <a href="https://github.com/Vedant012345/Vedant-Pawar"><button className="btn btn-secondary">Source Code</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card">
            <img src={react} className="card-img-top" alt="React" />
            <div className="card-body">
              <h5 className="card-title">React</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7190939751900733441/"><button className="btn btn-primary">Project Preview</button></a>
             <a href="https://github.com/Vedant012345/myportfolio"><button className="btn btn-secondary">Source Code</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card">
            <img src={python} className="card-img-top" alt="Python" />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a><button className="python btn btn-primary">Project Preview</button></a>
             <a><button className="python btn btn-secondary">Source Code</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card">
            <img src={jslogo} className="card-img-top" alt="js" />
            <div className="card-body">
              <h5 className="card-title">Java Script</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a><button className="python btn btn-primary">Project Preview</button></a>
             <a><button className="python btn btn-secondary">Source Code</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card">
            <img src={mongodb} className="card-img-top" alt="MongoDB" />
            <div className="card-body">
              <h5 className="card-title">MongoDB</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a><button className="python btn btn-primary">Project Preview</button></a>
             <a><button className="python btn btn-secondary">Source Code</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card">
            <img src={nodejs} className="card-img-top" alt="Node.js" />
            <div className="card-body">
              <h5 className="card-title">Node.js</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a><button className="python btn btn-primary">Project Preview</button></a>
             <a ><button className="python btn btn-secondary">Source Code</button></a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card my-card">
            <img src={java} className="card-img-top" alt="java" />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a><button className="python btn btn-primary">Project Preview</button></a>
             <a><button className="python btn btn-secondary">Source Code</button></a>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div><br /><br /><br /><hr className='About-hr'/>
    </div>
  );
}

export default MyPortfolio;
