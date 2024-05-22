import React from 'react'
import java from '../public/java.jpg'
import toast from 'react-hot-toast';


function Cards({item}) {

    
    $(document).ready(function(){
        $(".python").click(function(){
          if (!$(this).data("clicked")) {
            toast.success("Currently working on it");
            $(this).data("clicked", true);
          }
        });
      });
  return (
    
    <div>
        
       
        <div>
          <div className="col">
          <div className="card my-card w-44">
            <img src={item.image} className="card-img-top w-0" alt="Web Development" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href={item.previewlink}><button className="btn btn-primary">Project Preview</button></a>
              <a href={item.sourcelink}><button className="btn btn-secondary">Source Code</button></a>
            </div>
          </div>
         </div>
         
 
        </div>
   </div>
  )
}

export default Cards
