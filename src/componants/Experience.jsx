import React from 'react';
import htmllogo from '../../public/htmllogo.png';
import react from '../../public/react.png';
import python from '../../public/python.jpg';
import mongodb from '../../public/mongodb.jpg';
import nodejs from '../../public/nodjs.jpg';
import java from '../../public/java.jpg';
import jslogo from '../../public/jslogo2.png';



function MyPortfolio() {
  return (
    <div name="experience" className="portfolio container mx-auto px-4 md:px-20 py-20">
      <h1 className='text-center'>Experience</h1>
      <hr className='About-hr' /><br />
      <div className="experience row row-cols-1 row-cols-md-5 g-5">
        <div className="col">
          <div className=" cards my-card rounded-full border-[2px] item-center">
            <img src={htmllogo} className="card-img-top" alt="html" />
            <div className="card-body">
              <h5 className="card-title">Html</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards my-card rounded-full">
            <img src={react} className="card-img-top" alt="React" />
            <div className="card-body">
              <h5 className="card-title">React</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards my-card rounded-full">
            <img src={python} className="card-img-top" alt="Python" />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards my-card rounded-full">
            <img src={jslogo} className="card-img-top" alt="Java Script" />
            <div className="card-body">
              <h5 className="card-title">Java Script</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards my-card rounded-full">
            <img src={mongodb} className="card-img-top" alt="MongoDB" />
            <div className="card-body">
              <h5 className="card-title">MongoDB</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards my-card rounded-full">
            <img src={nodejs} className="card-img-top" alt="Node.js" />
            <div className="card-body">
              <h5 className="card-title">Node.js</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards my-card rounded-full">
            <img src={java} className="card-img-top" alt="Java" />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
      <br /><br /><br />
      <hr className='About-hr' />
    </div>
  );
}

export default MyPortfolio;
