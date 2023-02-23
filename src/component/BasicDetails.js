import React from 'react'
import './style.css';

const BasicDetails = () => {
   
    const handleSubmit =() =>{
        alert("submitted successfully");
    }
  return (
    <>
     <h2 className='mt-3 ms-3'>Basic Details</h2>
     <div className='mt-3 ms-3'>
         <p className='mt-3'>About my business * (introduction)</p>
         <hr />
     </div>
     <div  className='mt-5 ms-3'>
         <p className='mt-3'>Work since * (year)</p>
         <select id="select">
            <option></option>
            <option>2</option>
            <option>3</option>
         </select>
         <hr />
     </div>
     <div  className='mt-5 ms-3'>
        <p>No. of weddings covered</p>
        <hr />
     </div>
     <div  className='mt-5 ms-3'>
        <h4>Property Type *</h4>
       <div  className='row'>
        
          <div className='col-3'>
                <input  type="checkbox" /> 5 start Hotel  <br/>
                <input  type="checkbox" /> Hotel
          </div>
          <div className='col-3'>
                <input  type="checkbox" /> Banquet Hall <br/>
                <input  type="checkbox" /> Lawns / Farmhouse
          </div>
          <div className='col-3'>
                <input  type="checkbox" /> Heritage Property  <br/>
                <input  type="checkbox" /> Country / Golf Club
          </div>
          <div className='col-3'>
                <input  type="checkbox" /> Restart <br/>
                <input  type="checkbox" /> Restaurant / Lounge Bar
          </div>
       </div>
     </div>   
     <div className='mt-5 ms-3 d-flex'>
        <h6>My Online Presence</h6>  
     </div>
    

     <div className='mt-4 ms-3' id="web">
           <span>My Website URL</span>   
          <span className='bi bi-globe'></span>     
     </div>
     
     <div className='mt-4 ms-3' id="web">
           <span>My Website URL</span>   
          <span className='bi bi-facebook'></span>     
     </div>
     <div className='mt-4 ms-3' id="web">
           <span>My Website URL</span>   
          <span className='bi bi-instagram'></span>     
     </div>

     <button onClick={handleSubmit} className='btn btn-primary button'>Submit</button>
     
    </>
  )
}

export default BasicDetails
