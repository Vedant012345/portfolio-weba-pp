import React from 'react'


function Xcards({item}) {
  return (
    <div>
       <div className="col-xcard">
          <div className=" cards my-card rounded-full border-[2px] item-center">
            <img src={item.image} className="card-img-top" alt="html" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Xcards
