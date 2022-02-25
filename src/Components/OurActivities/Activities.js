import React, { useEffect,useState } from 'react';

import "./Activities.css"

const Activities = (props) => {
    const [alluser, setAlluser]= useState([]);
    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/alluser`)
            .then(res => res.json())
            .then(data => {
                setAlluser(data);
            })
    }, [])
    const registeredMember = alluser.length + 1450;
    return (<div className="hahaha">
     <h1 className='respo'>আমাদের অর্জন সমূহ</h1>
        <div className="card-head">
           
           
        
           <div className="single-activity-card col-md-3 col-sm-6" >
<div className="activities-card"><img src="./PngItem_1152010.png" alt="" /></div>
<h2 className="activities-font">{registeredMember}</h2>
<h4> নিবন্ধিত সদস্য
     </h4>


</div>
           <div className="single-activity-card col-md-3 col-sm-6" >
<div className="activities-card"><img src="./PngItem_724011.png" alt="" /></div>
<h2 className="activities-font">50+</h2>
<h4> সম্মাননা প্রাপ্তি </h4>


</div>
           <div className="single-activity-card col-md-3 col-sm-6" >
<div className="activities-card"><img src="./SeekPng.com_blood-hand-png_1012406.png" alt="" /></div>
<h2 className="activities-font">25000+ </h2>
<h4> রক্তদান </h4>


</div>

        </div>
    </div>);
};

export default Activities;

