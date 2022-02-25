import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const [signup,setSignup] = useState(false);
    const history = useHistory();
    const [access, setAccess] = useState([]);
    //GOOGLE LOGIN
    const { handleGoogleSignin, user } = useFirebase();
    //REGISTER DATA
    const [name, setName] = useState('');
    const [blood, setBlood] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const nameField = e => {
        setName(e.target.value);
    }
    const bloodField = e => {
        setBlood(e.target.value);
    }
    const numberField = e => {
        setNumber(e.target.value);
    }
    const ndistrictField = e => {
        setDistrict(e.target.value);
    }
    const userData = { email: user.email, name: name, blood: blood, number: number, district: district }
//POST TO DATABASE
    const postSubmit = e => {

        axios.post('https://evening-river-37909.herokuapp.com/alluser', userData)
            .then(res => console.log(res))
        e.target.reset();
        e.preventDefault();
        alert("Registered Succesfully")
        let path = `/`;
        history.push(path);


    }

  useEffect(() => {
        fetch(`https://evening-river-37909.herokuapp.com/alluser`)
            .then(res => res.json())
            .then(data => {
                setAccess(data);
            })
    }, [])
   
    
    
    const regestered = access.map(e => e.email);
    if( user.email){
        if (regestered.includes(user.email)) {
            let path = `/`;
            history.push(path);
            
        }
        
    
    }


    return (<>
    {!user.email && <div className="row d-flex w-100 justify-content-center">
        <div className="col-md-6 col-sm-10 col-xs-6 shadow m-5 p-5" >
            <div className="d-flex flex-column mb-5"> <h1 className="text-center decoration">লগিন করুন</h1>
            </div>

           



            <div style={{
                display: "flex",
                justifyContent: "center", backgroundColor: "blue", color: "white", paddingTop: "10px", paddingBottom: "10px",
                alignItems: "center"
            }} onClick={handleGoogleSignin}> <img width="40px" src="./favpng_google-logo-google-account-g-suite-google-images-google-search.png" alt="" /> <span style={{ fontSize: "30px", paddingLeft: "10px" }}>গুগল লগিন</span> </div>
             <div className='d-flex justify-content-between'>
                <div style={{marginTop:"20px"}}> <Link style={{textDecoration:"none", color:"white" , padding:"12px", fontSize:"22px", backgroundColor:'#39b54a'}} to="/register"> রেজিস্ট্রেশন করুন </Link> </div>
                <div style={{marginTop:"20px"}}> <Link style={{textDecoration:"none", color:"white" , padding:"12px", fontSize:"22px", backgroundColor:'#FF013C '}}  to="/"> বাতিল করুন </Link> </div>
              
            </div>
        </div>
    </div>}
    {signup && <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-sm-10 col-xs-6 shadow m-5 p-5" >
                    <div className="d-flex flex-column mb-5"> <h1 className="text-center decoration">নিচের তথ্য দিয়ে রেজিস্ট্রেশন সম্পূর্ণ করুন</h1>
                    </div>
                    <form onSubmit={postSubmit} className="ms-3">
                        <h5>নাম*</h5>
                        <input required onChange={nameField} placeholder=" আপনার সম্পূর্ণ নাম (বাংলায়)" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="text" name="name" />
                        <h5>রক্তের গ্রুপ* </h5>
                        <select required onChange={bloodField} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} className="custom-select" id="inputGroupSelect01">
                            <option>গ্রুপ সিলেক্ট করুন</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O-</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>


                        <h5>আপনার মোবাইল নাম্বার*</h5>
                        <input required onChange={numberField} placeholder="আপনার মোবাইল নাম্বার দিন" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="text" name="number" />
                        <h5>জেলা* </h5>
                        <select required onChange={ndistrictField} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} className="custom-select" id="inputGroupSelect01">
                            <option disabled selected>জেলা বাছাই করুন</option>
                            <option value="চট্রগ্রাম">চট্রগ্রাম</option>
                            <option value="বরিশাল">বরিশাল</option>
                            <option value="ঢাকা">ঢাকা</option>
                            <option value="খুলনা">খুলনা</option>
                            <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                            <option value="রাজশাহী">রাজশাহী</option>
                            <option value="রঙ্গপুর">রঙ্গপুর</option>
                            <option value="সিলেট">সিলেট</option>
                        </select>










                        <button type='submit' className="post-button" style={{ width: "95%", padding: "8px", marginBottom: "20px" }}>রেজিস্টার</button>

                    </form>



                </div>
            </div>}
    </>);
};

export default Login;