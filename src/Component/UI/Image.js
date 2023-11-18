import React, { Fragment } from "react";



const CardImage=props=>{
return(
    <Fragment>
        <div className="d-flex justify-content-center">
        <img
        src={props.src}
        alt={props.alt}
        style={{ width: '200px', height: '200px', display: 'block',border:'2px solid black' }}
      />
        </div>
    </Fragment>
)
}

export default CardImage