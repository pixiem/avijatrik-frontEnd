import React, { useEffect, useState } from 'react';
import List from '../List/List';
import "./Registeredmember.css"
const RegisteredMember = () => {

       
   
    const [alluser, setAlluser]= useState([]);
    console.log(alluser);
    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/registereduser`)
            .then(res => res.json())
            .then(data => {
                setAlluser(data);
            })
    }, [])

    return (
        <div style={{paddingTop:"130px"}} className='container'> <br /> <br />
             <div  className=" my-5 text-center justify-content-center">
                    <span className="header-style" >ব্লাড ডোনার
                    </span>

                </div>
          {alluser.map(user => <List user={user}></List>)}
        </div>
    );
};

export default RegisteredMember;