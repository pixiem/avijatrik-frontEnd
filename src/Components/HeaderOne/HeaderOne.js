import React from 'react';
import "./HeaderOne.css"

const HeaderOne = (props) => {
    const active = props.active;
    
    return (
        <div style={{width:"90%"}} className=" header_one  container row shadow bg-white p-5">
          <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>রক্ত দিন, জীবন বাঁচান !!</h2>
              <h5>“যদি হই রক্তদাতা জয় করবো মানবতা” – “আমার রক্তে যদি বাঁচে একটি প্রান তাহলে কেনো করবো না রক্তদান”</h5>
             
          
<div style={{display:"flex", flexDirection:"column", width:"100%",justifyContent:"center"}}>
<button onClick={active} class="button-37 w-md-50" role="button">  <img style={{marginRight:"10px"}} width="25px" src="./Water-Drop-256.png" alt="" /> রক্তদান করুন</button>

           
<a style={{textAlign:"center"}} href="tel:+8801617-155144"class="ui-link"> <button  class="button-38 hola w-md-75" role="button"> <img  style={{marginRight:"7px"}} width="40" src="./Conference-Call-03-256.png" alt="" /> <span>জরুরী ভিত্তিতে যোগাযোগ করুন</span> </button></a>  
<a style={{textAlign:"center"}} href="tel:+8801617-155144"class="ui-link"> <button  class="button-38 lola w-md-75" role="button"> <img  style={{marginRight:"7px"}} width="50" src="./Conference-Call-03-256.png" alt="" /> <span> <br /> <br /> জরুরী ভিত্তিতে <br /> যোগাযোগ করুন</span> </button></a> 
</div>
              </div>
          <div className="col-md-6 mt-5 d-flex flex-column justify-content-center" >
              <img  style={{  borderRadius:"50px"}} src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/04/covidBloodDonor-1213554544-770x553-1.jpg" alt="" />
          </div>
        </div>
    );
};

export default HeaderOne;