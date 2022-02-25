import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import "./Postlist.css"
const Postlist = (props) => {
    
    // const [reloadd,setReload] = useState(false);
    // if(reloadd === true ){
    //     window.location.reload();
    // }
    const data = props.singlepost;

    const handleDelete = (id) =>{
       

        const url = `https://evening-river-37909.herokuapp.com/bloodpost/${id}`;
        fetch(url,{
            method:"DELETE",
            headers:{"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
               window.location.reload();
             
            }
        })
    }
    const handleApprove = (id) => {
        axios.post(`https://evening-river-37909.herokuapp.com/publicpost/${id}`)
            .then(res => console.log(res))

        
            const url = `https://evening-river-37909.herokuapp.com/bloodpost/${id}`;
            fetch(url,{
                method:"DELETE",
                headers:{"content-type": "application/json"}
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount){
                    window.location.reload();
                }
            })
            
    }
    
    return (
       <div className='d-flex justify-content-center'>
            <div className='d-flex shadow-lg singlePost'>
            <span className='w-75' style={{fontSize:"18px",float:"right"}}>{data.name}  <strong>{data.bloodgroup} <br /> </strong> রক্তের জন্য পোস্ট করেছেন <br /> <strong>রুগীর সমস্যা : </strong>{data.problem}  </span>
            
            <div><button  onClick={()=> handleApprove(data._id)} className='approve' >APPROVE</button>
            <button onClick={()=> handleDelete(data._id)} className='deny'>DENY</button></div>
        </div>
       </div>
    );
};

export default Postlist;