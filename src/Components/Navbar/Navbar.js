
import "./Navbar.css";
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import useFirebase from '../../Hooks/useFirebase';
import { useHistory } from "react-router-dom";
import Pending from "../Pending/Pending";


const Navbar = () => {
    const adminEmail = "avijatrikbloodbank@gmail.com";
    var done = false;
    const { user, logout } = useFirebase();
    const [allpost, setAllpost] = useState([]);

    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/alluser`)
            .then(res => res.json())
            .then(data => {
                setAllpost(data);
            })
    }, [])
const [myPost , setMypost] = useState([]);
const [load , setLoad] = useState(false);
const email = user.email;
    useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/mypost/${email}`)
            .then(res => res.json())
            .then(data => {
                setMypost(data);
            })
    }, [email,load])
    
    const regestered = allpost.map(e => e.email);
    if (user.email) {
        if (regestered.includes(user.email)) {
            done = true;

        }
        else { done = false }


    }


    const history = useHistory();


    const logoutt = () => {
        logout()
        let path = "/"
        history.push(path)
    }
    const change = () => {
        let path = "/adminasta"
        history.push(path)
    }


    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }



    return (<>

        <header className="header__middle">
            <div className="ms-5">

            <div className="desktopMobile container">
                    <div className="row">
                       





                        <div style={{marginLeft:"-40px"}} className=" col-2 mt-3 header__middle__menus">
                            <nav className="main-nav " >

                                {/* Responsive Menu Button */}
                                {isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                                </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                                </>}


                                <ul className={boxClass.join(' ')}>
                                    <div className="shadow" style={
                                        {
                                            display: "flex", alignItems: "center",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginLeft: "8px",
                                            borderRadius: "20px"
                                        }}>
                                        <li className="menu-item" >
                                            <NavLink style={{ fontSize: "25px" }} exact activeClassName='is-active' onClick={toggleClass} to={`/`}> হোম </NavLink>
                                        </li>
                                    </div>
                                    <div className="shadow" style={
                                        {
                                            display: "flex", alignItems: "center",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginLeft: "8px",
                                            borderRadius: "20px"
                                       }}>
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/about`} style={{ fontSize: "25px" }}> আমাদের সম্পর্কে </NavLink> </li>
                                    </div>

                                    <div className="shadow" style={
                                        {
                                           
                                            display: "flex", alignItems: "center",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginLeft: "8px",
                                            borderRadius: "20px"
                                       }} >
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/contact`} style={{ fontSize: "25px" }}> যোগাযোগ </NavLink> </li>
                                    </div>
                                    <div className="shadow" style={
                                        {
                                            display: "flex", alignItems: "center",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginLeft: "8px",
                                            borderRadius: "20px"
                                       }}>
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/activity`} style={{ fontSize: "25px" }}> আমাদের কায্যক্রম </NavLink> </li>
                                    </div>

                                    <div className="shadow" style={
                                        {
                                           
                                            display: "flex", alignItems: "center",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginLeft: "8px",
                                            borderRadius: "20px"
                                         }}>
                                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#" style={{ fontSize: "25px" }}> টিম <FiChevronDown /> </Link>
                                            <ul className={boxClassSubMenu.join(' ')} >
                                                <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/comittie`}> পরিচালনা কমিটি </NavLink> </li>
                                                <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/secchashebi`}> সেচ্ছাসেবী  </NavLink> </li>
                                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/registeredMember`}> ব্লাড ডোনার  </NavLink> </li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div className="shadow" style={
                                        {
                                            display: "flex", alignItems: "center",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            justifyContent:"center", height: "80px", marginTop: "20px", marginBottom: "20px", marginLeft: "8px",
                                            borderRadius: "20px"
                                        }}>
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/blog`} style={{ fontSize: "25px" }}> ব্লগ </NavLink> </li>
                                    </div>


                                </ul>


                            </nav>
                        </div>
                        
                        <div style={{ marginTop: "10px", }} className="col-7 logo-sec"><img width="100%" src="./260553138_384731159947544_7058977077912748612_n.png" alt="" /> </div>
                        {done && <div className="col-3 mt-4 ">
                            <div className="d-flex flex-column justify-content-center" data-toggle="modal" data-target="#exampleModalCenterr"> <center><img style={{ borderRadius: "50%" }} width="40px" src={user.photoURL} alt="" /></center>
                                <h6 style={{ fontWeight: "700",
                                fontSize:"12px",
                                textAlign:"center", marginTop: "10px" }}>{user.displayName}</h6>
                            </div>
                            <div class="modal fade" id="exampleModalCenterr" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class=" d-flex justify-content-center modal-dialog modal-dialog-centered" role="document">
                                    <div style={{width:"80%" ,textAlign:"center"}}  class="modal-content">
                                      
                                        <div class="modal-body ">
                                            <h2 class="modal-title" id="exampleModalLongTitle">
                                            <center><img  className="shadow-lg" style={{ borderRadius: "50%",marginTop:"20px" }} width="60px" src={user.photoURL} alt="" />
                                <h3 style={{ fontWeight: "700", marginTop: "10px",marginBottom:"30px" }}>{user.displayName}</h3></center>
                                {user.email === adminEmail && <div onClick={change} data-dismiss="modal" className='text-center mt-3 container'>
                                                <Link style={
                                                    {
                                                        textDecoration: "none", fontSize: "16px",
                                                        fontWeight: "400",
                                                        color: "white",
                                                        borderRadius: "6px", backgroundColor: "#dc3545", padding: "8px"
                                                    }} to="/adminasta">কন্ট্রোল সেন্টার</Link>
                                            </div>}
                                <hr />
                                               </h2>
                                               
     <div >
     <div><span style={{fontSize:"20px",fontWeight:"500", color:"#6D0909" }}>আপনার {myPost.length}  টি পোস্ট পেন্ডিং রয়েছে</span> </div>
        <div>
        {myPost.map(pending => <Pending
      data={pending}
      ></Pending> )}  
            </div>  
         </div>                                  

                                            
                                        </div>
                                        <div class="text-cener mb-3">
                                        <center><button style={{width:"100px",margin:"20px"}} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button style={{width:"100px",marginT:"20px"}}onClick={logoutt} type="button" class="btn btn-danger close" data-dismiss="modal" aria-label="Close">LOGOUT</button></center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {!done && <div  className="col-2 mt-4">

                            
                              

                                <div style={{ 
                             marginLeft:"-10px",
                             marginTop:"10px",
                             borderRadius:"30px",
                                backgroundColor:"#39b54a",color:"white",
                                fontSize:"16px",
                            
                                  }} className="lregisterAndReg"> <Link style={{ textDecoration: "none", color: "white" }} to="/register"> সাইন <br /> আপ </Link></div>
                          
                        </div>}






                    </div>
                </div>
                <div className="desktop">
                    <div className="row">
                       
                        <div style={{ marginTop: "25px", }} className="col-3 logo-sec"><img width="100%" src="./260553138_384731159947544_7058977077912748612_n.png" alt="" /> </div>





                        <div className=" col mt-2 header__middle__menus">
                            <nav className="main-nav " >

                                {/* Responsive Menu Button */}
                                {isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                                </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                                </>}


                                <ul className={boxClass.join(' ')}>
                                    <div className="shadow" style={
                                        {
                                            display: "flex", alignItems: "center", height: "130px", marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            borderRadius: "20px"
                                        }}>
                                        <li className="menu-item" >
                                            <NavLink style={{ fontSize: "25px" }} exact activeClassName='is-active' onClick={toggleClass} to={`/`}> হোম </NavLink>
                                        </li>
                                    </div>
                                    <div className="shadow" style={
                                        {
                                            height: "130px",
                                            textAlign: "center",
                                            marginTop: "20px", marginBottom: "20px", marginRight: "8px",
                                            width: "150px", borderRadius: "20px"
                                        }}>
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/about`} style={{ fontSize: "25px" }}> আমাদের সম্পর্কে </NavLink> </li>
                                    </div>

                                    <div className="shadow" style={
                                        { display: "flex", alignItems: "center", height: "130px", marginTop: "20px", marginBottom: "20px", marginRight: "8px", borderRadius: "20px" }} >
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/contact`} style={{ fontSize: "25px" }}> যোগাযোগ </NavLink> </li>
                                    </div>
                                    <div className="shadow" style={
                                        {
                                            display: "flex", alignItems: "center", height: "130px", marginTop: "20px",
                                            textAlign: "center",
                                            marginBottom: "20px", marginRight: "8px", borderRadius: "20px"
                                        }}>
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/activity`} style={{ fontSize: "25px" }}> আমাদের কায্যক্রম </NavLink> </li>
                                    </div>

                                    <div className="shadow" style={
                                        {
                                            display: "flex", alignItems: "center", height: "130px",

                                            marginTop: "20px",

                                            marginBottom: "20px", marginRight: "8px",
                                            paddingRight: "13px", borderRadius: "20px",

                                        }}>
                                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#" style={{ fontSize: "25px" }}> টিম <FiChevronDown /> </Link>
                                            <ul className={boxClassSubMenu.join(' ')} >
                                                <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/comittie`}> পরিচালনা কমিটি </NavLink> </li>
                                                <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/secchashebi`}> সেচ্ছাসেবী  </NavLink> </li>
                                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/registeredMember`}> ব্লাড ডোনার  </NavLink> </li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div className="shadow" style={
                                        { display: "flex", alignItems: "center", height: "130px", marginTop: "20px", marginBottom: "20px", marginRight: "8px", borderRadius: "20px" }}>
                                        <li className="menu-item " ><NavLink style={{ fontSize: "25px" }} onClick={toggleClass} activeClassName='is-active' to={`/blog`} style={{ fontSize: "25px" }}> ব্লগ </NavLink> </li>
                                    </div>


                                </ul>


                            </nav>
                        </div>
                        {done && <div className="col profile-logo">
                            
                            <div data-toggle="modal" data-target="#exampleModalCenter"><img style={{ borderRadius: "50%" }} width="40px" src={user.photoURL} alt="" />
                                <h5 style={{ fontWeight: "700", marginTop: "10px" }}>{user.displayName}</h5>
                            </div>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                      
                                        <div class="modal-body">
                                            <h2 class="modal-title" id="exampleModalLongTitle">
                                            <img  className="shadow-lg" style={{ borderRadius: "50%",marginTop:"20px" }} width="60px" src={user.photoURL} alt="" />
                                <h3 style={{ fontWeight: "700", marginTop: "10px",marginBottom:"30px" }}>{user.displayName}</h3>
                                <hr />
                                               </h2>
     <div >
         {myPost && <div><span style={{fontSize:"20px",fontWeight:"500", color:"#6D0909" }}>আপনার {myPost.length}  টি পোস্ট পেন্ডিং রয়েছে</span> </div> }
         {myPost.map(pending => <div> <Pending
         onClick={()=>{setLoad(true)}}
      data={pending}
      ></Pending> </div>)}    
         </div>                                  

                                            {user.email === adminEmail && <div onClick={change} data-dismiss="modal" className='text-center mt-3 container'>
                                                <Link style={
                                                    {
                                                        textDecoration: "none", fontSize: "16px",
                                                        fontWeight: "400",
                                                        color: "white",
                                                        borderRadius: "6px", backgroundColor: "#dc3545", padding: "8px"
                                                    }} to="/adminasta">কন্ট্রোল সেন্টার</Link>
                                            </div>}
                                        </div>
                                        <div class="text-cener mb-3">
                                        <button style={{width:"100px",margin:"20px"}} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button style={{width:"100px",marginT:"20px"}}onClick={logoutt} type="button" class="btn btn-danger close" data-dismiss="modal" aria-label="Close">LOGOUT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {!done && <div sty className="col mt-4">

                            <div className="d-flex">
                              

                                <div style={{ 
                                width:"110px",
                                backgroundColor:"#39b54a",color:"white",
                                paddingTop: "8px",
                                marginLeft:"60px", marginTop: "40px" }} className="lregisterAndReg"> <Link style={{ textDecoration: "none", color: "white" }} to="/register"> সাইন-আপ </Link></div>
                            </div>
                        </div>}






                    </div>
                </div>
            </div>
        </header>

    </>
    );
};

export default Navbar;