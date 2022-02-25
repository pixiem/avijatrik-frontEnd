import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import BlogSection from '../BlogSection/BlogSection';
import BloodReq from '../BloodRequest/BloodReq';
import Featured from '../featured/Featured';
import HeaderOne from '../HeaderOne/HeaderOne';
import Activities from '../OurActivities/Activities';
import "./Home.css"



const Home = () => {
    const [allposts, setAllposts]= useState([]);
 
    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/bloodpost`)
            .then(res => res.json())
            .then(data => {
                setAllposts(data);
            })
    }, [])
console.log(allposts)
    const {user} = useFirebase();
    const [myPost , setMypost] = useState([]);
const email = user.email;
    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/mypost/${email}`)
            .then(res => res.json())
            .then(data => {
                setMypost(data);
            })
    }, [email])


    // const  [allpostData,setAllpostData] = useState([]);
    const [allpost, setAllpost]= useState([]);
    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/getdata`)
            .then(res => res.json())
            .then(data => {
                setAllpost(data.reverse());
            })
    }, [])






    const [page, setPage] = useState(true);
    const pageclick = e => {
        setPage(true);

    }
    const pagetwoclick = e => {
        setPage(false);

    }
    return (<>
        <section style={{ width: "98%" }}>
            <div className='container'> <span style={{color:"white"}}>0</span> </div>
        
          <div className="container  d-flex justify-content-center" > 
            
            
             
            <button onClick={pageclick}
                    className="our-activity-btn d-flex">
                    <div style={{backgroundColor:"#39b54a ",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                    borderTopLeftRadius:"15px",
                    borderBottomLeftRadius:"15px",
                padding:"15px",height:"100%"}} > <img width="45px" src="./PikPng.com_white-heart-png-transparent_5740329.png" alt="" /> </div>
                    <div style={{backgroundColor:"white",
                width:"100%",
                display:"flex", justifyContent:"center", alignItems:"center",height:"100%",borderRadius:"15px"}}> <span style={{fontSize:"22px"}}>আমাদের কায্যক্রম </span> </div>
                </button> 
                <button onClick={pagetwoclick}
                    className="donate-blood-btn d-flex ms-3">
                    <div style={{backgroundColor:"#FF013C ",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    borderTopLeftRadius:"15px",
                    borderBottomLeftRadius:"15px",
                padding:"15px",height:"100%"}} > <img width="40px" src="./Water-Drop-256.png" alt="" /> </div>
                    <div style={{backgroundColor:"white",
                width:"100%",
                display:"flex", justifyContent:"center", alignItems:"center",height:"100%",borderRadius:"15px"}}> <span style={{fontSize:"24px"}}>রক্তদান করুন </span> </div>
                </button> 
               
               
                
                 </div>
                 
               
            <div>
            {myPost.length > 0 && <div className='d-flex  flex-column justify-content-center hahahahaha'>
                    <div  className='notification shadow-lg w-50 m-3' 
                  >
                    <div style={{backgroundColor:"#fe9900",
                    padding:"15px",
                  
                    width:"60px",
                    borderBottomLeftRadius:"12px",
                    borderTopLeftRadius:"12px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"}} > <img
                    width="20px" src="./warning-16.ico" alt="" /></div>
                    <div style={{
                        display:"flex",
                        textAligh:"center",
                        alignItems:"center",
                        padding:"8px"
                    }} > <span style={{color:"#fe9900",
                    fontWeight:"600",
                    }}  > {myPost.length} টি পোস্ট পেন্ডিং রয়েছে</span> </div>
                </div>  </div> }
            
            
              {user.email === "avijatrikbloodbank@gmail.com" && 
                 <div className='d-flex mt-3 flex-column justify-content-center hahahahaha'>
                     <div  className='notification shadow-lg w-50' 
                >
                  <div style={{backgroundColor:"#FF013C",
                  padding:"15px",
                 
                  width:"60px",
                  borderBottomLeftRadius:"12px",
                  borderTopLeftRadius:"12px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center"}} > <img
                  width="30px" src="./Hand-Sign-04-256.png" alt="" /></div>
                  <div style={{
                      display:"flex",
                      textAligh:"center",
                      alignItems:"center",
                      padding:"8px"
                  }} > <span style={{color:"#FF013C",
                  fontWeight:"600",
                  }}  > রক্তের জন্য পোস্ট করেছেন {allposts.length} জন </span> </div>
              </div>
                 </div> }
                
              
                {page && <HeaderOne active={pagetwoclick}></HeaderOne>}
                {!page && <div className="container">
                <div className="d-flex justify-content-center my-5">
                  {user.email &&   <Link to="/bloodPost" className="button-82-pushable" role="button">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            রক্তের জন্য পোস্ট করুন!!!
                        </span>
                    </Link>
                    }
                     
                    
                    {!user.email &&   <Link to="/register" className="button-82-pushable" role="button">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            রক্তের জন্য পোস্ট করতে লগিন করুন !!!
                        </span>
                    </Link>
                    }
                   
                </div>
                    <div className="row">

                        {allpost.map(singleData =>
                            <BloodReq singleData={singleData}></BloodReq>)
                        }


                    </div>
                </div>}

            </div>

        </section>

        {page &&

            <section  >

                <div className="d-flex justify-content-center  my-5">
                  {user.email &&   <Link  to="/bloodPost" className="button-82-pushable" role="button">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            রক্তের জন্য পোস্ট করুন!!!
                        </span>
                    </Link>}
                    
                    {user.email &&  <Link  style={{marginLeft:"10px"}} to="/secchashebi" className="button-82-pushable" role="button">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                          সেচ্ছাসেবী হিসেবে যুক্ত হোন
                        </span>
                    </Link>}
                    {!user.email &&   <Link to="/register" className="button-82-pushable" role="button">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            রক্তের জন্য পোস্ট করতে লগিন করুন !!!
                        </span>
                    </Link>
                    }
                </div>

                {/* <div className="d-flex mt-5 justify-content-center">
                    <span className="header-style" >সম্প্রতি রক্তের জন্য আবেদনকারী
                    </span>

                </div>
                <div className="d-flex justify-content-center">
                    <strong className=" mt-4 mb-5 fonto">অভিযাত্রিক ব্লাড ব্যাংক সোসাইটি</strong>
                </div>
<div className='text-center'><span style={{backgroundColor:"Red"}}>UNDER CONSTRUCTION</span></div>
          */}



               <div>
             <br /><br /><br /><br />
                        <Featured className="mt-5"></Featured>
                        <div className="d-flex mt-5 justify-content-center">
                    <span className="header-stylesss" > বাচতে হলে, জানতে হবে
                    </span>

                </div>
                        <BlogSection></BlogSection>
                        <Activities></Activities>
               </div>

            </section>}








    </>);
};

export default Home;
