
import React from 'react';
import "./pending.css"
const Pending = (props) => {
    const data = props.data;
    const handleDelete = (id) =>{

        const url = `https://evening-river-37909.herokuapp.com/deletepending/${id}`;
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
        <div className='row  mx-auto justify-content-center singlePost shadow-lg m-3 rounded-5'>
            <div className='text-center col-sm-12 col-md-8 text-start'> 
            <span> <strong>রুগীর নাম :</strong> 
            {data.name} </span> <br />
            <span> <strong>রক্তের গ্রুপ:</strong> 
            {data.bloodgroup} </span> <br />
            <span> <strong>সময় :</strong> 
            {data.time} </span> <br />
            <span> <strong>তারিখ :</strong> 
            {data.date} </span> <br />
            

             </div>
            <div className='col-4 mt-3 '>
                <button onClick={()=>{handleDelete(data._id)}}className='approve'>মুছে ফেলুন</button>
            </div>
        </div>
    );
};

export default Pending;