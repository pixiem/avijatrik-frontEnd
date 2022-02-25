import React from 'react';
import "./List.css"
const List = (props) => {
    const user = props.user;
    const number = `tel:${user.number}`
    return (
        <div className='row align-items-center singlerow shadow-lg'>
            <div className='col-md-1 col-6 text-center text-md-start pb-5'> <img style={{borderRadius:"20px"}} width="60%" src={user.image} alt="" /> </div>
            <div style={{color: "#6D0909",    }} className='col-md-3 col-6 text-center text-md-start'><h3 style={{fontWeight: "600",marginTop:"8px"}}>{user.name}</h3></div>
            <div style={{fontSize:"18px"}} className='col-md-2 col-12 pe-5 text-md-start text-end'> <strong>রক্তের গ্রুপ : {user.blood}</strong> </div>
            <div style={{fontSize:"18px"}} className='col-md-2 col-12pe-5text-md-start pe-5 text-end'> <strong>জেলা : {user.district}</strong> </div>
            <div style={{fontSize:"18px"}} className=' col-md-2 col-12 pe-5 text-end text-md-start '> <strong>ফোন : {user.number}</strong> </div>
            
            <div style={{textAlign:"right"}} className='col-md-2 col-12 text-end pe-5 '><a href={number} class="ui-link"><button className='callbtn shadow-lg'>কল করুন</button></a>  </div>
            
            
        </div>
    );
};

export default List;