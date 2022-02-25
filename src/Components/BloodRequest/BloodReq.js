import React from 'react';
import "./BloodReq.css"

const BloodReq = (props) => {

    const data = props.singleData;
  
    return (
        <div className="  col-md-4">
            <div className="card d-flex mx-auto">
             <br />
                <div className="card-text  d-flex flex-column justify-content-between" >
                    <div>
                    <div style={{fontSize:"25px",marginBottom:"8px"}} className="card-title">{data.bloodgroup } রক্তের প্রয়োজন</div> 
                   <div style={{fontSize:"18px", marginTop:"18px"}}>
                   <b>রুগীর নাম</b> :
                    {data.name} <br/>
                    <b>রুগীর সমস্যা</b> :
                    {data.problem} <br/>
                    <b>সময়</b> :
                    {data.time} <br/>
                    <b>তারিখ</b> :
                    {data.date} <br/>
                    <b>জেলা</b> :
                    {data.district} <br/>
                    <b>স্থান/ঠিকানা</b> :
                    {data.address} <br/>
                    <b>যোগাযোগ</b> :
                    {data.refferance} <br/>
                    <b>রেফারেন্স</b> :
                    {data.contact} <br/> <br />
                    {!data.contactemail && <div><br /> <br /></div> }

                   {data.contactemail && <div>
                    <b>ই মেইল </b> <br />
                    {data.contactemail} <br/>
                   </div> }
                   </div>
                    </div>


                   
                   <div>
                   <button    className="our-activity-btnnn">যোগাযোগ করুন</button>
                   </div>
                    
                   
                </div>
                
            
            </div>
        </div>
    );
};

export default BloodReq;