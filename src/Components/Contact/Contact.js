import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div> 
            <h1 style={{color:"white"}}>HELLO <br /> </h1>
            <section  className='row shadow-lg contactForm container d-flex justify-content-center contactForm '>
           
            <div  className='col-md-5 col-12 contactForm-right'>
            <div className=' m-5 '>
             <h3 className='barta mb-4'> আমাদের বার্তা প্রেরন করুন</h3>
               <form action="">
                   <span className='mini-text'>আপনার নাম (সম্পূর্ণ) *</span> <br />
                   <input className='input-style' type="text" />
                   <br />
                   <span className='mini-text'>আপনার ই-মেইল </span>
                   <input className='input-style'  type="email" />
                   <br />
                   <span className='mini-text'>আপনার মোবাইল নম্বর * </span>
                   <input className='input-style'  type="number" /> <br />
                   <span className='mini-text'>আপনার বার্তা লিখুন </span>
                   <br />
                   <input className='input-styles'  type="email" /> 
                   <br />
                   <button className='send-message'>পাঠান</button>
                   
               </form>
            </div>
            </div>
            <div className=' col-md-5  col-12 contactForm-left text-center align-items-center d-flex' >
                <div className='m-5 '>
                <center>  <h3 className='barta mb-4'> আমাদের ঠিকানা</h3></center>
                <span style={{color:"white"}} className='mini-text'>চপ্ট্রগ্রাম মেডিকেল কলেজ হাসপাতাল <br /> রোড নং ৭, লেইন ৩</span> <br /> <br />
                <span> <b>বিস্তারিত জানতে কল করুন </b></span> <br />
                <span className='mini-text'> 01617-155144 <br /> 01866-608262
 </span>
              <br /> <br />
              <a className='me-4' target="_blank" href="https://www.facebook.com/groups/avijatrik.blood"><button  className='send-message'>ফেইসবুক <br /> গ্রুপ</button></a>
              <a target="_blank" href="https://www.facebook.com/avijatrik.blood"><button  className='send-message'>ফেইসবুক <br /> পেইজ</button></a>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Contact;