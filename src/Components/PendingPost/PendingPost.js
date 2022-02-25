import React, { useState } from 'react';

const PendingPost = (props) => {
   
    const [reloadd,setReload] = useState(false);
    if(reloadd){
        window.location.reload();
    }
    const post = props.post;
    const handleDelete = (id) =>{
     

        const url = `https://evening-river-37909.herokuapp.com/bloodpost/${id}`;
        fetch(url,{
            method:"DELETE",
            headers:{"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                setReload(true);
               
            }
        })
    }
    return (
        <div className='d-flex'>
            <div  style={{fontSize:"18px"}}> <strong> <span>{post.name} এর {post.bloodgroup} রক্তের প্রয়োজন</span></strong> </div>
            <div>
            <button onClick={()=> handleDelete(post._id)} className=''>DENY</button>
            </div>
        </div>
    );
};

export default PendingPost;