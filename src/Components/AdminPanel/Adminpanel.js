import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import Postlist from '../postList/Postlist';
import "./Adminpanel.css";
const Adminpanel = () => {
var done = false ;
    const {user} = useFirebase();
    const fast = user.email;
    const last = 'avijatrikbloodbank@gmail.com'
    if(fast === last){
        var done = true;
    }

console.log(done);
    
   
   
    const [allpost, setAllpost]= useState([]);
 
    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/bloodpost`)
            .then(res => res.json())
            .then(data => {
                setAllpost(data);
            })
    }, [])
    console.log(allpost);
   
    return (<>
        <div className='row container'>
           
        </div>

        {done === true && <div style={{borderRadius:"20px", marginTop:"30px",marginBottom:"30px"}} className='container shadow-lg p-3 '>
            <h3 style={{fontSize:"50px",fontWeight:"700"}} className='text-center approvalTitle' >POST APPROVAL SECTION</h3>
            {allpost.length === 0 && <div>
                <h3 className='text-center'>কনো ব্লাড রিকোয়েস্ট নেই</h3>
            </div>  }
            {allpost.map(post => <Postlist singlepost={post}></Postlist> )}
            {/* {allpost.map(post => <div><h1> hello {post.bloodgroup}</h1></div> )} */}
            
        </div>}
        
        </>);
};

export default Adminpanel;